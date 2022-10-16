import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';
import compress from "astro-compress";
import "@fontsource/montserrat"
import "@fontsource/mulish"


// https://astro.build/config
export default defineConfig({
  site: 'https://weboreviews.com',
  trailingSlash: 'always',
  integrations: [tailwind(), sitemap(), robotsTxt(), compress()]
});