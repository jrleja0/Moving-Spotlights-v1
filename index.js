

// Github hosted images //
// RED TILE //
var redTileImage = new Image;
var redTile = document.createElement("canvas");
redTile.style.visibility = "hidden";
var ctxR = redTile.getContext("2d");
var srcR = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Red%20Tile.jpeg";

redTileImage.crossOrigin = "Anonymous";

redTileImage.onload = function() {
    redTile.width = redTileImage.width;
    redTile.height = redTileImage.height;
    ctxR.drawImage(redTileImage, 0, 0);
}

redTileImage.src = srcR;

// BLUE TILE //
var blueTileImage = new Image;
var blueTile = document.createElement("canvas");
blueTile.style.visibility = "hidden";
var ctxB = blueTile.getContext("2d");
var srcB = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Blue%20Tile.jpeg";

blueTileImage.crossOrigin = "Anonymous";

blueTileImage.onload = function() {
    blueTile.width = blueTileImage.width;
    blueTile.height = blueTileImage.height;
    ctxB.drawImage(blueTileImage, 0, 0);
}

blueTileImage.src = srcB;

// GREEN TILE //
var greenTileImage = new Image;
var greenTile = document.createElement("canvas");
greenTile.style.visibility = "hidden";
var ctxG = greenTile.getContext("2d");
var srcG = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Green%20Tile.jpeg";

greenTileImage.crossOrigin = "Anonymous";

greenTileImage.onload = function() {
    greenTile.width = greenTileImage.width;
    greenTile.height = greenTileImage.height;
    ctxG.drawImage(greenTileImage, 0, 0);
}

greenTileImage.src = srcG;

// YELLOW TILE //
var yellowTileImage = new Image;
var yellowTile = document.createElement("canvas");
yellowTile.style.visibility = "hidden";
var ctxY = yellowTile.getContext("2d");
var srcY = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Yellow%20Tile.jpeg";

yellowTileImage.crossOrigin = "Anonymous";

yellowTileImage.onload = function() {
    yellowTile.width = yellowTileImage.width;
    yellowTile.height = yellowTileImage.height;
    ctxY.drawImage(yellowTileImage, 0, 0);
}

yellowTileImage.src = srcY;
/////////////////////////////////
// END of Github hosted images //


//var mainDiv = document.getElementById('mainDiv');
//var ballCanvas = document.getElementById("ballCanvas");
var mainCanvas = document.getElementById('mainCanvas');


var start = function() {

  
  var ctx = mainCanvas.getContext("2d");
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  
  function Ball(x, y, r) {
    this.x = x;  
    this.y = y;    
    this.r = r;
    this.draw = drawBall;    
  }  
    
  function drawBall(tileColor, speed) {
      //animation    
      this.x += speed;
    
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, (2*Math.PI));
      ctx.closePath();                 
      var pattern = ctx.createPattern(tileColor, "no-repeat");
      ctx.fillStyle = pattern;
      ctx.fill();
  } 
  
  function Background() {
      this.w = cw;
      this.h = ch; 
      this.x = 0; 
      this.y = 0;
      this.color = "#5e3272";
      this.draw = drawBackground   
  }
  
  function drawBackground() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);   
  }

    
  var backgroundG = new Background();  
  var ballG1 = new Ball(-75, 105, 70);  // bottom y = 175
  var ballY1 = new Ball(-40, 140, 35);
  var ballG2 = new Ball(-50, 130, 45);
  var ballB2 = new Ball(-75, 105, 70);
  
  var ballB1 = new Ball(-50, 255, 45);  // bottom y = 300
  var ballR1 = new Ball(-85, 220, 80);
  var ballY2 = new Ball(-65, 240, 60);  
  var ballR2 = new Ball(-40, 265, 35);
 
  
  function draw() {       
        ctx.save();
        ctx.clearRect(0, 0, cw, ch);
        // console.log(ballG1.x, "&", ballR1.x);
        //draw
        backgroundG.draw();
        
        // top row
        if (ballG2.x > 170)
          ballB2.draw(blueTile, .5);  //.6    
        if (ballY1.x > 250)
          ballG2.draw(greenTile, 1.5);  //1.3
        if (ballG1.x > 250)
          ballY1.draw(yellowTile, 1);  //.9               
        ballG1.draw(greenTile, 1);
        
        // bottom row        
        if (ballY2.x > 150)
          ballR2.draw(redTile, 1);  //.7      
        if (ballR1.x > 300)
          ballY2.draw(yellowTile, 1.5)  //.8
        if (ballB1.x > 200)
          ballR1.draw(redTile, .5);
        ballB1.draw(blueTile, .5);    //.6
      
        // resetting animation to beginning (with some staggering)
        
        if (ballG1.x >= 1880) {    // 1750
          ballG1.x = -75;          
          //ballB1.x = -50;        
          ballY1.x = -40;
          //ballR1.x = -85; 
          ballG2.x = -50;
          ballB2.x = -75;
          //ballY2.x = -65;
          //ballR2.x = -40;
        }
        if (ballB1.x >= 980) {  //  if (ballR1.x >= 800) // 750
          ballB1.x = -50;
          ballR1.x = -85;              
          //ballB2.x = -75;
          ballY2.x = -65;
          ballR2.x = -40;
        }
              
        ctx.restore();
  }
  
  var animateInterval = setInterval(draw, 1);  // 1 = speed of animation
    
}

  // window.addEventListener('load', function(event) {
    // start();
  // });