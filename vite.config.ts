import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Multi-page build: sin router, las páginas legales son HTML estático
    // aparte de la SPA de index.html — hay que declararlas para que
    // `vite build` las emita a dist/ (si no, solo compila index.html).
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacidad: resolve(import.meta.dirname, 'privacidad.html'),
        cookies: resolve(import.meta.dirname, 'cookies.html'),
        terminos: resolve(import.meta.dirname, 'terminos.html'),
        avisoLegal: resolve(import.meta.dirname, 'aviso-legal.html'),
      },
    },
  },
})
