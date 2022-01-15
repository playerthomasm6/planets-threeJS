// DEPENDECIES
// =============================================================
var fs = require('fs');
const { request } = require('http');
var data = fs.readFileSync('./data/db.json');
var notesData = JSON.parse(data);
var path = require('path');
var notesArray = require("../data/db.json")

// =============================================================



// ROUTING
// =============================================================
module.exports = function (app) {

    //Displays all Notes in JSON file
    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, '../data', 'db.json'));
        console.log("success!!!!")
    });


    app.post("/api/notes", function (req, res) {
        let note = req.body;
        let newID = notesArray.length;
        note.id = newID;

        notesArray.push(note)

        fs.writeFile('./data/db.json', JSON.stringify
            (notesArray), (err) => err ? console.error(err) : console.log("success"))
        res.send("completed!")
    }
    );

    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params.id)
        var selection = parseInt(req.params.id);
        console.log(notesArray[selection].id, "line 41");
        notesArray = notesArray.filter(function(x) {
            if (x.id !== selection) {
                return true;
            }
        })
        console.log(notesArray, "line 46 bro");
        fs.writeFile('./data/db.json', JSON.stringify
            (notesArray), (err) => err ? console.error(err) : console.log("success"))
        res.send("completed!")
    });

}
