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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-1.104 0-2 .896-2 2v3h4v-3c0-1.104-.896-2-2-2z"></path>
          </svg>
          <span>Profile</span>
        </div>
        <div class="flex items-center mb-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          <span>Settings</span>
        </div>
        <div class="flex items-center mb-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"></path>
          </svg>
          <span>Help & FAQs</span>
        </div>
        <div class="flex items-center mb-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"></path>
          </svg>
          <span>Terms of Service</span>
        </div>
        <div class="flex items-center mb-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-1.104 0-2 .896-2 2v3h4v-3c0-1.104-.896-2-2-2z"></path>
          </svg>
          <span>Privacy Policy</span>
        </div>
        <div class="flex items-center mb-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>About</span>
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
          <h2 class="text-2xl font-bold mb-6">Help & FAQs</h2>
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-lg font-semibold mb-4">How to Use Emoji Translate</h3>
            <ol class="list-decimal list-inside text-gray-600 space-y-2 mb-6">
              <li>Ensure the "Text to Emoji" toggle is active at the top of the page</li>
              <li>Type your message in the input field at the bottom of the chat</li>
              <li>View your translated message or press Enter to send the chat</li>
              <li>View the translated emoji message in the chat</li>
              <li>Switch to "Text to Emoji" mode using the toggle at the top</li>
              <li>Enter or paste emojis into the input field</li>
              <li>Click the send button or press Enter</li>
              <li>View the translated message for your emojis in the chat</li>
            </ol>
            <h3 class="text-lg font-semibold mb-4">Frequently asked questions</h3>
            <div class="space-y-4">
              <div class="border-b pb-4">
                <button @click="toggleFaq(1)" class="flex justify-between w-full text-left text-gray-700 font-medium">
                  <span>How do I translate text into emoji?</span>
                  <svg :class="{ 'rotate-180': faqOpen === 1 }" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen === 1" class="mt-2 text-gray-600">
                  To translate text into emoji, activate the "Text to Emoji" mode, type your message, and press Enter or click send. The app will convert your text into emojis automatically.
                </div>
              </div>
              <div class="border-b pb-4">
                <button @click="toggleFaq(2)" class="flex justify-between w-full text-left text-gray-700 font-medium">
                  <span>How do I translate emoji to text?</span>
                  <svg :class="{ 'rotate-180': faqOpen === 2 }" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen === 2" class="mt-2 text-gray-600">
                  Switch to "Emoji to Text" mode, input your emojis, and press Enter or click send. The app will translate the emojis into text for you.
                </div>
              </div>
              <div class="border-b pb-4">
                <button @click="toggleFaq(3)" class="flex justify-between w-full text-left text-gray-700 font-medium">
                  <span>Can I save my translations?</span>
                  <svg :class="{ 'rotate-180': faqOpen === 3 }" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen === 3" class="mt-2 text-gray-600">
                  Yes, your translations are saved in your chat history. You can view them under the "Chat history" section.
                </div>
              </div>
              <div class="border-b pb-4">
                <button @click="toggleFaq(4)" class="flex justify-between w-full text-left text-gray-700 font-medium">
                  <span>How accurate are the translations?</span>
                  <svg :class="{ 'rotate-180': faqOpen === 4 }" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-join="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen === 4" class="mt-2 text-gray-600">
                  The translations are highly accurate for common phrases and emojis, but complex sentences may require manual adjustment.
                </div>
              </div>
              <div class="border-b pb-4">
                <button @click="toggleFaq(5)" class="flex justify-between w-full text-left text-gray-700 font-medium">
                  <span>Does the platform support all emojis?</span>
                  <svg :class="{ 'rotate-180': faqOpen === 5 }" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-join="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div v-if="faqOpen === 5" class="mt-2 text-gray-600">
                  Yes, the platform supports a wide range of standard emojis, though some less common or custom emojis may not be fully supported.
                </div>
              </div>
            </div>
            <div class="mt-6 text-gray-600">
              <p>Still Need Help?</p>
              <p>If you couldn’t find the answer to your question, feel free to contact us or submit feedback.</p>
              <div class="flex space-x-4 mt-2">
                <button @click="submitFeedback" class="text-indigo-500 hover:text-indigo-700">Submit feedback</button>
                <button @click="emailSupport" class="text-indigo-500 hover:text-indigo-700">Email support</button>
              </div>
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
      faqOpen: null
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqOpen = this.faqOpen === index ? null : index;
    },
    submitFeedback() {
      alert('Feedback submitted!');
    },
    emailSupport() {
      alert('Email support opened!');
    }
  }
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>