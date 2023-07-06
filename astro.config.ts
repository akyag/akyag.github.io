import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// Plugins
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  site: "https://weboreviews.com/",
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    sitemap(),
    robotsTxt(),
    prefetch(),
    compress(),
  ],
  compressHTML: true,
  experimental: {
    assets: true,
  },
});
