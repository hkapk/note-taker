const express = require('express');
const path = require('path');
const fs = require('fs');
const notes  = require('./Develop/db/notes.json');
// Helper method for generating unique ids
//const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();



//GET route to return notes.json
app.get('/api/notes', (req, res) => {
    res.json(notes);
  });
  // a route for a GET request that will return the content of our `db.json` file


  //   app.get('/api/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
//   });

//POST /api/notes receives new note to save on the request body and add to the db.json file

//use UUID to create a unique ID for each note

//BONUS to set up a DELETE api/notes/:id 

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);