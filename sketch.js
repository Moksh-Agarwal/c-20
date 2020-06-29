var movingRect, fixed;

function setup() {
  createCanvas(1200,800);
  fixed=createSprite(600, 400, 50, 80);
  fixed.shapeColor="green";
  movingRect= createSprite(400,200, 80 ,40);
 movingRect.shapeColor="green";
}

function draw() {
  background("black");  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;
  if(movingRect.x- fixed.x< movingRect.width/2+ fixed.width/2 && fixed.x- movingRect.x< movingRect.width/2+ fixed.width/2
    && movingRect.y- fixed.y< movingRect.height/2+ fixed.height/2 && fixed.y- movingRect.y< movingRect.height/2+ fixed.height/2 )
  {
    fixed.shapeColor="red";
    movingRect.shapeColor="red"; 
  }
  else
  {
    fixed.shapeColor="green";
    movingRect.shapeColor="green";
  }
  
  drawSprites();
}