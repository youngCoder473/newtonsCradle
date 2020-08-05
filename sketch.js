
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ballOne= new Ball(100,50);
	ballTwo= new Ball(250,200);
	ballThree= new Ball(300,200);
	ballFour = new Ball(350,100);
	ballFive= new Ball(400,100);
	blockOne= new Block(200,100);
	blockTwo= new Block(250,100);
	blockThree= new Block(300,100);
	blockFour = new Block(350,100);
	blockFive = new Block(400,100);
	chainOne=new Chain(ballOne.body,blockOne.body);
	chainTwo=new Chain(ballTwo.body,blockTwo.body);
	chainThree=new Chain(ballThree.body,blockThree.body);
	chainFour= new Chain(ballFour.body,blockFour.body);
	chainFive= new Chain(ballFive.body,blockFive.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ballOne.display();
  ballTwo.display();
  ballThree.display();
  ballFour.display();
  ballFive.display();
  blockOne.display();
  blockTwo.display();
  blockThree.display();
  blockFour.display();
  blockFive.display();
  chainOne.display();
  chainTwo.display();
  chainThree.display();
  chainFour.display();
  chainFive.display();
  drawSprites();
 
}



