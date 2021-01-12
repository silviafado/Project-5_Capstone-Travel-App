//Require .env file for API_KEYs
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

//Express server
const express = require('express');
const app = express();
app.use(express.static('dist'));

// Body-parser middleware
const bodyParser = require('body-parser');
/* to use json */
app.use(bodyParser.json());
/* to use url encoded values */
app.use(bodyParser.urlencoded({extended: true}));

//CORS middleware
var cors = require('cors');
app.use(cors());

// Define fetch in NodeJS
const fetch = require('node-fetch');

// Designates what port the app will listen to for incoming requests
app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
});

// Require app.js with api routes
const routes = require('./app');
app.use(routes);

module.exports = app