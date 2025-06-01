<!-- App.vue -->
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-xl font-bold">DecodeMyEmoji</h1>
        <button class="text-purple-600 border border-purple-600 rounded px-4 py-1 hover:bg-purple-600 hover:text-white">
          Login
        </button>
      </div>

      <!-- Welcome Message -->
      <h2 class="text-2xl font-semibold text-center mb-2">Welcome to DecodeMyEmoji!</h2>
      <p class="text-gray-500 text-center mb-6">
        Express yourself through emojis, track your mood, and gain emotional insights with your personalized avatar.
      </p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Email -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Enter email"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Name -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="name">What should we call you?</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Enter your name"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Date of Birth -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" >Date of Birth</label>
          <input
            type="text"
            id="birthDate"
            v-model="form.birthDate"
            placeholder="DD/MM/YY"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Gender -->
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="gender">Gender</label>
          <select
            id="gender"
            v-model="form.gender"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option disabled value="">Select gender below</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label class="block text-gray-700 mb-1" for="password">Password</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="form.password"
              placeholder="enter password"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              @click="togglePassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Next Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors"
        >
          Next
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        birthDate: '',
        gender: '',
        password: ''
      },
      showPassword: false
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form)
    }
  }
}
</script>

<style>
/* Tailwind CSS is already included via CDN or installed in the project */
</style>