// This is the main starting point for the app
// We need to require in app dependencies before starting
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// tells the server that incoming data should use JSON
app.use(bodyParser.json());
// tells express where to serve our frontend from
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// this is going to get our backend server up and running
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
