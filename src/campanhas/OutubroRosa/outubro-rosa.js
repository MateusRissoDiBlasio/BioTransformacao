import { CubeTextureLoader, RepeatWrapping, TextureLoader } from 'three'

(async function () {
  const loader = new TextureLoader()
  const cloader = new CubeTextureLoader()

  cloader.setPath('https://assets.codepen.io/33787/')
  const cubeTexture = cloader.load([
    'skyboxsun25deg_px.jpg', 'skyboxsun25deg_nx.jpg',
    'skyboxsun25deg_py.jpg', 'skyboxsun25deg_ny.jpg',
    'skyboxsun25deg_pz.jpg', 'skyboxsun25deg_nz.jpg'
  ])

  const map = await loader.loadAsync('https://assets.codepen.io/33787/Sand_004_COLOR.jpg')
  const bumpMap = await loader.loadAsync('https://assets.codepen.io/33787/Sand_004_Height.jpg')
  const normalMap = await loader.loadAsync('https://assets.codepen.io/33787/Sand_004_Normal.jpg')

  map.wrapS = map.wrapT = RepeatWrapping
  map.repeat.set(2, 2)
  bumpMap.wrapS = bumpMap.wrapT = RepeatWrapping
  bumpMap.repeat.set(2, 2)
  normalMap.wrapS = normalMap.wrapT = RepeatWrapping
  normalMap.repeat.set(2, 2)
})()

import background from '../../../src/backgrounds/butterflies'
const bg = background({
  el: document.getElementById('app'),
  eventsEl: document.body,
  gpgpuSize: 20,
  background: 0xFFB6C1,
  texture: '/whitebutterflies.png',
  textureCount: 4,
  material: 'basic',
  materialParams: {
    transparent: true,
    alphaTest: 0.5
  },
  wingsScale: [0.5, 0.5, 0.5],
  wingsWidthSegments: 10,
  wingsHeightSegments: 10,
  wingsSpeed: 1.5,
  wingsDisplacementScale: 2,
  noiseCoordScale: 0.01,
  noiseTimeCoef: 0.005,
  noiseIntensity: 0.0025,
  attractionRadius1: 100,
  attractionRadius2: 100,
  maxVelocity: 0.15,
})