import Vue3Lottie from 'vue3-lottie';

export default defineNuxtPlugin(async nuxtApp => {
  nuxtApp.vueApp.use(Vue3Lottie);
});
