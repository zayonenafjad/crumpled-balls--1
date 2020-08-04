var paper, basket1,basket2,basket3;
var ground;
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	
  //ground=createSprite(400,700,800,20)
  ground = new Ground(600,690,1200,10)
paper=new paperball(20,675,10)
basket1=new Dustbin(750,685,10,150)
basket2=new Dustbin(700,685,10,150)
basket3=new Dustbin(730,687,45,10)
Engine.run(engine);

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
});
Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  paper.display();
  basket1.display()
  basket2.display();
  basket3.display();
  //drawSprites();
  ground.display()
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
  }
}



