// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/supabase'
  ],
  vueitfy:{
  moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: false,
      useIconCDN: false,

      /* vite-plugin-vuetify options */
      styles: 'sass',
      autoImport: true,
      useVuetifyLabs: false, 
    }
  }
})
