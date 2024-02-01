// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "vuetify-nuxt-module"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "https://imgur.com/k3PlcAv.png",
          type: "image/svg+xml",
        },
      ],
    },
  },
});
