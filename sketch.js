var bBalloon, yBalloon, rBalloon;
var bBalloonImg, yBalloonImg, rBalloonImg;
var pBalloon, oBalloon;
var pBalloonImg, oBalloonImg;
var bird1, bird1Img;
var bird2, bird2Img;
var bow, bowImg, arrowImg, arrow;

function preload(){

  bBalloonImg = loadImage("images/BlueBalloon.png");
  yBalloonImg = loadImage("images/YellowBalloon.png");
  rBalloonImg = loadImage("images/RedBalloon.png");
  pBalloonImg = loadImage("images/PinkBalloon.png");
  oBalloonImg = loadImage("images/OrangeBalloon.png");

  bird1Img = loadImage("images/Bird1.png");
  bird2Img = loadImage("images/Bird2.png");

  bowImg = loadImage("images/Bow.png");
  arrowImg = loadImage("images/Arrow.png");
}
function setup() {
  createCanvas(800,400);

  bow = createSprite(770,100,50,50);
  bow.addImage(bowImg);
  bow.scale = 0.4;

  bBalloonGroup = new Group();
  yBalloonGroup = new Group();
  rBalloonGroup = new Group();
  pBalloonGroup = new Group();
  oBalloonGroup = new Group();

  bird1Group = new Group();
  bird2Group = new Group();

  arrowGroup = new Group();
}

function draw() {
  background(255); 

  Balloon();
  Bird();

  if(keyDown("space")){
    drawArrow();
  }
  bow.y = mouseY;

  drawSprites();
}

function Balloon(){
  if(frameCount % 60 === 0){
    bBalloon = createSprite(random(0,700),400,50,50);
    bBalloon.velocityY = random(-1,-4);
    bBalloon.addImage(bBalloonImg);
    bBalloon.scale = 0.14;

    bBalloon.lifetime = 700;
    bBalloonGroup.add(bBalloon);
  }

  if(frameCount % 131 === 0){
    yBalloon = createSprite(random(0,700),400,50,50);
    yBalloon.velocityY = random(-1,-4);
    yBalloon.addImage(yBalloonImg);
    yBalloon.scale = 0.14;

    oBalloon = createSprite(random(0,700),400,50,50);
    oBalloon.velocityY = random(-1,-4);
    oBalloon.addImage(oBalloonImg);
    oBalloon.scale = 0.36;

    yBalloon.lifetime = 700;
    yBalloonGroup.add(yBalloon);
    oBalloon.lifetime = 700;
    oBalloonGroup.add(oBalloon);
  }

  if(frameCount % 187 === 0){
    rBalloon = createSprite(random(0,700),400,50,50);
    rBalloon.velocityY = random(-1,-4);
    rBalloon.addImage(rBalloonImg);
    rBalloon.scale = 0.14;

    pBalloon = createSprite(random(0,700),400,50,50);
    pBalloon.velocityY = random(-1,-4);
    pBalloon.addImage(pBalloonImg);
    pBalloon.scale = 0.14;

    rBalloon.lifetime = 700;
    rBalloonGroup.add(rBalloon);
    pBalloon.lifetime = 700;
    pBalloonGroup.add(pBalloon);
  }
}

function Bird(){
  if(frameCount % 162 === 0){
    bird1 = createSprite(0,random(380,400),50,50);
    bird1.velocityX = random(2,5);
    bird1.velocityY = random(-2,-4);
    bird1.addImage(bird1Img);
    bird1.scale = 0.11;
    bird1.lifetime = 175;
    bird1Group.add(bird1);
  }

  if(frameCount % 275 === 0){
    bird2 = createSprite(400,random(380,400),50,50);
    bird2.velocityX = random(-2,-5);
    bird2.velocityY = random(-2,-4);
    bird2.addImage(bird2Img);
    bird2.scale = 0.13;
    bird2.lifetime = 175
    bird2Group.add(bird2);
  }
}

function drawArrow(){
  arrow = createSprite(750,10,50,50);
  arrow.addImage(arrowImg);
  arrow.y = bow.y;
  arrow.scale = 0.1;
  arrow.velocityX = -7

  arrow.lifetime = 188;
  arrowGroup.add(arrow);
}
