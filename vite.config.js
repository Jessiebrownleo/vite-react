import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Targets modern browsers
    outDir: 'dist', // Output directory (default: 'dist')
    assetsDir: '', // Place assets (e.g., images, CSS) directly in the root
    minify: 'esbuild', // Minification method
    rollupOptions: {
      output: {
        entryFileNames: 'index.js', // Main entry file
        chunkFileNames: 'chunks/[name].js', // For code splitting chunks
        assetFileNames: '[name].[ext]', // Output asset files in the root
      },
    },
    cssCodeSplit: false, // This makes the CSS bundle into one file
  },
})
