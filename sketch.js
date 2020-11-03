var movingRect , fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "cyan";

  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "lime";
}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2  ){
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "yellow";
    }
    else {
      fixedRect.shapeColor = "cyan";
      movingRect.shapeColor = "lime";
    }
  drawSprites();
}