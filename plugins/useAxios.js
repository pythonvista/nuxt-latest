import axios from 'axios';

export default defineNuxtPlugin(async nuxtApp => {
  // const url = `http://localhost:3001/api`
  // const url = `http://192.168.1.49:3002/api`
  const url =  `https://api-tchub.vercel.app/api`;
  const UseAxios = axios.create({
    baseURL: url
    // responseType: 'json',
  });

  nuxtApp.vueApp.provide('UseAxios', UseAxios);
  nuxtApp.provide('UseAxios', UseAxios);
});
