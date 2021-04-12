var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime;

function preload(){
  
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 200);
  // ground = createSprite(x,y,width,height);
  ground = createSprite(300,190,2000,7);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
monkey = createSprite(10,170,15,15);
monkey.addAnimation("run",monkey_running);
monkey.scale = 0.08
  
FoodGroup = new Group();
obstacleGroup = new Group();
  
survivalTime = 0;
  
}


function draw() {
background("lightblue");
  
 ground.velocityX = -4;

  if (keyDown("Space") && monkey.y >= 50) {
  monkey.velocityY = -18;
  }
  
  monkey.velocityY = monkey.velocityY+1
  
  monkey.collide(ground);
  
  obstacles();
  Formbanana();
  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime,50,50)
    
drawSprites(); 
}

function obstacles(){

if(frameCount%300 == 0){
obstacle = createSprite(300,170,15,15);
obstacle.addImage("obs",obstaceImage);
obstacle.scale = 0.09;
obstacle.velocityX = -2;
obstacle.lifetime =  200
  
obstacleGroup.add(obstacle);
}
}

function Formbanana(){
  
if(frameCount%80 == 0){
banana = createSprite(300,120,15,15);
banana.y = Math.round(random(20,100));
banana.addImage("ban",bananaImage);
banana.scale = 0.07;
banana.velocityX = -2;
banana.lifetime = 200
  
FoodGroup.add(banana);
}
}


