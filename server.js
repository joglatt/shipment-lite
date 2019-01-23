var express = require("express"),
// cors = require('cors'),
app = express(),
PORT = process.env.PORT || 8080;


var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());

require(path.join(__dirname, "./controllers/controller.js"))(app);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });

