import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globDirectory: "dist",
        globPatterns: ["**/*.{js,css,html,png,webp}", "*/*.{html,png}"],
        globIgnores: ["**/node_modules/**/**", "sw.js", "workbox-*.js"],
      },
      manifest: {
        name: "Know Me | Website Portofolio",
        short_name: "Know Me",
        description: "Website Portofolio",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#FAFAFA",
        icons: [
          {
            src: "/ic_48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/ic_72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/ic_92.png",
            sizes: "92x92",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/ic_144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/ic_192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/ic_512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/ic_1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  base: "/",
});
