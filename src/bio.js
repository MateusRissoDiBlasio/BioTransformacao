import background from 'BioTransformacao/src/backgrounds/butterflies/index.js'
const bg = background({
  el: document.getElementById('app'),
  eventsEl: document.body,
  gpgpuSize: 15,
  background: 0x4b0082,
  texture: '../../../public/butterflies.png',
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

var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
    e.target.classList.remove("animate");
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
}