const express = require('express');
const path = require('path');
const fs = require('fs');
const reviews = require('./Develop/db/db.json');
// Helper method for generating unique ids
//const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();


//GET api/notes route to read the db.json file & return saved notes as JSON
// Add a static route for index.html
app.get('/', (req, res) => {
    // `res.sendFile` is Express' way of sending a file
    // `__dirname` is a variable that always returns the directory that your server is running in
    res.sendFile(path.join(__dirname + 'index.html'));
  });
  
  // a route for a GET request that will return the content of our `db.json` file
  app.get('/json', (req, res) => {
    res.json(notes);
  });

//POST /api/notes receives new note to save on the request body and add to the db.json file

//use UUID to create a unique ID for each note

//BONUS to set up a DELETE api/notes/:id 

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);