// This is the main starting point for the app
// We need to require in app dependencies before starting
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

// tells the server that incoming data should use JSON
app.use(bodyParser.json());

// this is going to get our backend server up and running
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
