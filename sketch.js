    var sea , ship , edges ;
    var seaImage ,  ship_sailing;

    function preload(){
      seaImage = loadImage("sea.png");
      ship_sailing = loadAnimation("ship-1.png", "ship-2.png","ship-3.png" , "ship-4.png")
    }

    function setup(){
      createCanvas(400,400);

      background("blue");

      //creating ship
    
    //ship.x = 350;

      //creating ship
      sea = createSprite(400,200);
      sea.addImage(seaImage);
      sea.velocityX =-5;
      sea.scale = 0.3;

      ship = createSprite(130,200,30,30);
    ship.addAnimation("sailing",ship_sailing);
    edges = createEdgeSprites();
      
    ship.scale = 0.3;
    
    }

    function draw()
    {
      background(0);
      sea.velocityX = -3;

      if(sea.x < 0 ) {
        sea.x = sea.width/8;
        }

     // sea.velocityX = -5;

      //console.log(ship.y)

      //ship.collide(sea)

    drawSprites();

  }