
var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 80, 50);
  fixedRect.shapeColor="green"
  fixedRect.velocityY =3;
  fixedRect.velocityX =3;
  fixedRect.debug=true;

  movingRect=createSprite(500, 300, 50, 80);
  movingRect.shapeColor="green";
  movingRect.velocityY = -3;
  movingRect.velocityX = -3;

  movingRect.debug=true;

}

function draw() {
  background(255,5,255); 
  //movingRect.x=mouseX;
  //movingRect.y =mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2)
    {

      fixedRect.velocityX = fixedRect.velocityX*(-1);
      movingRect.velocityX = -(movingRect.velocityX);

      
    }

    if(movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2)
    {
      fixedRect.velocityY =fixedRect.velocityY*(-1);
      movingRect.velocityY = movingRect.velocityY*(-1);
    }
  
  drawSprites();
}