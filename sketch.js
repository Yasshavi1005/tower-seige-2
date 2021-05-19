const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(400, 390, width, 20);

stand1 = new Ground(420, 315, 230, 10);
stand2 = new Ground(650, 220, 200, 10);

block1 = new Box1(330, 290, 30, 40);
block2 = new Box1(360, 290, 30, 40);
block3 = new Box1(390, 290, 30, 40);
block4 = new Box1(420, 290, 30, 40);
block5 = new Box1(450, 290, 30, 40);
block6 = new Box1(480, 290, 30, 40);
block7 = new Box1(510, 290, 30, 40);
block8 = new Box2(360, 250, 30, 40);
block9 = new Box2(390, 250, 30, 40);
block10 = new Box2(420, 250, 30, 40);
block11= new Box2(450, 250, 30, 40);
block12 = new Box2(480, 250, 30, 40);
block13 = new Box3(390, 210, 30, 40);
block14 = new Box3(420, 210, 30, 40);
block15 = new Box3(450, 210, 30, 40);
block16 = new Box4(420, 170, 30, 40);

block17 = new Box1(590, 195, 30, 40);
block18 = new Box1(620, 195, 30, 40);
block19 = new Box1(650, 195, 30, 40);
block20 = new Box1(680, 195, 30, 40);
block21 = new Box1(710, 195, 30, 40);
block22 = new Box3(620, 155, 30, 40);
block23 = new Box3(650, 155, 30, 40);
block24 = new Box3(680, 155, 30, 40);
block25 = new Box2(650, 115, 30, 40);

polygon = new Polygon(50, 200, 40);

Slingshot = new SlingShot(polygon.body, {x:100, y:200});
}

function draw() {
  background(101, 67, 33);  
  Engine.update(engine);

  textSize(20);
  fill(255);
text("Press space to launch the polygon again", 200, 70);
text("Drag the hexagonal stone and release it, to launch it towards the blocks!", 80, 30)

ground.display();

stand1.display();
stand2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

polygon.display();

Slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Slingshot.attach(polygon.body)
  }
}