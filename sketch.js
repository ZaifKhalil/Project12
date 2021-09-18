var path, InvisibleBounararies;

var Runner;



function preload(){
  Running = loadAnimation("Runner-1.png","Runner-2.png");
  
  pathTrack = loadImage("path.png");


  

}

function setup(){
  createCanvas(400,400);

  path = createSprite(200, 200);
  path.addImage("pathTrk",pathTrack);
  path.veloxityY = 4;
  path.scale = 1.2;
  
  Runner = createSprite(50, 100, 20, 20);
  Runner.addAnimation("Run",Running);
  Runner.collide(InvisibleBoudnary1);
  Runner.collide(InvisibleBoundary2);

  InvisibleBounarary1 = createSprite (350,100,20,20)
  InvisibleBoundary2 = createSprite (50,100,20,20)
}



function draw() {
  background(0);
  if (path.y > 400){
    path.y = height/2;
  }
  if(keyDown("right_arrow")){
    Runner.veloxityX = 3
  }
  if(keyDown("left_arrow")){
    Runner.veloxityX = -3
  }
  
}






