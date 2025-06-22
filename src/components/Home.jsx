import React from "react";
import { motion } from "framer-motion";

const cardAnim = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Home = () => {
  return (
    <div className="px-4 sm:px-6 py-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2">
          Vite + React PWA Setup
        </h1>
        <p className="text-lg text-gray-600">
          Create an installable progressive web app using Vite and React
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Installation Card */}
        <motion.div {...cardAnim} className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">🛠 Installation</h2>
          <pre className="bg-gray-200 p-4 rounded-md text-sm overflow-auto">
            <code>
{`npm create vite@latest my-pwa-app -- --template react
cd my-pwa-app
npm install
npm install vite-plugin-pwa --save-dev
npm run dev`}
            </code>
          </pre>
        </motion.div>

        {/* Icon Generation */}
        <motion.div {...cardAnim} className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">🖼 Generate Icons</h2>
          <p className="text-gray-600 mb-2">
            Use this tool to generate favicon and icons:
          </p>
          <a
            href="https://favicon.io/favicon-converter/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            → https://favicon.io/favicon-converter/
          </a>
        </motion.div>

        {/* Asset Placement */}
        <motion.div {...cardAnim} className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">📁 Asset Placement</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Place icons in <code className="bg-gray-200 px-2 py-0.5 rounded">/public</code></li>
            <li>Filenames must match your manifest</li>
            <li>No need to import manually</li>
          </ul>
        </motion.div>

        {/* Manifest Config */}
        <motion.div {...cardAnim} className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">⚙️ vite.config.js</h2>
          <pre className="bg-gray-200 p-4 rounded-md text-xs overflow-auto max-h-96">
            <code>
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'prompt',
  manifest: {
    name: 'My PWA App',
    short_name: 'PWA App',
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
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'favicon' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'apple-touch-icon' },
      { src: '/maskable_icon.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  }
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugin)
  ]
})`}
            </code>
          </pre>
        </motion.div>
      </div>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © 2025 Zelio Docs — Powered by Vite + Tailwind
      </footer>
    </div>
  );
};

export default Home;
