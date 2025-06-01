<template>
  <div class="flex h-screen font-sans">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-50 p-6 flex flex-col justify-between">
      <div>
        <h1 class="text-xl font-semibold mb-6 text-gray-800">Decodemymoji</h1>
        <div class="space-y-4">
          <button class="flex items-center text-purple-600 hover:text-purple-700">
            <span class="mr-2">+</span> New chat
          </button>
          <button class="flex items-center text-gray-600 hover:text-gray-700">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Chat History
          </button>
          <button class="flex items-center text-gray-600 hover:text-gray-700">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            Explore Emoji
          </button>
        </div>
        <div class="mt-6">
          <h2 class="text-sm font-semibold text-gray-500 mb-2">Today</h2>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>Happy birthday to you</li>
            <li>Vacation vibes with sun...</li>
            <li>I'm feeling sick and tired...</li>
            <li>Good morning, have a gr...</li>
            <li>Let's go to the beach</li>
          </ul>
          <h2 class="text-sm font-semibold text-gray-500 mt-4 mb-2">Yesterday</h2>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>I love you</li>
            <li>Time to launch</li>
            <li>I'm stuck in traffic</li>
            <li>It's raining again</li>
            <li>Feeling sleepy</li>
            <li>Let's eat fast food or have...</li>
            <li>Congrats on graduating!</li>
            <li>Engaged or getting married</li>
          </ul>
        </div>
      </div>
      <div class="space-y-2">
        <button class="flex items-center text-gray-600 hover:text-gray-700">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          Settings
        </button>
        <button class="flex items-center text-gray-600 hover:text-gray-700">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Log out
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-white p-8 overflow-y-auto">
      <!-- Header -->
      <div class="flex justify-end items-center mb-6">
        <button class="text-gray-600 hover:text-gray-800 mr-4">Feedback</button>
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">JD</div>
        <button class="ml-4 text-gray-600 hover:text-gray-800 text-xl">×</button>
      </div>

      <!-- Navigation Links -->
      <div class="flex mb-8">
        <div class="w-1/4">
          <ul class="space-y-3 text-gray-600">
            <li><a href="#" class="hover:text-gray-800">Account</a></li>
            <li><a href="#" class="hover:text-gray-800">Settings</a></li>
            <li><a href="#" class="hover:text-gray-800">Help & FAQs</a></li>
            <li><a href="#" class="hover:text-gray-800">Terms of Service</a></li>
            <li><a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-gray-800">About</a></li>
            <li><a href="#" class="hover:text-gray-800">Log out</a></li>
          </ul>
        </div>

        <!-- Content -->
        <div class="w-3/4">
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">Privacy Policy</h1>
            <p class="text-sm text-gray-500">Effective Date: 20 June 2025</p>
          </div>
          <p class="text-gray-600 mb-6">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use the Emoji App ("the App").
          </p>

          <!-- Section 1 -->
          <div class="mb-6">
            <h2 class="text-lg font-semibold mb-2">1. Information We Collect</h2>
            <p class="text-gray-600">
              We collect limited information, such as device type, usage data, and preferences, to improve your experience. We do not collect personal information like your name, email, or contacts unless explicitly provided.
            </p>
          </div>

          <!-- Section 2 -->
          <div class="mb-6">
            <h2 class="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
            <p class="text-gray-600 mb-2">We use your data to:</p>
            <ul class="list-disc list-inside text-gray-600 mb-2">
              <li>Improve app functionality and performance</li>
              <li>Personalize your emoji experience</li>
              <li>Fix bugs and ensure app security</li>
            </ul>
            <p class="text-gray-600">
              We do not sell or share your personal data with third parties. We may use trusted third-party tools for analytics and app performance, but they are bound by strict privacy agreements.
            </p>
          </div>

          <!-- Section 3 -->
          <div class="mb-6">
            <h2 class="text-lg font-semibold mb-2">2. Your Choices</h2>
            <p class="text-gray-600">
              You can manage app permissions in your device settings. You can also delete the app any time to stop data collection.
            </p>
          </div>

          <!-- Section 4 -->
          <div class="mb-6">
            <h2 class="text-lg font-semibold mb-2">3. Children's Privacy</h2>
            <p class="text-gray-600">
              The app is intended for general audiences. We do not knowingly collect data from children under 13.
            </p>
          </div>

          <!-- Section 5 -->
          <div>
            <h2 class="text-lg font-semibold mb-2">4. Changes to This Policy</h2>
            <p class="text-gray-600">
              We may update the Privacy Policy occasionally. We'll notify you if there are major changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy'
}
</script>

<style scoped>
/* Tailwind CSS is already applied in the template */
</style>