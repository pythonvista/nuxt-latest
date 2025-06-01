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
          <h2 class="text-2xl font-bold mb-6">Feedback</h2>
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="bg-white p-4 rounded-lg shadow text-center">
              <div class="text-3xl mb-2">💡</div>
              <h3 class="font-medium">Feature Ideas</h3>
              <p class="text-gray-600 text-sm">Share your ideas for new features or improvements</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow text-center">
              <div class="text-3xl mb-2">🐞</div>
              <h3 class="font-medium">Report Issues</h3>
              <p class="text-gray-600 text-sm">Let us know if you encounter any bugs or problems</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow text-center">
              <div class="text-3xl mb-2">🎯</div>
              <h3 class="font-medium">Translation Fixes</h3>
              <p class="text-gray-600 text-sm">Help us improve our emoji translation accuracy</p>
            </div>
          </div>
          <h3 class="text-lg font-semibold mb-4">Submit Feedback</h3>
          <p class="text-gray-600 mb-4">Your feedback helps us improve the platform for everyone.</p>
          <form @submit.prevent="submitFeedback" class="space-y-4">
            <div class="flex space-x-4">
              <label class="flex items-center">
                <input type="radio" v-model="feedbackType" value="general" class="mr-2">
                General feedback
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="feedbackType" value="bug" class="mr-2">
                Report a bug
              </label>
            </div>
            <div class="flex space-x-4">
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                <input v-model="fullName" placeholder="Enter your name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              </div>
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input v-model="email" type="email" placeholder="Enter email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Subject</label>
              <input v-model="subject" placeholder="Description of your feedback" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Your Feedback</label>
              <textarea v-model="feedback" placeholder="Please provide as much details as possible" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-32"></textarea>
            </div>
            <div class="flex justify-end">
              <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedbackType: 'general',
      fullName: '',
      email: '',
      subject: '',
      feedback: ''
    };
  },
  methods: {
    submitFeedback() {
      console.log({
        feedbackType: this.feedbackType,
        fullName: this.fullName,
        email: this.email,
        subject: this.subject,
        feedback: this.feedback
      });
      // Add your feedback submission logic here
      alert('Feedback submitted!');
    }
  }
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>