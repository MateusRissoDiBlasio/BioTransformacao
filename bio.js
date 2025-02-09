import {butterfliesBackground} from "https://unpkg.com/bio-background@0.0.2/build/threejs-toys.module.cdn.js"

var root = document.getElementById("app");
var body = document.body;
var options = {
    el: root,
    eventsEl: body,
    gpgpuSize: 15,
    background: 0x4b0082,
    // background:0xFFB6C1,
    material: "basic",
    materialParams:{
        transparent: true,
        alphaTest: 0.5,
    },
    texture: "./src/images/butterflies.png",
    textureCount: 4,
    wingscale: [0.5,0.5,0.5],
    wingsWidthSegments: 10,
    wingsHeightSegments: 10,
    wingsSpeed: 1,
    wingsDisplacementScale: 2,
    noiseCoordScale: 0.01,
    noiseTimeCoef: 0.005,
    noiseIntensity: 0.0025,
    attractionRadius1: 100,
    attractionRadius2: 100,
    maxVelocity: 0.15,
};


butterfliesBackground(options);

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
};