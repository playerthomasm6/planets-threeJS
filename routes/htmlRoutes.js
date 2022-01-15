// DEPENDECIES
// =============================================================
var path = require("path");

// =============================================================



// ROUTING
// =============================================================

module.exports = function(app) {
// HTML GET Requests

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};