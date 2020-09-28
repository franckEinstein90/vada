"use strict"; 
const divPerimeter = require('./divPerimeter').divPerimeter;

const initAppUi = function( app ){
    let containerPerimeter = divPerimeter(`#visualContainer`); 
    require('./canvas.js').Config_P5Js_Canvas( app, {
        containerPerimeter
    }); 
    return app; 
}

module.exports = {
    initAppUi
}