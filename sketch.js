const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2, box3;

var solo;
function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
    box1 = new Box(200,300,50,50);
    box2 = new Box(200,100,100,100);
    box3 = new Box(100,150,100,50);

   solo = new Ground(200, 390, 400, 20 )
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();

    solo.display();
    drawSprite()
}