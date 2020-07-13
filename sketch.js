const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball;
var bin1,bin2,bin3;
var ground;


function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	
	

	ball = new Ball(80,200,50,60);
	bin1 = new Dustbin(595,300,20,140);
	bin2 = new Dustbin(655,362,100,18);
	bin3 = new Dustbin(715,300,20,140);
  ground = new Ground(400,380,900,20);


	
  
}


function draw() {
  background("white");
  Engine.update(engine);
  bin1.display();
  bin2.display();
  bin3.display();
  ball.display();
  ground.display();
  
 
}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-180});
  }
}



