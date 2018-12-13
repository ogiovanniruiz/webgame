let room_height = 500;
let room_length = 3000;
let room_width = 2000;

let velocity;
let position;
let speed = 200;

//Texture Declarations
let text;
let window_text;
let ceiling_text;
let floor_text;

//Model Declarations
let bed;
let chair;
let desk;
let laptop;
let closet;
let door;

let pan = 0;

let sensitivity = 0.01;
let friction = 0.1;

let clip_error = 150;

let objs = [];

let obj_posX;
let obj_posZ;

let rot_edit = 0;

function preload(){

	text = loadImage("textures/wood.jpeg")
	window_text = loadImage('textures/windows.jpg')
	ceiling_text = loadImage('textures/ceiling_texture.jpg')
	floor_text = loadImage('textures/carpet_texture.jpg')

	chair = loadModel('models/chair.obj');
	bed = loadModel('models/bed.obj');

	desk = loadModel('models/desk.obj');
	laptop = loadModel('models/laptop.obj');
	closet = loadModel('models/closet.obj');
	door = loadModel("models/door.obj");

}

function setup() {
 	createCanvas(windowWidth, windowHeight, WEBGL);

 	velocity = createVector(0,0,0);
	position = createVector(0,0,0);

	objs[0] = new Obj(-700, 250, 1500, "chair");

}

function draw() {

	background(0);

	if(mouseIsPressed){
		pan += map(mouseX-width/2, -width/2, width/2, -PI, PI)*sensitivity;
	}

	var forward = createVector(cos(pan), 0, sin(pan));

	var right = createVector(cos(pan - PI/2), 0, sin(pan - PI/2));

	if (keyIsDown(87)){
		velocity.add(p5.Vector.mult(forward,speed));
	}

	if (keyIsDown(83)){
		velocity.sub(p5.Vector.mult(forward,speed));

	}

	if (keyIsDown(81)){

		rot_edit += PI/4;


	}

	if (keyIsDown(69)){

		rot_edit -= PI/4;


	}

	velocity.mult(friction);
	position.add(velocity);

	if((abs((objs[0].x - position.x)) < 500) && (abs((objs[0].z - position.z)) < 500)){

		if (confirm('Would you like to sleep?')) {
    		console.log("HERE");

    		position.x = 0;
    		position.z = 0;
		}else{

			position.x = 0;
    		position.z = 0;


		} 

	}

	var center = p5.Vector.add(position, forward);

	camera(position.x, position.y, position.z, center.x, center.y, center.z, 0, 1,0);

	build_room();

	console.log("X: " + obj_posX);
	console.log("Z: " + obj_posZ);
	//console.log("Edit Angle: " + rot_edit)


}

function mousePressed(){


	console.log("THIS PRESSED")
}


function build_room(){

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

	//chair
	push();
		translate(-526, room_height/2, -1278)
		scale(15);
		rotateY(PI);
		rotateZ(PI)
		model(chair);
	pop();

	//bed
	push();
		translate(-room_width/2 + 300, room_height/2, room_length/2 -500)
		scale(100);
		rotateZ(PI);
		model(bed);
	pop();

	//desk
	push();
		translate(-room_width/4,room_height/2,room_length - 3900);
		scale(225);
		rotateY(PI/2);
		rotateZ(PI);
		model(desk);
	pop();

	//laptop
	push();
		translate(-500,52,-1350);
		rotateX(PI);
		rotateY(PI);
		model(laptop);
	pop();

	//closet
	push();
		translate(460,250,-865);
		scale(200);
		rotateY(PI);
		rotateZ(PI);
		model(closet);
	pop();

	//door

	obj_posX = map(mouseX, 0, width, -room_length, room_length)
	obj_posZ = map(mouseY, 0, height, -room_length, room_length)
	push();
		translate(475,243,-1288);
		rotateZ(PI);
		scale(200);
		model(door);
	pop();

}
