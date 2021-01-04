
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 

	base = new Stand(400,300,300,20)
	b1 = new Ball(400,310,20)
    Rope1 = new Rope(b1,base,base.x)

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  base.display();
  b1.display();
  Rope1.display();
  drawSprites();
 
}
 


