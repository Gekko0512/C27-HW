
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


	


function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	
     roof = new Roof (1000,1200,1000,40);
     

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



