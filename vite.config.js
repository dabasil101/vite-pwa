import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

const manifestForPlugin = {
  registerType: 'prompt',
  // injectRegister: 'auto',
  manifest: {
    name: 'Vite-PWA',
    short_name: 'V-PWA',
    description: 'A Vite + React Progressive Web App',
    includeAssets: [
      'favicon.ico',
      'robots.txt',
      'apple-touch-icon.png',
      'maskable_icon.png',
      'android-chrome-192x192.png',
      'android-chrome-512x512.png'
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
    scope: '/',
    orientation: 'portrait',
     icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple-touch-icon'
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
  }

 
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugin),
    tailwindcss()
  ]
})
