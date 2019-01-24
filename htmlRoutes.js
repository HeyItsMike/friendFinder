//htmlRoutes will load the html pages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// This is where I am going to put my GET path for /survey which should display my survey page
app.get('/',function(req,res){
       
    res.sendFile('survey.html');

});

//This portion of code will be dedicated to a default, catch-all route that leads to "home.html" which displays the home page.
const express = require('express')
const server = express()

/* route requests for static files to appropriate directory */
server.use('/public', express.static(__dirname + '/static-files-dir'))

/* other routes defined before catch-all */
server.get('/some-route', (req, res) => {
  res.send('ok')
})

/* final catch-all route to index.html defined last */
server.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

const port = 3000;
server.listen(port, function() {
  console.log('server listening on port ' + port)
}) 