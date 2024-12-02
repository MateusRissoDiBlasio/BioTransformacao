import vitePluginString from 'vite-plugin-string'
import glsl from 'vite-plugin-glsl';

export default {
  // base: process.env.NODE_ENV === 'production' ? '/BioTransformacao/' : '/',
  base: "/",
  plugins: [
    vitePluginString(),
    glsl()
  ]
};
