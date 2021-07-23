const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200,600);
 	engine = Engine.create();
	myworld = engine.world;
    ham=new Hammer()
    stone=new Stone(300,200,70,70)
    stone2=new Stone(800,300,60,70)
    iron=new Stone(500,150,50,60)
    iron2=new Stone(320,520,60,40)
    ground=new Ground(600,600,1200,20);  
    rub=new Rubber(700,300,60)
    s1=new Sand(500,300,20)
    s2=new Sand(560,300,25)
    s3=new Sand(200,300,18)
    s4=new Sand(900,300,20)
    s5=new Sand(150,300,21)
  }

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(338,164,21);
  ham.display()
  stone.display()
  stone2.display()
  ground.display();
  rub.display()
  s1.display()
  s2.display()
  s3.display()
  s4.display()
  s5.display()
  iron.display()
  iron2.display()
  drawSprites();
 
}



