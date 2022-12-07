import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_vars.scss";
        `,
      },
    },
  },
  server: {
    proxy: {
      "/token": {
        target: "https://accounts.spotify.com/api",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/v1": {
        target: "https://api.spotify.com",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
