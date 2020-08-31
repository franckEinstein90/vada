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