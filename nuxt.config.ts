import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    baseURL: "/portfolio/",
    head: {
      title: "Portfolio",
      meta: [
        {
          name: "description",
          content:
            "This is a static website of the online portfolio of Douglas Leslie, containing links to open source contributions, personal projects, work history, tutorials and other tech related doings",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
});
