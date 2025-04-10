// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      title: "Portfolio",
      script: [
        {
          src: "/scripts/set-theme.js",
          type: "text/javascript",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "This is a static website of the online portfolio of Douglas Leslie, containing links to open source contributions, personal projects, work history, tutorials and other tech related doings deemed relevant",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  plugins: ["@/plugins/api/axios.js", "@/plugins/api/apiFactory.js"],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL || "http://localhost:9000",
      baseURL: process.env.BASE_URL || "http://localhost:3000",
    },
  },
});
