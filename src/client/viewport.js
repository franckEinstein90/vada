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