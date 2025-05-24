// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: false,
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
   app: {
    head: {
      title: 'Tchub Administration',
      meta: [
        {
          name: 'description',
          content: 'Admin App',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,1,300&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
          integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=',
          crossorigin: '',
        },
      ],
      script: [
        {
          type: 'text/javascript',
          crossorigin: '',
          async: true,
          src: 'https://cdn.lordicon.com/bhenfmcm.js',
        },
        {
          src: 'https://cdn.auth0.com/js/auth0/9.11/auth0.min.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
        {
          src: 'https://unpkg.com/@simplewebauthn/browser/dist/bundle/index.es5.umd.min.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.min.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
        {
          type: 'text/javascript',
          crossorigin: '',
          async: true,
          src: 'https://cdn.lordicon.com/bhenfmcm.js',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
        {
          src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
          type: 'text/javascript',
          integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=',
          crossorigin: '',
          async: true,
        },
        {
          src: 'https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
      ],
    },
  },
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-quasar-ui', '@vite-pwa/nuxt'],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  quasar: {
    plugins: ['Notify', 'Dialog'],
  },
  plugins: [
  
    { src: '~/plugins/useVuetify.js', mode: 'client' },
    { src: '~/plugins/scrollToTop.js', mode: 'client' },
    { src: '~/plugins/useSystem.js', mode: 'client' },
    { src: '~/plugins/useLottie.js', mode: 'client' },
    
  ],

  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  experimental: {
    payloadExtraction: false,
  },
  
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  pwa: {
    manifest: {
      name: 'tchub_app',
      short_name: 'tchub_app',
      description: 'tchub_app',
      icons: [
        {
          src: 'icons/64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'icons/144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],

      lang: 'en',
      // useWebmanifestExtension: false,
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      id: 'app.tchubadmin.com',
      background_color: '#ffffff',
      theme_color: '#FFA500',
      // strategies: 'injectManifest',
      // srcDir: 'service-worker',
      // filename: 'sw.js',
    },
     workbox: {
       navigateFallback: '/',
         swDest: 'sw.js',
      // Use injectManifest strategy
    globDirectory: '.output/public',
    globPatterns: [
      '**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,json,gif,woff,woff2,ttf,eot}',
      'assets/**/*',
      'images/**/*',
      '_nuxt/**/*'
    ],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/cdn\.lordicon\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'lordicon-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cloudflare-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images-cache',
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
          }
        }
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-resources',
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
          }
        }
      }
    ]
  },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})