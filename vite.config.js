import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import vitePluginString from 'vite-plugin-string'

// export default {
//   plugins: [
//     vitePluginString()
//   ]
// }

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/BioTransformacao/' : '/',
  plugins: [react()],
})