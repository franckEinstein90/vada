"use strict";
const path = require('path') ; 

const app = {
  metadata : {
    name : 'vada', 
    root :  __dirname, 
    staticFolder:  path.join(__dirname, 'docs')
  }
} 
require('./src/server/express.js').configExpress(app); 
app.express.listen(3000, () => console.log('Example app listening on port 5000!'))
