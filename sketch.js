var wall, thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  wall = createSprite(700, 60, thickness, 250);
  wall.shapeColor = "white";
  bullet = createSprite(10,60,60,5);
  bullet.shapeColor = "black";

  speed=random(55,90);
  weight=random(400,1900);
  thickness=random(22,83);

  bullet.velocityX=speed;
}

function draw() {
  background(220);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    
  if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if (damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}