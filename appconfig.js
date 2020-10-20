/**
 * Config to define the app object which is consumed throughot application to provide resources.
 */
var express = require('express');
const bodyParser = require("body-parser");
var app=express();

app.listen(3000, () =>{
    //console.log('App running in port 3000');
})
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json())
  //app.use('/user',router,function(req, res, next) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
        next();
    });

module.exports=app;