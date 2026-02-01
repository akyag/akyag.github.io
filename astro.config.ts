import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import "@unocss/reset/tailwind-compat.css";

// Plugins
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://weboreviews.com/",
  integrations: [UnoCSS({
    injectReset: "@unocss/reset/tailwind-compat.css" // or a path to the reset file
  }), sitemap(), robotsTxt(), sentry(), spotlightjs(), playformCompress()],
  prefetch: true
});
