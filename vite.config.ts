import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import monicon from "@monicon/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    monicon({
      icons: [
        "mdi:home",
        "feather:activity",
        "logos:active-campaign",
        "lucide:badge-check",
      ],
      // Load all icons from the listed collections
      collections: ["radix-icons"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
