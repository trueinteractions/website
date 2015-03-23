var compression = require('compression');
var request   = require('request');
var express   = require('express');
var app       = express();
var url       = require('url');
var fs        = require('fs');
var port      = Number(process.env.PORT || 5000);
var child_process = require('child_process');


// Compress all possible responses
app.use(compression());
app.use(express.static(__dirname + '/public/'));


var server = app.listen(port, function(err) {
  if (err) throw err;
  console.log("Running on http://localhost:" + port);
});