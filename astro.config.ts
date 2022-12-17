import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// Plugins
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

// Fonts
import "@fontsource/montserrat";
import "@fontsource/mulish";

// Styles
import "@unocss/reset/tailwind.css";
import "./src/styles/global.css";

export default defineConfig({
  site: "https://weboreviews.com",
  trailingSlash: "always",
  integrations: [
    UnoCSS(),
    sitemap(),
    robotsTxt(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    compress(),
    prefetch(),
  ],
  experimental: {
    prerender: true,
    errorOverlay: true,
  },
});
