let room_height = 500;
let room_length = 4000;
let room_width = 2000;

let x = 0;
let y = 0;
let z = 0;

let angle = 0;

let speed = 100;
let turn_speed = 10;

let text;
let window_text;
let ceiling_text;
let floor_text;

let bed;
let chair;

function preload(){
	text = loadImage("wood.jpeg")
	window_text = loadImage('windows.jpg')
	ceiling_text = loadImage('ceiling_texture.jpg')
	floor_text = loadImage('carpet_texture.jpg')

	chair = loadModel('models/chair.obj');
	bed = loadModel('models/bed.obj');
}

function setup() {
 	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

	background(0);

	camera(x, y, z, x, y, 0, 0, 1,0);

	if (keyIsDown(81)){angle -= turn_speed;}
	if (keyIsDown(69)){angle += turn_speed;}

	//console.log(angle);

	push();
		texture(text);
		box(room_width, room_height, room_length);
	pop();

	//Ceiling
	push();
		translate(0,-room_height/2,0);
		texture(ceiling_text);
		box(room_width, 3, room_length);
	pop();

	//Floor
	push();
		translate(0,room_height/2,0);
		texture(floor_text);
		box(room_width, 3, room_length);
	pop();

	//Window
	push();
		translate(room_width/2,0,0);
		texture(window_text);
		box(2,200,200)
	pop();

	push();
		translate(room_width/2 - 200, room_height/2, 0)
		scale(10);
		rotateY(PI/2);
		rotateZ(PI)
		model(chair);
	pop();

	push();
		translate(-room_width/2 + 300, room_height/2, room_length/2 -500)
		scale(100);
		rotateZ(PI);
		model(bed);
	pop();



	if (keyIsDown(83)){
		if(z >= room_length/2){
			console.log("CLipping")
		}else{
			z += speed;
		}
	}

	if (keyIsDown(87)){
		if(z < -room_length/2){
			console.log("CLipping")
		}else{
			z -= speed;
		}
	}

	if (keyIsDown(68)){
		if(x >= room_width/2){
			console.log("CLipping")
		}else{
			x += speed;
		}
	}

	if (keyIsDown(65)){
		if(x <= -room_width/2){
			console.log("CLipping")
		}else{
			x -= speed;
		}
	}


	//console.log("x: " + x);
	//console.log("z: " + z);
}
