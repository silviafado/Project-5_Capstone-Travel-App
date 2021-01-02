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
geoData={}

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

/* POST route */
app.post('/addEntry', postEntry);

async function postEntry(req, res) {
    try{
        await Promise.all([
            addEntry(),
            addTemp(),
        ]).then ((values) => {
            console.log(values);
        });
        console.log(geoData);
        console.log(tempData);
        const travelData = {
            "latitude":geoData.latitude,
            "longitude":geoData.longitude,
            "country":geoData.country,
            "city":geoData.city,
            "date":tempData.date,
            "temp":tempData.temp,
            "max_temp":tempData.max_temp,
            "min_temp":tempData.min_temp,
            "wind_dir":tempData.wind_dir,
            "wind_speed":tempData.wind_speed,
            "precipitation":tempData.precipitation,
        }
        console.log(travelData);
        res.send(travelData);
    } catch(error){
        console.log('error',error);
    }    
}