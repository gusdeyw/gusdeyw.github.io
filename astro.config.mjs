// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://gusdeyw.github.io',
  base: '', // Empty string for <username>.github.io repositories
});
