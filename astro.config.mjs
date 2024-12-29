import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://manavees.github.io",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  vite: {
    define: {
      "process.env.TINA_CLIENT_ID": JSON.stringify(process.env.TINA_CLIENT_ID),
      "process.env.TINA_TOKEN": JSON.stringify(process.env.TINA_TOKEN),
    },
  },
})
