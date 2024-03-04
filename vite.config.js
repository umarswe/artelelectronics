import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* eslint-disable */
const root = resolve(__dirname, "./src");
/* eslint-enable */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      images: resolve(root, "assets/images"),
      sections: resolve(root, "sections"),
    },
  },
});
