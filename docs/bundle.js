(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"; 

const Viewport = function( options ){
    this.width = options.width;
    this.height = options.height; 

    this.area = this.width * this.height; 
    this.diagonal = Math.sqrt((this.width*this.width) + (this.height*this.height));  
    this.orientation = this.height > this.width ? 'portrait' : 'landscape'; 
}


module.exports = {
    Viewport
}
},{}],2:[function(require,module,exports){
"use strict"; 




$(document).ready(function(){

  const app = {
    meta : {
          name: 'vada', 
          side: 'client'
    }, 

    p5: {
      container : {
        name : 'p5Container', 
        backgroundColor : 153
      }
    }
  }

  //Loading functions written in c++
  require('./webAssembly/main').loadWebAssemblyFunctions( app ) 
  .then ( app => {
      //init application ui 
      require('./ui/main.js').initAppUi( app ); 
    })
  .catch( err => {
      debugger
  })

});

},{"./ui/main.js":5,"./webAssembly/main":6}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
/*****************************************************************************/
"use strict"
/*****************************************************************************/
const Viewport = require('../Viewport').Viewport; 

const divPerimeter = function(divID){
    let returnObject =    {
        height: $( divID ).height(), 
        width:  $( divID ).width()
    }; 
    return new Viewport(returnObject); 
}

module.exports = {
    divPerimeter
}
},{"../Viewport":1}],5:[function(require,module,exports){
"use strict"; 
const divPerimeter = require('./divPerimeter').divPerimeter;

const initAppUi = function( app ){
    let containerPerimeter = divPerimeter(`#sideBar`); 
    require('./canvas.js').Config_P5Js_Canvas( app ); 
    return app; 
}

module.exports = {
    initAppUi
}
},{"./canvas.js":3,"./divPerimeter":4}],6:[function(require,module,exports){
"use strict"; 
const myHeaders = new Headers();

const myRequest = fileName => new Request(fileName, {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});


const loadWebAssembly = function(fileName) {

  return fetch( myRequest( fileName ) )
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {
      return new WebAssembly.Instance(module) })
    .catch(err => {
      debugger
    })

};

const loadWebAssemblyFunctions = function ( app ){
    return loadWebAssembly('grid.wasm') 
    .then( instance => {
          app.cppFunctions = {
            blockSize: instance.exports._Z9blockSizev, 
            block: instance.exports._Z5blockj, 
            full: instance.exports._Z4fullv
          }
          return app; 
      })
}

module.exports = {
    loadWebAssemblyFunctions
}
},{}]},{},[2]);
