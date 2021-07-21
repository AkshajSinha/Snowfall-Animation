const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow = [];
var engine, world;
var bgImg, snow1, snow2, snowImg1, snowImg2; 
var girlImg, obj1, obj2, obj1Img, obj2Img;

function preload(){
bgImg = loadImage("snow1.jpg");
girlImg = loadImage("girl.png");
obj1Img = loadImage("extra1.png");
obj2Img = loadImage("extra2.png");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  girl = createSprite(400, 290, 50, 50);
  girl.addImage(girlImg)
  girl.scale = 0.5;
  obj1 = createSprite(600, 290, 50, 50);
  obj1.addImage(obj1Img);
  obj1.scale = 0.5;
  obj2 = createSprite(200, 290, 50, 50);
  obj2.addImage(obj2Img);
  obj2.scale = 0.5;
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  if(frameCount%20 === 0){
    for(var i =0; i<200; i++){
      snow.push(new Snow(random(200,400),random(50,100),100,100))
    }
  }

  for(var j =0; j<snow.length; j++){
    console.log("Snow Display");
    snow[j].display();
  }




  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
    girl.y = girl.y - 15;
  }
}