<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">Decode my Emoji</h2>
        <button class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-800">Sign up</button>
      </div>
      <div class="text-center mb-6">
        <h3 class="text-xl font-semibold">Welcome back to DecodeEmoji</h3>
        <p class="text-gray-600">Express yourself through emojis, track your mood, and gain emotional insights with your personalized avatar.</p>
      </div>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" id="email" type="email" placeholder="Enter email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" id="password" type="password" placeholder="enter password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <div class="flex items-center justify-between">
          <a href="#" class="text-sm text-purple-600 hover:text-purple-800">Forget password</a>
        </div>
        <button type="submit" class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Add login logic here
      console.log('Email:', this.email, 'Password:', this.password);
    }
  }
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>