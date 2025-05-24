<template>
  <div class="grid h-screen place-content-center bg-white px-4">
    <h1 class="uppercase tracking-widest text-gray-500">
      {{ error.statusCode }} | {{ error.message ? error.message : "Not Found" }}
    </h1>

    <q-btn color="purple" @click="HandleClear">Go Home</q-btn>
  </div>
</template>

<script setup>
defineProps(["error"]);
const HandleClear = () => clearError({ redirect: "/" });
</script>

<style>
</style>
// throw createError({statusCode: '', statusMessage: ''})