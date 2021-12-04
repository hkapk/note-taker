const express = require('express');
const path = require('path');
const fs = require('fs');
const reviews = require('./Develop/db/db.json');
// Helper method for generating unique ids
//const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();


//GET api/notes route to read the db.json file & return saved notes as JSON

//POST /api/notes receives new note to save on the request body and add to the db.json file

//use UUID to create a unique ID for each note

//BONUS to set up a DELETE api/notes/:id 

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);