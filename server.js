//dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

//grab the routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("App listening on PORT " + PORT);
});