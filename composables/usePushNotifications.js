import { ref, onMounted } from 'vue';

export function usePushNotifications() {
    const isSupported = ref(false);
    const isSubscribed = ref(false);
    const subscription = ref(null);
    const vapidPublicKey = 'YOUR_VAPID_PUBLIC_KEY'; // Replace with your actual VAPID public key

    // Convert VAPID key to Uint8Array format
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    // Check if service worker and push messaging is supported
    async function checkSupport() {
        if (process.server) return false;

        const supported = 'serviceWorker' in navigator && 'PushManager' in window;
        isSupported.value = supported;
        return supported;
    }

    // Load push extension into service worker
    async function loadPushExtension() {
        const registration = await navigator.serviceWorker.ready;

        // Import the push notification extension script
        try {
            // This will execute the script in the service worker context
            await registration.active.importScripts('/sw-push-extension.js');
            return true;
        } catch (error) {
            console.error('Failed to load push extension:', error);
            return false;
        }
    }

    // Request permission for notifications
    async function requestPermission() {
        if (!await checkSupport()) return false;

        try {
            const permission = await Notification.requestPermission();
            return permission === 'granted';
        } catch (error) {
            console.error('Error requesting notification permission:', error);
            return false;
        }
    }

    // Subscribe to push notifications
    async function subscribeToPush() {
        try {
            if (!await checkSupport()) return null;
            if (!await requestPermission()) return null;

            // Wait for service worker to be ready
            const registration = await navigator.serviceWorker.ready;

            // Check for existing subscription
            const existingSubscription = await registration.pushManager.getSubscription();
            if (existingSubscription) {
                subscription.value = existingSubscription;
                isSubscribed.value = true;
                return existingSubscription;
            }

            // Subscribe to push
            const newSubscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)
            });

            subscription.value = newSubscription;
            isSubscribed.value = true;

            // Send subscription to server
            await sendSubscriptionToServer(newSubscription);

            return newSubscription;
        } catch (error) {
            console.error('Error subscribing to push notifications:', error);
            return null;
        }
    }

    // Send subscription to server
    async function sendSubscriptionToServer(subscription) {
        try {
            const response = await fetch('/api/notifications/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subscription)
            });

            return await response.json();
        } catch (error) {
            console.error('Error saving subscription on server:', error);
        }
    }

    // Unsubscribe from push notifications
    async function unsubscribeFromPush() {
        try {
            if (!subscription.value) return;

            await subscription.value.unsubscribe();

            // Inform server about unsubscription
            await fetch('/api/notifications/unsubscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subscription.value)
            });

            subscription.value = null;
            isSubscribed.value = false;
        } catch (error) {
            console.error('Error unsubscribing from push:', error);
        }
    }

    // Initialize on mount
    onMounted(async () => {
        if (await checkSupport()) {
            await loadPushExtension();

            const registration = await navigator.serviceWorker.ready;
            const existingSubscription = await registration.pushManager.getSubscription();

            if (existingSubscription) {
                subscription.value = existingSubscription;
                isSubscribed.value = true;
            }
        }
    });

    return {
        isSupported,
        isSubscribed,
        subscription,
        requestPermission,
        subscribeToPush,
        unsubscribeFromPush
    };
}