// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-easy-lightbox' // Добавляем нашу галерею
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
        prefix: 'og: https://ogp.me/ns#'
      },
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Мастерская' },
        // Ссылка на наше подготовленное изображение по умолчанию
        { property: 'og:image', content: '/images/og-image.jpg' }, 
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [],
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
