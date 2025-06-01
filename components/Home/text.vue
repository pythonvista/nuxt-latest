```vue
<template>
  <div>
    <!-- Hamburger Button -->
    <button
      @click="toggleSidebar"
      class="fixed top-5 left-5 z-50 focus:outline-none"
    >
      <div
        class="w-8 h-1 bg-gray-800 mb-1.5 transition-all duration-300"
        :class="{ 'rotate-45 translate-y-2.5': isSidebarOpen }"
      ></div>
      <div
        class="w-8 h-1 bg-gray-800 mb-1.5 transition-all duration-300"
        :class="{ 'opacity-0': isSidebarOpen }"
      ></div>
      <div
        class="w-8 h-1 bg-gray-800 transition-all duration-300"
        :class="{ '-rotate-45 -translate-y-2.5': isSidebarOpen }"
      ></div>
    </button>

    <!-- Sidebar -->
    <div
      class="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out"
      :class="{ '-translate-x-full': !isSidebarOpen }"
    >
      <nav class="mt-16 p-4">
        <ul class="space-y-4">
          <li><a href="#" class="text-lg hover:text-gray-300">Home</a></li>
          <li><a href="#" class="text-lg hover:text-gray-300">About</a></li>
          <li><a href="#" class="text-lg hover:text-gray-300">Services</a></li>
          <li><a href="#" class="text-lg hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div
      class="p-6 ml-0 transition-all duration-300"
      :class="{ 'ml-64': isSidebarOpen }"
    >
      <section class="sidebar">
        <div class="p-4 w-64 bg-white border-r flex flex-col">
            <button
                class="w-full hover:text-white after:text-black hover:bg-blue-500  px-2 py-2 rounded  flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                New chat
            </button>
            <div class="flex items-center mb-4">
                <button
                    class="w-full hover:text-white after:text-black hover:bg-blue-500  px-2 py-2 rounded  flex items-center">
                    <svg class="w-5 h-5 mr-2  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                    </svg>
                    <span>Chat history</span>
                </button>

                <button
                    class="w-full hover:text-white after:text-black hover:bg-blue-500  px-2 py-2 rounded  flex items-center">
                    <i class="fa-solid pr-2 fa-face-smile"></i>
                    <span>Explore Emoji</span>
                </button>
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
    </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
/* Tailwind CSS is included via CDN or project setup; no additional styles needed here */
</style>
```