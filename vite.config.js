import vitePluginString from 'vite-plugin-string';
import { rollup } from 'rollup';
import glsl from 'rollup-plugin-glsl';
export default {
  // base: process.env.NODE_ENV === 'production' ? '/BioTransformacao/' : '/',
  base: "/",
  plugins: [
    vitePluginString(), 
    rollup({entry: 'main.js',
      plugins:[ 
          glsl({
            include:'lib/**/*.glsl,',
            exclude:['**/index.html'],
            sourceMap: false
          })
      ]
})
    
  ]
}
