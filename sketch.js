var car1;
var car2;
var car3;
var car4;
var finish;
var blue;
var white;
var black;
var green;
var a;
var b;
var c;
function setup() {
  createCanvas(displayWidth,displayHeight -150);
  car1 = createSprite(1400,60,20,20);
  car1.addImage("car1.jpg",car1_Image);
  car2 = createSprite(1400,260,20,20);
  car2.addImage("car2.jpg",car2_Image);
  car3 = createSprite(1400,460,20,20);
  car3.addImage("car3.jpg",car3_Image);
  car4 = createSprite(1400,660,20,20);
  car4.addImage("car4.jpg",car4_Image);
  finish = createSprite(20,360,20,20);
  finish.addImage("finish.PNG",finish_Image);

  a = createSprite(150,160,5000000,5);
  a.shapeColor = "red";
  b = createSprite(150,360,5000000,5);
  b.shapeColor = "blue";
  c = createSprite(150,560,5000000,5);
  c.shapeColor = "green";
}
function preload(){
  car1_Image = loadImage("car1.jpg");
  car2_Image = loadImage("car2.jpg");
  car3_Image = loadImage("car3.jpg");
  car4_Image = loadImage("car4.jpg");
  blue_Image = loadImage("blue.png");
  white_Image = loadImage("white.png");
  black_Image = loadImage("black.png");
  green_Image = loadImage("green.png");
  finish_Image = loadImage("finish.png");
}
function draw() {
  background("white");
  text(mouseX + ',' + mouseY, 10, 15);
  
  car1.scale = 0.05;
  car2.scale = 0.05;
  car3.scale = 0.05;
  car4.scale = 0.05;
  finish.scale = 1.75;
  if(car1.collide(finish)){
    car1.destroy();
    car2.destroy();
    car3.destroy();
    car4.destroy();
    finish.destroy();
    blue = createSprite(800,300,50,50);
    blue.addImage("blue.png",blue_Image);
    blue.scale = 4;
    //blue.display();
   }
   if(car2.collide(finish)){
     car1.destroy();
     car2.destroy();
     car3.destroy();
     car4.destroy();
     finish.destroy();
     black = createSprite(800,300,50,50);
     black.addImage("black.png",black_Image);
     black.scale = 4;
     black.display();
    }
    if(car3.collide(finish)){
     car1.destroy();
     car2.destroy();
     car3.destroy();
     car4.destroy();
     finish.destroy();
     white = createSprite(800,300,50,50);
     white.addImage("white.png",white_Image);
     white.scale = 4;
     white.display();
    }
    if(car4.collide(finish)){
     car1.destroy();
     car2.destroy();
     car3.destroy();
     car4.destroy();
     finish.destroy();
     green = createSprite(800,300,50,50);
     green.addImage("green.png",green_Image);
     green.scale = 4;
     green.display();
    }
  drawSprites();
 car1.display();
 car2.display();
 car3.display();
 car4.display();
 a.display();
 b.display();
 c.display();
 finish.display();
}
function keyPressed(){
  if(keyCode ===65){
    car1.x=car1.x-20;
  }
  if(keyCode ===70){
    car2.x=car2.x-20;
  }
  if(keyCode ===74){
    car3.x=car3.x-20;
  }
  if(keyCode ===76){
    car4.x=car4.x-20;
  }
}