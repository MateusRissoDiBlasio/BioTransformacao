import vitePluginString from 'vite-plugin-string'
import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/BioTransformacao/' : '/',
  base: "/",
  plugins: [
    vitePluginString(), glsl() 
  ],  
});
