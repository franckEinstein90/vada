"use strict"; 

const moment = require('moment'); // require



$(document).ready(function(){

  const lastVisit = localStorage.getItem('lastVisit', moment().format()); 
  const timeStamp = moment().format(); 
  localStorage.setItem('lastVisit', timeStamp); 

  const app = {
    meta : {
          name: 'vada', 
          side: 'client'
    }, 
    user : {
      lastVisit
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
