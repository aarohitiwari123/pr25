
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1,ground1,box1,box2,box3;
var dustb;

function preload(){
dustbImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(900,647,140,25);
	box2 = new Box(823,565,25,170);
	box3 = new Box(977,565,25,170);
	paper1 = new Paper(200,450,40);
	dustb = createSprite(900,545,200,200)
	dustb.addImage(dustbImg);
	dustb.scale = 0.7

	ground1 = new Ground(width/2,670,width,20)
	ground1.shapeColor=color(255)

	//Create a Ground
	//ground1 = Bodies.rectangle(width/2, 800, width, 100 , {isStatic:true} );
	var render = Render.create({
		element: document.body,
		engine : engine,
		options:{
			width : 1200,
			height : 700,
			wireframes: false
		}

});

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(34,35,35);
  
	ground1.display(); 
	box1.display();
	box2.display();
	box3.display();
	paper1.display();
	dustb.display();
	
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75})
	}
}

