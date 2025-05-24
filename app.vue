<template>
  <div class="w-full">

    <VitePwaManifest />
    <NuxtLayout>

      <NuxtPage />
      {{ $pwa }}
      <div>
        <span>
          New content available, click on reload button to update.
        </span>

        <button @click="$pwa.updateServiceWorker()">
          Reload
        </button>
      </div>
    </NuxtLayout>

  </div>
</template>

<script setup>
const { $pwa } = useNuxtApp()


onMounted(() => {
  if ($pwa.offlineReady)
    ShowSnack('App ready to work offline', 'positive')
})
</script>

<style>
html {
  scroll-behavior: smooth !important;

}
body::-webkit-scrollbar{
  display: hidden !important;

}

.swiper-pagination-bullet-active {
  background: white !important;
}

/* 
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 120ms linear;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
} */
</style>
