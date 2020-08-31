/********************************************************************
 * See https://p5js.org/
 * 
 * ******************************************************************/ 
"use strict"; 
/********************************************************************/ 

const Config_P5Js_Canvas = function( app ){

    const sketch = function(p) {
        let x = 100;
        let y = 100;
      
        p.setup = function() {
          p.createCanvas(700, 410);
        };
      
        p.draw = function() {
          p.background(app.p5.container.backgroundColor);
          p.fill(255);
          p.rect(x, y, 50, 50);
        };
    };

    app.p5.engine = new p5(sketch, window.document.getElementById(app.p5.container.name)); 
    return app; 
}

module.exports = {
    Config_P5Js_Canvas
}