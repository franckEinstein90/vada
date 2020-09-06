/********************************************************************
 * See https://p5js.org/
 * 
 * ******************************************************************/ 
"use strict"; 
/********************************************************************/ 

const Config_P5Js_Canvas = function( app ){

  const blockNum = 30; 
  const [canvasWidth,canvasHeight]  = [app.cppFunctions.blockSize() * blockNum, 500]; 
  const full = app.cppFunctions.full();  
  const sketch = function(p) {
        let x = 100;
        let y = 100;
      
        p.setup = function() {
          p.createCanvas(canvasWidth, canvasHeight);
        };

        p.draw = function() {
          p.background(app.p5.container.backgroundColor);
          p.fill(255);
          for(let y=0;y<canvasHeight;y+=3){
            p.line(0, y, canvasWidth, y);
          }
        };
    };

    app.p5.engine = new p5(sketch, window.document.getElementById(app.p5.container.name)); 
    return app; 
}

module.exports = {
    Config_P5Js_Canvas
}