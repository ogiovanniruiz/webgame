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

	background(0);
	
	offset = (height/2)/tan(PI/6);

	camera(x, 200, z, x + angle, 200, angle, 0, -1,0);

	if (keyIsDown(81)){angle -= speed;}
	if (keyIsDown(69)){angle += speed;}

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
		texture(diego);
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

	theta += 5;

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
