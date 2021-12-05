const express = require('express');
const path = require('path');
const fs = require('fs');
const notes  = require('./db/db.json');
// Helper method for generating unique ids
const uuid = require('./public/assets/uuid');

const PORT = process.env.PORT || 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


//function to return notes
function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
  }

//route to GET / notes and return the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
//return the notes.html

//route to GET / notes and return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });


//GET route to return notes.json
app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

//TODO use UUID to create a unique ID for each note

//route to get note by id
  app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
      res.json(result);
  });


//   //create a note
//   function makeNote(note){
//         note = JSON.stringify(note);

//         fs.writeFileSync(path.join("./db/db.json", note, function(err){
//             if (err) {
//                 return console.log(err);
//             } 
//         });
//     }



//POST /api/notes receives new note to save on the request body and add to the db.json file
app.post("/api/notes", function (req, res) {
      // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);
});




//BONUS to set up a DELETE api/notes/:id 

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);