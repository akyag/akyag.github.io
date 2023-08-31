import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import "@unocss/reset/tailwind-compat.css";

// Plugins
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import prefetch from "@astrojs/prefetch";
import Compress from "astro-compress";

export default defineConfig({
  site: "https://weboreviews.com/",
  integrations: [
    UnoCSS({
      injectReset: "@unocss/reset/tailwind-compat.css", // or a path to the reset file
    }),
    sitemap(),
    robotsTxt(),
    prefetch(),
    Compress(),
  ],
});
