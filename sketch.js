const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box3;
var box4;
var pig1;
var log1;
var pig2;
var log2;
var box5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,70,70);
    box2 = new Box(890,550,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(740, 550 )
    log1 = new log(787, 500, 20, 300, PI/2 )
    box3 = new Box(700,470,70,70);
    box4 = new Box(890,470,70,70);
    pig2 = new pig(790, 470 );
    log2 = new log(787, 400, 20, 300, PI/2 )
    box5 = new Box(790, 390, 70, 70);
    log3 = new log(740, 390, 20, 150, PI/7 ) 
    log4 = new log(840, 390, 20, 150,- PI/7 )
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}
