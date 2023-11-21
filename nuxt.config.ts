// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon'],
  pinia: {
    autoImports: ['defineStore'],
  },
  imports: {
		dirs: ['services'],
	},

  proxy: {
    '/storage': {
      target: 'http://localhost:8989/storage',
      changeOrigin: true,
    },
  },

  nuxtIcon: {
    size: '54px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  },

  experimental: {
    viewTransition: true,
  },
})
