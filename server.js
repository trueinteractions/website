var compression = require('compression');
var path = require('path');
var express   = require('express');
var app       = express();
var port      = Number(process.env.PORT || 5000);

// Compress all possible responses
app.use(compression());
app.use(express.static(path.join(__dirname, '/public/')));


app.listen(port, function(err) {
  if (err) {
    throw err;
  }

  console.log("Running on http://localhost:" + port);
});
