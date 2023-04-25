var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	matter.bodies.circle(200, 100, 10, ball_options)
	world.add(world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()	
  groundObj=new ground(width/2, 670, width, 20);
  leftSide = new ground(1100, 600, 20, 120);

  function keyPressed() {
	if (keyCode === UP_ARROW) {
		matter.body.applyForce(ball, {x : 0, y : 0}, {x : 0.05, y : 0})
	}
  }
  
circle()

  drawSprites();
  
}



