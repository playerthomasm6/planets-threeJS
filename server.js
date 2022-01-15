// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var path = require('path');
var fs = require("fs");

// =============================================================
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
console.log(__dirname);

// =============================================================
// ROUTER
// =============================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// let rawdata = fs.readFile("data/db.json", (err, data) => {
//   if (err) throw err;
//   let db = JSON.parse(data)
//   console.log(db);
// });

