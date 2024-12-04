import {butterfliesBackground} from "https://unpkg.com/threejs-toys@0.0.7/build/threejs-toys.module.cdn.min.js"

var root = document.getElementById("app");
var body = document.body;
var options = {
    el: root,
    eventsEl: body,
    gpgpuSize: 20,
    // background: 0x00008B,
    // background: 0x0000FF,
    // background: 0xADD8E6,
    background: 0x0000CD,
    material: "basic",
    materialParams:{
        transparent: true,
        alphaTest: 0.5,
    },
    texture: "../images/butterflies.png",
    textureCount: 3,
    wingscale: [0.5,0.5,0.5,],
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
};

butterfliesBackground(options);