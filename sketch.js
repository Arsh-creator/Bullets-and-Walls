var bullet, wall, speed, weight, thickness,deformation, damage;
function setup() {
  createCanvas(1600, 400);
  thickness= random(22, 83);
  speed= random(233, 321);
  weight= random(30, 52);
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,255,255);
  wall = createSprite(1200, 200, thickness, 100);
  wall.shapeColor = "red";
}

function draw() {
  background(0,0,0);  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
   bullet.velocityX = 0;
   deformation= 0.5*weight*speed*speed/22509;
  }

  if(deformation>180){
    bullet.shapeColor = "white";
  }

  if(deformation<180 && deformation>100){
    bullet.shapeColor = "white";
  }

  if(deformation<100){
    bullet.shapeColor = "white";
  }

  if(hasCollided(bullet, wall)){
  bullet.velocityX=0;
  damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);  
  }

  if(damage>10){
    bullet.shapeColor = color(255, 0, 0);
    }
  
    if(damage<10){
      bullet.shapeColor = color(0, 255, 0);
    } 
   

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletrightedge = lbullet.x + lbullet.width;
  wallleftedge= lwall.x;
  if(bulletrightedge>=wallleftedge){
    return true
  }
  return false;
}