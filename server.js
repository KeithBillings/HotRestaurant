// Dependencies
// series of npm packages that that will use to give our server useful functionality.
var express = require('express');
var bodyParser = require('body-parser');


// Express Configuration

// notifying node that we are creating and 'express' server

const app = express();

// setting up an initial port.

var PORT = process.env.PORT || 3000;

//setup the express app handle data parsing


app.use(bodyParser.unlencoded({extended: false}));
app.use(bodyParser.json());



// ROUTER
// the below points our server to series of ROUTES files.
// these routes gives our server a MAP of how to respond when user visits or request data from various URLS.


require('./router/apiRouter');
require('./router/htmlRouter');


// Listner 
// this code effectively starts our code 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

