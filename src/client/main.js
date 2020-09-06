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
