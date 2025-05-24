export default defineNuxtPlugin(() => {
    // Only register in browser context
    if (process.server || !('serviceWorker' in navigator)) return;

    // Wait for load event
    window.addEventListener('load', async () => {
        try {
            // First wait for the main service worker to be registered by the PWA module
            await navigator.serviceWorker.ready;

            // Now register our custom push notification logic
            registerPushEvents();
        } catch (error) {
            console.error('Service worker registration failed:', error);
        }
    });
});

function registerPushEvents() {
    // Add push notification support to the existing service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'PUSH_READY') {
            console.log('Push notification service is ready');
        }
    });

    // Add this handler to the active service worker
    navigator.serviceWorker.ready.then(registration => {
        // Tell the service worker to add push handlers
        registration.active.postMessage({
            type: 'ADD_PUSH_LISTENERS'
        });
    });
}