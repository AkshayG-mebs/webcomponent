import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/webcomponent/",
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "assets/main.js",
        entryFileNames: "assets/main.js",
      },
    },
  },
});
