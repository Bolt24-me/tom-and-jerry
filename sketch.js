
function preload() {
    //load the images here
   background.loadImage("garden.png")
    jerry.loadImage("jerryFour.png")
    tom.loadImage(tomTwo.png)

}

function setup(){
    background(1000,800);
    background.createSprite(0,0,1000,800)
    tom.createSprite(150,150,900,700)
 jerry.createSprite(100,100,100,700)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
tom.velocityX=5
}
