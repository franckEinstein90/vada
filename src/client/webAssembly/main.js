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