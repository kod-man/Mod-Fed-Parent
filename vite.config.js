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
        kodman: "http://localhost:4173/assets/remoteEntryChild.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
