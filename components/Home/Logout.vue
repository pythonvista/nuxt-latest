<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 backdrop-blur-sm">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-lg font-semibold text-gray-800 mb-2">Are you sure you want to log out?</h2>
      <p class="text-gray-600 mb-6">Log out of Decodemymoji as eyabishop@gmail.com?</p>
      <div class="flex justify-end space-x-3">
        <button class="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
        <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Log out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoutContainer'
}
</script>

<style scoped>
/* Tailwind CSS is already applied in the template */
</style>