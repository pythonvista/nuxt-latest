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
        <button class="ml-4 text-gray-600 hover:text-gray-800 text-xl">&times;</button>
      </div>

      <!-- Navigation Links -->
      <div class="flex mb-8">
        <div class="w-1/4">
          <ul class="space-y-3 text-gray-600">
            <li><a href="#" class="hover:text-gray-800">Account</a></li>
            <li><a href="#" class="hover:text-gray-800">Settings</a></li>
            <li><a href="#" class="hover:text-gray-800">Help & FAQs</a></li>
            <li><a href="#" class="hover:text-gray-800">Terms of Service</a></li>
            <li><a href="#" class="hover:text-gray-800">Privacy Policy</a></li>
            <li><a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">About</a></li>
            <li><a href="#" class="hover:text-gray-800">Log out</a></li>
          </ul>
        </div>

        <!-- Content -->
        <div class="w-3/4">
          <h1 class="text-2xl font-bold mb-4">About Decodemymoji</h1>
          <h2 class="text-lg font-semibold mb-2">Our Mission</h2>
          <p class="text-gray-600 mb-6">
            EmojiTranslate bridges the gap between conventional text and the expressive world of emojis. We strive to make digital communication more vibrant, engaging, and accessible through seamless translation between the two modes of expression.
          </p>

          <!-- Cards -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex items-center mb-2">
                <svg class="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-4a2 2 0 012-2h10a2 2 0 012 2v4h-4m-6 0h6"></path>
                </svg>
                <h3 class="text-lg font-semibold">Simplified Communication</h3>
              </div>
              <p class="text-gray-600">Express complex ideas with simple emoji that everyone can understand.</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex items-center mb-2">
                <svg class="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.55a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z"></path>
                </svg>
                <h3 class="text-lg font-semibold">Learning Tool</h3>
              </div>
              <p class="text-gray-600">Understand what emoji combinations actually mean in plain text.</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex items-center mb-2">
                <svg class="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <h3 class="text-lg font-semibold">Creative Content</h3>
              </div>
              <p class="text-gray-600">Add personality to your social media posts with emoji translations.</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex items-center mb-2">
                <svg class="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <h3 class="text-lg font-semibold">Accessibility</h3>
              </div>
              <p class="text-gray-600">Help translate visual emoji content into readable text for screen readers.</p>
            </div>
          </div>

          <!-- How It Works -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-2">How It Works</h2>
            <p class="text-gray-600 mb-2">
              EmojiTranslate uses pattern recognition and contextual analysis to convert between text and emojis. Our translation engine understands:
            </p>
            <ul class="list-disc list-inside text-gray-600 mb-2">
              <li>Common phrases and their emoji equivalents</li>
              <li>Emoji sequences and their textual meaning</li>
              <li>Context-sensitive translations that match the intended tone</li>
              <li>Cultural nuances in emoji usage</li>
            </ul>
            <p class="text-gray-600">
              Simply type your text or emojis, choose your translation direction, and let our system do the rest!
            </p>
          </div>

          <!-- Our Background -->
          <div>
            <h2 class="text-xl font-semibold mb-2">Our Background</h2>
            <p class="text-gray-600 mb-2">
              EmojiTranslate was born from a simple observation: emojis have become a universal language, transcending linguistic barriers and adding emotional context to digital conversations. Yet, there’s often a gap in understanding what specific emoji combinations mean or how to express certain ideas through emojis.
            </p>
            <p class="text-gray-600">
              Our team of communication experts and developers came together to build this platform, making emoji communication more accessible, fun, and expressive for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Decodemymoji'
}
</script>

<style scoped>
/* Tailwind CSS is already applied in the template */
</style>