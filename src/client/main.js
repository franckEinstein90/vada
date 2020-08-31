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
  loadWebAssembly('grid.wasm') 
  .then( instance => {
        app.cppFunctions = {
          blockSize: instance.exports._Z9blockSizev, 
          block: instance.exports._Z5blockj
        }
        return app; 
    })
  .then ( app => {
      //init application ui 
      require('./ui/main.js').initAppUi( app ); 
    })
  .catch( err => {
      debugger
  })

});
