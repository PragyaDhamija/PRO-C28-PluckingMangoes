
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var treeO,stoneO,groundO,sling;
var world;
var boy;
var backgroundImg;

function preload(){
	boy = loadImage("boy.png")
	backgroundImg = loadImage("background.jpg")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here..
	stoneO = new stone(325,385,30);
	m1 = new mango(840,160,40)
	m2 = new mango(820,270,40)
	m3 = new mango(1100,100,30)
	m4 = new mango(1000,70,30)
	m5 = new mango(1150,170,40)
	m6 = new mango(1010,180,30)
	m7 = new mango(1100,230,40)
	m8 = new mango(920,220,30)
	m9 = new mango(1000,270,40)
	m10 = new mango(930,120,40)

	treeO = new tree(1050,580);

	groundO = new ground(width/2,600,width,20);

	sling = new SlingShot(stoneO.body,{x : 325, y : 385})

	var render = Render.create({
		element : document.body,
		engine : engine,
		options : {
			width : 1300,
			height : 600,
			wireframes : false,
		}
	})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  textSize(20);
  fill("")
  text("Press Space key to get a Second Chance to play!!! ",50,50);


    //groundO.display();
	image(boy,200,390,200,200);
	treeO.display();
    stoneO.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();

	sling.display();
  
  //detectCollision();
    detectCollision(stoneO, m1);
	detectCollision(stoneO, m2);
	detectCollision(stoneO, m3);
	detectCollision(stoneO, m4);
	detectCollision(stoneO, m5);
	detectCollision(stoneO, m6);
	detectCollision(stoneO, m7);
	detectCollision(stoneO, m8);
	detectCollision(stoneO, m9);
	detectCollision(stoneO, m10);
 
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneO.body,{x:235, y:420})
		sling.attach(stoneO.body);
	}
}
function detectCollision(lstone,lmango) {
	MBP = lmango.body.position
	SBP = lstone.body.position

	var distance=dist(SBP.x, SBP.y, MBP.x, MBP.y)
	if(distance<=lmango.radius+lstone.radius) {
		Matter.Body.setStatic(lmango.body,false);
	}
}
function mouseDragged() {
	Matter.Body.setPosition(stoneO.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly();
}

