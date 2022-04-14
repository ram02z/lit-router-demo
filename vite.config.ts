import { defineConfig } from 'vite'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      lib: {
        entry: "src/index.js",
        formats: ["es"],
      },
      rollupOptions: {
        external: mode === "production" ? "" : /^lit-element/,
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
  };
});
