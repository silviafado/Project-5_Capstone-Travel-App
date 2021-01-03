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
tempData={};

/* Initialize data route with a callback function */
app.get('/data', getData);

/* Callback function to complete GET '/data' */
function getData(req,res){
    res.send(tempData)
};

/* POST route */
app.post('/addEntry', addEntry);

// Async function for API call to geonames.org
async function addEntry(req, res) {
    let cityToProcess = req.body.formDestination;
    const urlGeonames = `http://api.geonames.org/search?username=${apiGeonames}&type=json&name_equals=${cityToProcess}`;
    const geoResult = await fetch(urlGeonames);
    try {
        const apiData = await geoResult.json();
        console.log(apiData);
        geoData={
            "latitude":apiData.geonames[0].lat,
            "longitude":apiData.geonames[0].lng,
            "country":apiData.geonames[0].countryName,
            "city":apiData.geonames[0].name,
        };
        console.log(geoData);
        res.send(geoData);
    } catch (error) {
        console.log('ERROR: Could not get apiData from geonames' + error);
    }
}

/* POST route */
app.post('/addTemp', addTemp);

// Async function for API call to weatherbit.io
async function addTemp(req, res) {
    let dateToProcess = req.body.formDeparture;
    let geoToProcess = req.body.geoData;
    const urlWeatherbit = `http://api.weatherbit.io/v2.0/forecast/daily?&lat=${geoData.latitude}&lon=${geoData.longitude}&key=${apiWeatherbit}`;
    const tempResult = await fetch(urlWeatherbit);
    try {
        const apiTemp = await tempResult.json();
        console.log(apiTemp);
        tempData={
            "date":apiTemp.data[0].valid_date,
            "city":apiTemp.city_name,
            "country":apiTemp.country_code,
            "temp":apiTemp.data[0].temp,
            "max_temp":apiTemp.data[0].max_temp,
            "min_temp":apiTemp.data[0].min_temp,
            "wind_dir":apiTemp.data[0].wind_dir,
            "wind_speed":apiTemp.data[0].wind_spd,
            "precipitation":apiTemp.data[0].pop,
        };
        console.log(tempData);
        res.send(tempData);
    } catch (error) {
        console.log('ERROR: Could not get tempData from weatherbit' + error);
    }
}

/* Initialize pix route with a callback function */
app.get('/pix', getPix);

/* Callback function to complete GET '/pix' */
function getPix(req,res){
    res.send(pix)
};

/* POST route */
app.post('/addPix', addPix);

// Async function for API call to geonames.org
async function addPix(req, res) {
    let city = req.body.formDestination;
    const urlPixabay = `https://pixabay.com/api/?key=${apiPixabay}&q=${city}&image_type=photo&orientation=horizontal&category=travel&pretty=true`;
    const pixResult = await fetch(urlPixabay);
    console.log('Pixabay API: ', response.status, response.statusText, response.ok);
    try {
        return pixResult.json();
    } catch (error) {
        console.log('ERROR: Could not get image from pixabay' + error);
    }
}

