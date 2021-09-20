
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//created multiple of praticle bodies.
	var plane_options={
    restitution:0.4
	friction:0.02
	}	
	practicle1 = Bodies.circle(220,10,10,practicle_options);
	world.add(world,practicle1);
	//created shape for all the rotators.
	Matter.body.rotate (rotator1,angle1)
	push();
	translate(rotator1.x,rotator1.position.position.y);
	rotate(angle1);
    rect(0,0,150,20);
	pop();
	angle1+=0.2
    //Created plane and block bodies.
	var plane_options={
    isStatic :true
	}

	Engine.run(engine);
    Engine.update(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



