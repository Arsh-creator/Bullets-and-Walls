var bullet,wall,speed,weight,thikness;
var bulletrightedge,bulletleftedge,wallleftedge;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="red";
  

 bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
if(hascollided(bullet, wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness+thickness+thickness);

  if(damage>10){
    wall.shapeColor="red";

  }
  if(damage<10){
    wall.shapeColor="green";
  }
}

  
  
  drawSprites();
}

function hascollided (lwall,lbullet){
bulletrightedge=lbullet.x+lbullet.width;
wallleftedge=lwall.x;
if(bulletleftedge>=wallleftedge){
  return true

}
return false
}