let angle = 0;

let room_height = 500;

let room_length = 2000;

let room_width = 2000;

let x = 0;
let y = 0;
let z = 0;

let speed = 100;

let turn_speed = 10;

let text;

let window_text;

function preload(){
	text = loadImage("wood.jpeg")

	window_text = loadImage('windows.jpg')

	ceiling_text = loadImage('ceiling_texture.jpg')
}

function setup() {
 	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

	background(0);
	
	camera(x, y, z , x*cos(angle*PI/180) + z*sin(angle*PI/180), y, z*sin(angle*PI/180), 0, 1,0);

	if (keyIsDown(81)){angle -= turn_speed;}
	if (keyIsDown(69)){angle += turn_speed;}

	//Back Wall
	push();
		translate(0,0,-room_length/2);
		texture(text);
		box(room_width, room_height, 1);
	pop();

	//Floor
	push();
		translate(0,room_height/2,0);
		rotateX(PI/2);
		texture(text);
		box(room_width, room_height*4, 1);
	pop();

	//Celing
	push();
		translate(0,-room_height/2,0);
		rotateX(PI/2);
		texture(ceiling_text);
		box(room_width, room_height*4, 1);
	pop();

	//Right Wall
	push()
		translate(room_width/2, 0, 0)
		rotateY(PI/2);
		rotateZ((PI/2))
		texture(window_text);
		box(300, 300, 3);
	pop()

	//Left Wall
	push();
		translate(room_width/2,0,0);
		rotateY(PI/2);
		texture(text);
		box(room_length, room_height, 1);
	pop();

	//Front Wall
	push();
		translate(-room_width/2,0,0);
		rotateY(PI/2);
		texture(text);
		box(room_length, room_height, 1);
	pop();

	//Window
	push();
		translate(0,0,room_length/2);
		texture(text);
		box(room_width, room_height, 1);
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
