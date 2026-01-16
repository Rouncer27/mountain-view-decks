// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      devSourcemap: true, // ✅ Enables CSS/SCSS source maps for better debugging
    },
  },

  integrations: [react(), sitemap()],
  image: {
    domains: ["mountainview.swbdatabases2.ca/"],
    remotePatterns: [{ protocol: "https" }],
  },
});
