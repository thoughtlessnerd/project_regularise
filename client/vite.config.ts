import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Regularise",
        short_name: "Regularise",
        theme_color: "#3A5CD6",
        background_color: "#060C15",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable"
          },
        ]
      },
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: [
        "**/*",
      ],
    })
  ],
})
