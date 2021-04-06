var bgImage;
var mouse,cat;
var mouseStanding,catStanding;
var mouseTeasing,catRunning;
var catHappy,mouseHappy;

function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
mouseStanding=loadAnimation("images/mouse1.png");
catStanding=loadAnimation("images/cat1.png");
mouseTeasing=loadAnimation("images/mouse2.png","images/mouse3.png");
catRunning=loadAnimation("images/cat2.png","images/cat3.png");
catHappy=loadAnimation("images/cat4.png");
mouseHappy=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(100,650,50,50);
    mouse.addAnimation("mouse",mouseStanding);
    mouse.scale=0.18;
    cat=createSprite(780,680,50,50);
    cat.addAnimation("cat",catStanding);
    cat.scale=0.18;

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x< (cat.width - mouse.width)/2)
    cat.velocityX=0;
    cat.addAnimation("catLastImg",catHappy);
    cat.changeAnimation("catLastImg");


    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){

cat.velocityX = -2;
cat.addAnimation("cat_running",catRunning);
cat.changeAnimation("cat_running");

mouse.frameDelay = 25;
    mouse.addAnimation("mouse_teasing",mouseTeasing);
    mouse.changeAnimation("mouse_teasing");

  }
    




}
