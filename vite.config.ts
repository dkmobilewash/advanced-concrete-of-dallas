import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Splits stable, rarely-changing vendor code into its own
        // long-term-cacheable chunks, separate from app code (which changes
        // on every deploy) and from Supabase (already its own chunk via the
        // dynamic import in Contact.tsx's submit handler).
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
            return 'vendor-motion'
          }
          if (id.includes('react-router') || id.includes('@remix-run') || /node_modules\/(react|react-dom|scheduler)\//.test(id)) {
            return 'vendor-react'
          }
          return undefined
        },
      },
    },
  },
})
