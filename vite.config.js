import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "parent",
      filename: "remoteEntry.js",
      exposes: {
        "./MyButton": "./src/components/Button",
      },
      remotes: {
        kodman: "http://localhost:4173/assets/remoteEntryChild1.js",
        child2: "http://localhost:3173/assets/remoteEntryChild2.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
