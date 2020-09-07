/********************************************************************
 * See https://p5js.org/
 * 
 * ******************************************************************/ 
"use strict"; 
/********************************************************************/ 

const blockNum = 30; 

const Config_P5Js_Canvas = function( app ){
  $( "#approxStart" ).click(function() {
    alert( "Handler for .click() called." );
  });
  const [canvasWidth,canvasHeight]  = [app.cppFunctions.blockSize() * blockNum, 500]; 
  const full = app.cppFunctions.full(); 
  const FPS = 30; //frames per second 
  const refreshInterval = 1000; 

  let last = 0; 
  const sketch = function( p ) {

    const initGrid = function(){
      return Array(canvasHeight).fill(0).map((_,cy) => [0, cy, p.random(canvasWidth), cy] )
    }
    const grid = initGrid(canvasWidth, canvasHeight);
    const updateGrid = ()=>{
      grid.forEach(a=>a[2]=p.random(canvasWidth))
    }
    p.setup = function() {
      p.createCanvas(canvasWidth, canvasHeight);
    }

    p.draw = function() {

      const moveDown = () => {if( cy < canvasHeight ){ cy+=3 } else { lineDirection = 'up' }}
      const moveUp = () => {if( cy > 0 ){ cy-=3 } else { lineDirection = 'down' }}
      p.background(app.p5.container.backgroundColor);
      p.fill(255);
       grid.forEach(l => {
          p.line(...l);
      })
 
      if(p.millis() > last + refreshInterval ){
        last = p.millis(); 
       updateGrid(); 
      }
    }
  }

  app.p5.engine = new p5(sketch, window.document.getElementById(app.p5.container.name)); 
  return app; 
}

module.exports = {
    Config_P5Js_Canvas
}