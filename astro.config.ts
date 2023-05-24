import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// Plugins
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

// Fonts
// import "@fontsource/montserrat";
// import "@fontsource/mulish";
// import "@fontsource/atkinson-hyperlegible";

// Styles
import "@unocss/reset/tailwind-compat.css";
import "./src/styles/global.css";

export default defineConfig({
  site: "https://weboreviews.com/",
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    sitemap(),
    robotsTxt(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    prefetch(),
    compress(),
  ],
 compressHTML: true,
});
