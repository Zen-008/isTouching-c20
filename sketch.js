var rect1,rect2


function setup() {
  createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
  rect2=createSprite(200,200,50,50);
  rect1.shapeColor="blue";
  rect2.shapeColor="blue"; 
}

function draw() {
  background("red");  
  drawSprites();

rect2.y=mouseY
rect2.x=mouseX


if(rect1.x-rect2.x<=rect2.width/2+rect1.width/2&&
  rect2.x-rect1.x<=rect2.width/2+rect1.width/2&&
  rect1.y-rect2.y<=rect2.height/2+rect1.height/2&&
  rect2.y-rect1.y<=rect2.height/2+rect1.height/2){
rect1.shapeColor="green";
  rect2.shapeColor="green"; 
}

else{
  rect1.shapeColor="blue";
  rect2.shapeColor="blue"; 
}

}