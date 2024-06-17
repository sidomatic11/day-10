import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import { log } from "three/examples/jsm/nodes/Nodes.js";

const colorCombinations = [
	// { front: 0xff77ff, back: 0x77ff77 }, // Light Magenta and Light Green
	{ front: 0x8a2be2, back: 0x7fff00 }, // Chartreuse and Blue Violet
	{ front: 0xfa5096, back: 0x4ffa58 },
	{ front: 0xfa5837, back: 0x38fab0 },
	{ front: 0x546cba, back: 0xfac432 },
];

/* SECTION - Scene Setup */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

let visibleHeight = 0;
let visibleWidth = 0;

let windowResized = false;
window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height; // for Perspective camera
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	// Update visible height and width
	visibleHeight = getVisibleHeightAtZDepth(0, camera);
	visibleWidth = getVisibleWidthAtZDepth(0, camera);
	console.log(visibleHeight, visibleWidth);

	windowResized = true;
});

// window.addEventListener("dblclick", () => {
// 	if (!document.fullscreenElement) {
// 		console.log("go full");
// 		renderer.domElement.requestFullscreen();
// 	} else {
// 		console.log("leave full");
// 		document.exitFullscreen();
// 	}
// });

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-5, 10, 5);
scene.add(directionalLight);

const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;
scene.add(camera);

/* const aspectRatio = sizes.width / sizes.height;
const fov = 6;
const camera = new THREE.OrthographicCamera(
	-fov * aspectRatio,
	fov * aspectRatio,
	fov,
	-fov,
	0.1,
	100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;
scene.add(camera); */

// Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/* SECTION: Utility Functions */

const getVisibleHeightAtZDepth = (depth, camera) => {
	// compensate for cameras not positioned at z=0
	const cameraOffset = camera.position.z;
	if (depth < cameraOffset) depth -= cameraOffset;
	else depth += cameraOffset;

	// vertical fov in radians
	const vFOV = (camera.fov * Math.PI) / 180;

	// Math.abs to ensure the result is always positive
	return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
};

const getVisibleWidthAtZDepth = (depth, camera) => {
	const height = getVisibleHeightAtZDepth(depth, camera);
	return height * camera.aspect;
};

/* SECTION - Objects */

visibleHeight = getVisibleHeightAtZDepth(0, camera);
visibleWidth = getVisibleWidthAtZDepth(0, camera);
console.log(visibleHeight, visibleWidth);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

/* SECTION - Render */

let listener;
document.getElementById("startButton").addEventListener("click", (event) => {
	document.getElementById("startScreen").remove();
	// create an AudioListener and add it to the camera
	listener = new THREE.AudioListener();
	camera.add(listener);

	render();

	// create a global audio source
	// sound = new THREE.Audio(listener);

	// load a sound and set it as the Audio object's buffer
	// const audioLoader = new THREE.AudioLoader();
	// audioLoader.load("sounds/page-flip.mp3", function (buffer) {
	// 	circles.forEach((circle) => {
	// 		const sound = new THREE.Audio(listener);
	// 		sound.setBuffer(buffer);
	// 		sound.setVolume(0.5);
	// 		circle.add(sound);
	// 	});
	// });
});

let circles = [];
let colors =
	colorCombinations[Math.floor(Math.random() * colorCombinations.length)];

function render() {
	circles.forEach((circle) => {
		scene.remove(circle);
		circle.geometry.dispose();
		circle.material.dispose();
		log;
	});
	circles = [];

	const circleRadius = 0.19;
	const circleDiameter = circleRadius * 2;
	const numCirclesWide = Math.floor(visibleWidth / circleDiameter);
	const numCirclesHigh = Math.floor(visibleHeight / circleDiameter);

	// Calculate excess space and spacing between circles
	const totalCircleWidth = numCirclesWide * circleDiameter;
	const excessWidth = visibleWidth - totalCircleWidth;
	const spacingX = excessWidth / (numCirclesWide + 1);

	const totalCircleHeight = numCirclesHigh * circleDiameter;
	const excessHeight = visibleHeight - totalCircleHeight;
	const spacingY = excessHeight / (numCirclesHigh + 1);

	const audioLoader = new THREE.AudioLoader();
	audioLoader.load("sounds/page-flip.mp3", function (buffer) {
		for (let i = 0; i < numCirclesWide; i++) {
			for (let j = 0; j < numCirclesHigh; j++) {
				const geometry = new THREE.CircleGeometry(circleRadius, 32);
				const color = colors.front;
				const material = new THREE.MeshBasicMaterial({
					color: color,
					side: THREE.DoubleSide,
				});
				// const materials = [
				// 	new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red material
				// 	new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green material
				// ];

				const circle = new THREE.Mesh(geometry, material);
				circle.position.x =
					i * (circleDiameter + spacingX) +
					spacingX +
					circleRadius -
					visibleWidth / 2;
				circle.position.y =
					j * (circleDiameter + spacingY) +
					spacingY +
					circleRadius -
					visibleHeight / 2;
				const sound = new THREE.Audio(listener);
				sound.setBuffer(buffer);
				sound.setVolume(0.5);
				circle.add(sound);
				scene.add(circle);
				circles.push(circle);
			}
		}
	});
	renderer.render(scene, camera);
	animate();
}

// let sound;

/* SECTION - Animation */

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function flip() {
	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera(pointer, camera);

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects(circles);
	// console.log(intersects);

	for (let i = 0; i < intersects.length; i++) {
		if (!intersects[i].object.userData.flipped) {
			intersects[i].object.material.color.set(colors.back);
			intersects[i].object.userData.flipped = true;

			gsap.to(intersects[i].object.rotation, {
				y: Math.PI,
				duration: 0.1,
				overwrite: true,
			});
		} /* else {
			intersects[i].object.material.color.set(colors.front);
			intersects[i].object.userData.flipped = false;
			gsap.to(intersects[i].object.rotation, {
				y: 0,
				duration: 0.1,
				overwrite: true,
			});
		} */
		const sound = intersects[i].object.children[0];
		if (sound) {
			sound.play();
		}
	}
}

function reset() {
	colors =
		colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
	circles.forEach((circle) => {
		gsap.to(circle.rotation, {
			y: 0,
			duration: 1.2,
			overwrite: true,
		});

		circle.material.color.set(colors.front);
		circle.userData.flipped = false;
	});
}

window.addEventListener("dblclick", () => {
	reset();
});

/* Based on this http://jsfiddle.net/brettwp/J4djY/*/
function detectDoubleTapClosure() {
	let lastTap = 0;
	let timeout;
	return function detectDoubleTap(event) {
		const curTime = new Date().getTime();
		const tapLen = curTime - lastTap;
		if (tapLen < 500 && tapLen > 0) {
			console.log("Double tapped!");
			reset();
			event.preventDefault();
		} else {
			timeout = setTimeout(() => {
				clearTimeout(timeout);
			}, 500);
		}
		lastTap = curTime;
	};
}

/* Regex test to determine if user is on mobile */
if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	document.body.addEventListener("touchend", detectDoubleTapClosure(), {
		passive: false,
	});
}

function onPointerMove(event) {
	/* calculate pointer position in normalized device coordinates
	(-1 to +1) for both components */

	let x, y;

	if (event.type === "mousemove") {
		x = (event.clientX / window.innerWidth) * 2 - 1;
		y = -(event.clientY / window.innerHeight) * 2 + 1;
	} else if (event.type === "touchmove") {
		const touch = event.touches[0];
		x = (touch.clientX / window.innerWidth) * 2 - 1;
		y = -(touch.clientY / window.innerHeight) * 2 + 1;
	}

	pointer.x = x;
	pointer.y = y;

	flip();
}

// window.addEventListener("pointermove", onPointerMove);
window.addEventListener("mousemove", onPointerMove);
window.addEventListener("touchmove", onPointerMove);

function animate() {
	const animationId = requestAnimationFrame(animate);

	// Update controls
	// controls.update();

	// Render the scene
	renderer.render(scene, camera);

	if (windowResized) {
		windowResized = false;
		cancelAnimationFrame(animationId);
		render();
	}
}

// Start the animation loop
// animate();
