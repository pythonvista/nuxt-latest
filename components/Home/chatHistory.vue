<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-white border-r flex flex-col">
      <div class="p-4 border-b">
        <h1 class="text-xl font-bold">Decodemyemoji</h1>
      </div>
      <div class="p-4">
        <button class="w-full bg-blue-500 text-white px-4 py-2 rounded mb-4 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          New chat
        </button>
        <div class="flex items-center mb-4">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>Chat history</span>
        </div>
        <div class="flex items-center mb-4">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-1.104 0-2 .896-2 2v3h4v-3c0-1.104-.896-2-2-2z"></path>
          </svg>
          <span>Explore Emoji</span>
        </div>
        <div class="mt-4">
          <h3 class="text-sm font-semibold mb-2">Today</h3>
          <ul class="space-y-2 text-sm">
            <li>Happy birthday to you</li>
            <li>Vacation vibes with sunsh...</li>
            <li>I'm feeling sick and tired</li>
            <li>Good morning, have a gre...</li>
            <li>Let's go to the beach</li>
            <li>Good morning, have a gre...</li>
          </ul>
          <h3 class="text-sm font-semibold mt-4 mb-2">Yesterday</h3>
          <ul class="space-y-2 text-sm">
            <li>I love</li>
            <li>Time to lunch</li>
            <li>Working late tonight</li>
            <li>I'm stuck in traffic</li>
            <li>It's raining again</li>
            <li>Feeling sleepy</li>
            <li>Let's eat fast food or have...</li>
            <li>Congrats on graduating!</li>
            <li>Engaged or getting married</li>
          </ul>
        </div>
      </div>
      <div class="mt-auto p-4 border-t">
        <div class="flex items-center mb-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          <span>Settings</span>
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          <span>Log out</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <div class="p-4 border-b bg-white flex justify-between items-center">
        <div></div>
        <div class="flex items-center space-x-4">
          <span>Feedback?</span>
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div class="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <div class="max-w-2xl mx-auto">
          <div class="flex justify-between items-center mb-4">
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">Recent</button>
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">Saved</button>
            <select class="border border-gray-300 rounded px-2 py-1">
              <option>All translations</option>
            </select>
            <button class="bg-indigo-500 text-white px-4 py-2 rounded">Clear history</button>
          </div>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm text-gray-500">May 14, 2025 - 18:12</p>
                  <p class="text-sm font-medium">Text to Emoji</p>
                </div>
                <button class="text-indigo-500 text-sm">📌</button>
              </div>
              <p class="mt-2">Today was amazing! We went hiking early in the morning, saw the sunrise over the mountains, took tons of photos, and ended the day with a cozy bonfire and hot chocolate. Honestly, it felt like the perfect escape from everything</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm text-gray-500">May 14, 2025 - 18:12</p>
                  <p class="text-sm font-medium">Text to Emoji</p>
                </div>
                <button class="text-indigo-500 text-sm">📌</button>
              </div>
              <p class="mt-2">Today was amazing! We went hiking early in the morning, saw the sunrise over the mountains, took tons of photos, and ended the day with a cozy bonfire and hot chocolate. Honestly, it felt like the perfect escape from everything</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm text-gray-500">May 14, 2025 - 18:12</p>
                  <p class="text-sm font-medium">Text to Emoji</p>
                </div>
                <button class="text-indigo-500 text-sm">📌</button>
              </div>
              <p class="mt-2">Today was amazing! We went hiking early in the morning, saw the sunrise over the mountains, took tons of photos, and ended the day with a cozy bonfire and hot chocolate. Honestly, it felt like the perfect escape from everything</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          date: "May 14, 2025 - 18:12",
          type: "Text to Emoji",
          content: "Today was amazing! We went hiking early in the morning, saw the sunrise over the mountains, took tons of photos, and ended the day with a cozy bonfire and hot chocolate. Honestly, it felt like the perfect escape from everything"
        },
        // Add more messages as needed
      ]
    };
  }
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>