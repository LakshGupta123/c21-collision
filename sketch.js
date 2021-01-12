var fixedRect;
var movingRect;
var fixedRect1,fixedRect2,fixedRect3;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(100, 200, 50, 50);
movingRect = createSprite(500,200,50,50);
fixedRect1= createSprite(200,200,50,50);
fixedRect2= createSprite(300,200,50,50);
fixedRect3= createSprite(400,200,50,50);


fixedRect.shapeColor="red";
movingRect.shapeColor="red";
fixedRect1.shapeColor="red";
fixedRect2.shapeColor="red";
fixedRect3.shapeColor="red";

fixedRect.debug= true;
movingRect.debug= true;

}

function draw() {
  background("blue");  
movingRect.x= mouseX;
movingRect.y=mouseY

if(isTouching(movingRect,fixedRect3)){
  fixedRect3.shapeColor="yellow";
  movingRect.shapeColor="yellow";

}
else{fixedRect3.shapeColor="red";
movingRect.shapeColor="red"
}
  drawSprites();
}






















