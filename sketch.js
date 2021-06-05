
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body;
var block1,block2;
var rotator1,rotator2,rotator3;
var angle1=60;
var angle2=120;
var angle3=180;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var plane_options={
	isStatic:true
	
}

body=Bodies.rectangle(400,600,800,10,plane_options);
World.add(world,body);

 var block_options={
	isStatic:true,
	
}
block1=Bodies.rectangle(200,400,200,10,block_options);
World.add(world,block1);
block2=Bodies.rectangle(500,400,200,10,block_options);
World.add(world,block2);

var rotator_options={
	isStatic:true

}

rotator1=Bodies.rectangle(300,200,150,15,rotator_options);
World.add(world,rotator1);


rotator2=Bodies.rectangle(300,200,150,15,rotator_options);
World.add(world,rotator2);

rotator3=Bodies.rectangle(300,200,150,15,rotator_options);
World.add(world,rotator3);

var particle_options={
	restitution:0.7,
	friction:0.2

}

particle1=Bodies.circle(300,10,10,particle_options);
World.add(world,particle1);

particle2=Bodies.circle(300,10,10,particle_options);
World.add(world,particle2);

particle3=Bodies.circle(300,10,10,particle_options);
World.add(world,particle3);

particle4=Bodies.circle(300,10,10,particle_options);
World.add(world,particle4);

particle5=Bodies.circle(300,10,10,particle_options);
World.add(world,particle5);




	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);

}

function draw() {
 
  
  background("lightGreen");
  Engine.update(engine);
  rect(body.position.x,body.position.y,800,10);
  rect(block1.position.x,block1.position.y,200,10);
  rect(block2.position.x,block2.position.y,200,10);
   Matter.Body.rotate(rotator1,angle1);
  push()
translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
  rect(0,0,150,15);
pop()
angle1+=4;

Matter.Body.rotate(rotator2,angle2);
push()
translate(rotator2.position.x,rotator3.position.y);
rotate(angle2);
rect(0,0,150,15);
pop()
angle2+=4;

Matter.Body.rotate(rotator3,angle3);
push()
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,150,15);
pop()
angle3+=4;

ellipse(particle1.position.x,particle1.position.y,10);
ellipse(particle2.position.x,particle2.position.y,10);
ellipse(particle3.position.x,particle3.position.y,10);
ellipse(particle4.position.x,particle4.position.y,10);
ellipse(particle5.position.x,particle5.position.y,10);
  
  drawSprites();
 
}



