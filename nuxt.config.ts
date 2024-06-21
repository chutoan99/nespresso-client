// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  devtools: { enabled: false },
  css: [
    "./assets/style/index.css",
  ],
  build: {
    transpile: ['swiper'],
  },
})
