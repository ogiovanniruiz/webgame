let angle = 0;

let x = 1500;
let y = 0;
let z = -3500;

speed = 100;

theta = 0;
let walls;
let cube;

let diego;

let flakes;

function preload(){

	walls = loadModel('models/room2.obj');
	cube = loadModel('models/untitled.obj');

	diego = loadImage("jimmy.jpg");

	flakes = loadImage("diego.jpg");
}

function setup() {
  	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

	background(255);
	
	//camera(x, 200, z, x + angle, 200, angle + 3500 + z, 0, -1,0);

	camera(x, 200, z, x*cos(angle*PI/180), 200, z*sin(angle*PI/180), 0, -1,0);

	//console.log( cos(angle*PI/180))

	//console.log(angle)

	if (keyIsDown(69)){
		if (angle >= -180){
			angle -= 1;
		} else{

			angle = 180
		}
	}
	if (keyIsDown(81)){

		if (angle <= 180){
			angle += 1;
		} else{
			angle = -180
		}

	}

	push();
		translate(0,0,-3000);
		//scale(500)
		texture(flakes);

		model(walls);
	pop();

	push();
		translate(1000,200,-1500);
		rotateZ(theta * 0.1);
    	rotateX(theta * 0.1);
    	rotateY(theta * 0.1);
		texture(flakes);
		box(500, 500, 500);
	pop();

	if (keyIsDown(87)){
		if(z >= -200){
			console.log("CLipping")
		}else{
			z += speed;
		}
	}
	if (keyIsDown(83)){
		if(z <= -3500){
			console.log("CLipping")
		}else{
			z -= speed;
		}
	}
	if (keyIsDown(68)){
		if(x >= 2000){
			console.log("CLipping")
		}else{
			x += speed;
		}
	}
	if (keyIsDown(65)){
		if(x <= 0){
			console.log("CLipping")
		}else{
			x -= speed;
		}
	}

	theta += 1;

	//console.log("x: " + x);
	//console.log("z: " + z);
}

/*
function keyPressed(){

	if(key === 'a'){x -= 10;}

	if (key === 's'){z -= 10;}

	if (key === 'd'){x += 10;}

	if (key === 'w'){z += 10;}

}

*/
