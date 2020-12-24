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
projectData={};

/* Initialize all route with a callback function */
app.get('/data', getData);

/* Callback function to complete GET '/all' */
function getData(req,res){
    res.send(projectData)
};

/* POST route */
app.post('/addEntry', addEntry);

// Async function for API call to meaningcloud.com
async function addEntry(req, res) {
    let cityToProcess = req.body.formText;
    const urlGeonames = `https://api.meaningcloud.com/sentiment-2.1?key=${apiGeonames}&url=${cityToProcess}&lang=auto`;
    const apiResult = await fetch(url);
    try {
        const apiData = await apiResult.json();
        console.log(apiData);
        sentimentData={
            "agreement":apiData.agreement,
            "subjectivity":apiData.subjectivity,
            "confidence":apiData.confidence,
            "irony":apiData.irony,
        };
        console.log(sentimentData);
        res.send(sentimentData);
    } catch (error) {
        console.log('ERROR: Could not get apiData' + error);
    }
}
    