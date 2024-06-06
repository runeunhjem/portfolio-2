import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild", // Ensures JavaScript is minified
    rollupOptions: {
      treeshake: true, // Ensures unused code is removed
    },
  },
});
