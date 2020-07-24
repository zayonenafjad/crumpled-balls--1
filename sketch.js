var paper, basket1,basket2,basket3;
var ground;
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=createSprite(400,700,800,20)
paper=new paperball(20,675,10)
basket1=new Dustbin(750,675,5,100)
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
paper.display();
  basket1.display()
  drawSprites();
 
}



