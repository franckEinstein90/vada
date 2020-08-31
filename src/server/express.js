/******************************************************************************
 * 20200000000000000000000000000000
 *
 * ***************************************************************************/
"use strict"

/*****************************************************************************/
const express = require('express')
const path = require('path')
/*****************************************************************************/

const configExpress = function( app ) {
    app.express =  express()
    app.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    app.express.use(express.static(app.metadata.staticFolder))
    return app
}

module.exports = {
   configExpress 
}