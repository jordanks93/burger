// LOAD DEPENDENCIES 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allows Override of POST method in index.handlebars 
app.use(methodOverride('_method'));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// allows handlebars to access image file
app.use(express.static('public/assets/img'));

// Import routes and give the server access
var routes = require("../controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});