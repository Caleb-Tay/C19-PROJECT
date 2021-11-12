var gamestate = "play";

var boy , boyImg;
var water , waterImg;
var buoy , buoyImg , buoyGroup ;


var score = 0 ;

function preload(){
  boyImg = loadImage('boy.png');
  waterImg = loadImage('water_5.gif');
  buoyImg = loadImage('buoy.png');
 
  
}

function setup() {
  createCanvas(800, 800);

  buoyGroup = new Group;

  water = createSprite(400,400,800,800);
  water.addImage('water',waterImg);
  water.scale = 3
  water.velocityX = -7

  boy = createSprite(80,400);
  boy.addImage('boy',boyImg);
  boy.scale = 0.25
  
  
  }


function draw() {
  background(200);
  if(gamestate === 'play'){
    

    fill("black")
    textSize(20);
    text('Score : '+ Math.round(score),600,40);
    
    
    if(water.x < 0){
      water.x = 400;
    }
  
    if(frameCount % 50 === 0 ){
      spawnObstacles();
    }

    if(buoyGroup.isTouching(boy)){
      gamestate = "end";
    }

    boy.y = World.mouseY;

    score = score+frameCount/100
    //console.log(score);

    drawSprites();
  }
  
  if(gamestate === "end"){
    

    background("black");
    fill('white');
    textSize(50);
    text('Game Over',100,400);

    fill('white');
    textSize(50);
    text("Final Score : " + Math.round(score),100,450);

    

    
    }
  }
  


  

  
function spawnObstacles(){
  buoy = createSprite(850,Math.round(random(100,740)),50,50);
  buoy.addImage('buoy',buoyImg);
  buoy.velocityX = -7
  buoy.scale = 0.5

  buoy.lifetime = 300

  buoyGroup.add(buoy);
}
  

