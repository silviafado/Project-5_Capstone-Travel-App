//Require .env file for API_KEYs
const dotenv = require('dotenv');
dotenv.config();

// API_KEY for sentiment analysis
const apiGeonames = process.env.API_KEY_GEONAMES;
const apiWeatherbit = process.env.API_KEY_WEATHERBIT;
const apiPixabay = process.env.API_KEY_PIXABAY;

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

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
});

/* Setup empty JS object to act as endpoint for all routes */
geoData={};

/* Initialize all route with a callback function */
app.get('/data', getData);

/* Callback function to complete GET '/data' */
function getData(req,res){
    res.send(geoData)
};

/* POST route */
app.post('/addEntry', addEntry);

// Async function for API call to geonames.org
async function addEntry(req, res) {
    let cityToProcess = req.body.formDestination;
    const urlGeonames = `http://api.geonames.org/search?username=${apiGeonames}&type=json&name=${cityToProcess}`;
    const geoResult = await fetch(urlGeonames);
    try {
        const apiData = await geoResult.json();
        console.log(apiData);
        geoData={
            "latitude":apiData.lat,
            "longitude":apiData.lng,
            "country":apiData.countryName,
            "city":apiData.name,
        };
        console.log(geoData);
        res.send(geoData);
    } catch (error) {
        console.log('ERROR: Could not get apiData' + error);
    }
}

/* Async function for API call to weatherbit.io
async function addTemp(req, res) {
    let dateToProcess = req.body.formDeparture;
    let geoToProcess = req.body.geoData;
    const urlGeonames = `http://api.geonames.org/postalCodeSearchJSON?postalcode=${cityToProcess}&maxRows=10&username=silviafado`;
    const geoResult = await fetch(urlGeonames);
    try {
        const apiData = await geoResult.json();
        console.log(apiData);
        geoData={
            "latitude":apiData.latitude,
            "longitude":apiData.longitude,
            "country":apiData.country,
        };
        console.log(geoData);
        res.send(geoData);
    } catch (error) {
        console.log('ERROR: Could not get apiData' + error);
    }
}*/
    