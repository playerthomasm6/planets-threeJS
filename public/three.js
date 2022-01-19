import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const barrier = 10;  //Sets value of boundry
let cameraZoom = 200;

let starsPlain;
let sphereJupiter;
let renderer;

const planetWindow = document.getElementById("planet-viewer-window")

// GEOMETRY BUILDING FUNCTIONS

const initStarsBackGround = () => {
    const geometryplain = new THREE.PlaneGeometry(1000, 500);
    const textureplain = new THREE.TextureLoader().load('./assets/images/8k_stars.jpg')
    const materialplain = new THREE.MeshBasicMaterial({ map: textureplain, side: THREE.DoubleSide });
    starsPlain = new THREE.Mesh(geometryplain, materialplain);
    starsPlain.position.z = -100
    scene.add(starsPlain);
}

const initPlanetJupiter = () => {
    const geometry = new THREE.SphereGeometry(50, 100, 100);
    const texture = new THREE.TextureLoader().load('./assets/images/8k_jupiter.jpg')
    const material = new THREE.MeshBasicMaterial({ map: texture });
    sphereJupiter = new THREE.Mesh(geometry, material);

    scene.add(sphereJupiter);
}


const init = () => {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    planetWindow.appendChild(renderer.domElement);

    initPlanetJupiter();
    initStarsBackGround();

    const geometryRing = new THREE.RingGeometry(70, 60, 32);
    const textureRing = new THREE.TextureLoader().load('./assets/images/8k_saturn_ring_alpha.png')
    const materialRing = new THREE.MeshBasicMaterial({ map: textureRing });
    const ring = new THREE.Mesh(geometryRing, materialRing);
    ring.position.z = -100
    scene.add(ring);
}


const moveAround = () => {
    // console.log("sphereZ:" + sphere.position.z)
    // console.log("sphereX:" + sphere.position.x)
    // console.log("sphereY:" + sphere.position.y)

    if (sphereJupiter.position.x >= barrier) {
        speedX = speedX * -1
    }

    if (sphereJupiter.position.x <= -barrier) {
        speedX = speedX * -1
    }

    if (sphereJupiter.position.y >= barrier) {
        speedY = speedY * -1
    }

    if (sphereJupiter.position.y <= -barrier) {
        speedY = speedY * -1
    }

    if (sphereJupiter.position.z >= barrier) {
        speedZ = speedZ * -1
    }

    if (sphereJupiter.position.z <= -barrier) {
        speedZ = speedZ * -1
    }
}

const addButtons = () => {
    let zoomInButton = document.createElement("button");
    zoomInButton.className = "button-controls";
    zoomInButton.innerText = "Zoom In"
    planetWindow.appendChild(zoomInButton)
}

const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    camera.position.z = cameraZoom;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphereJupiter.rotation.y += 0.001;
    moveAround();
}

init();
window.onload = animate();


window.addEventListener('resize', onWindowResize, false)





// Button Controls

document.getElementById("left-button").addEventListener("click", function () {
    sphereJupiter.rotation.x += 0.05;
})

document.getElementById("right-button").addEventListener("click", function () {
    sphereJupiter.rotation.x -= 0.05;
})

document.getElementById("in-button").addEventListener("click", function () {
    if (cameraZoom <= 55) return
    cameraZoom -= 5;
    inputRangeZoom.value = cameraZoom;
    starsPlain.position.z -= 5;
    console.log(inputRangeZoom.value)
    console.log(cameraZoom)
})

document.getElementById("out-button").addEventListener("click", function () {
    if (cameraZoom >= 200) return
    cameraZoom += 5;
    inputRangeZoom.value = cameraZoom;
    starsPlain.position.z += 5;
    console.log(inputRangeZoom.value)
    console.log(cameraZoom)
})


let inputRangeZoom = document.getElementById("input-range-zoom");
let zoomValue;

inputRangeZoom.addEventListener("input", function() { //Listener for scale slider
    zoomValue = inputRangeZoom.value
    console.log(zoomValue)
    cameraZoom = zoomValue;
})

let hideButton = document.getElementById("hide-button")


let hidden = false;

let cameraControlButtonGroup = document.querySelector("buttonGroup")
console.log(cameraControlButtonGroup)

hideButton.addEventListener("click", function() { // Hides main controls
    if (!hidden) {
        document.getElementById("left-button").style.display = "none";
        document.getElementById("right-button").style.display = "none";
        document.getElementById("in-button").style.display = "none";
        document.getElementById("out-button").style.display = "none";
        document.getElementById("input-range-zoom").style.display = "none";
        document.getElementById("title-card").style.display = "none";
        hidden = true
    }
    else if (hidden) {
        document.getElementById("left-button").style.display = "";
        document.getElementById("right-button").style.display = "";
        document.getElementById("in-button").style.display = "";
        document.getElementById("out-button").style.display = "";
        document.getElementById("input-range-zoom").style.display = "";
        document.getElementById("title-card").style.display = "";
        hidden = false
    } else {
        console.log("For some fucking reason it is not grabbing the element from the page")
    }
    

})