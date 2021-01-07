const router = require('express').Router();

// Define fetch in NodeJS
const fetch = require('node-fetch');

// API_KEY for sentiment analysis
const apiGeonames = process.env.API_KEY_GEONAMES;
const apiWeatherbit = process.env.API_KEY_WEATHERBIT;
const apiPixabay = process.env.API_KEY_PIXABAY;

// Initialize GET routes with a callback function
/* GET route for weatherbit.io */
router.get('/data', getData);
/* Callback function to complete GET '/data' */
function getData(req,res){
    res.send(tempData)
};
/* GET route for pixabay.com */
router.get('/pix', getPix);
/* Callback function to complete GET '/pix' */
function getPix(req,res){
    res.send(pixData);
};

/* POST route for geonames.org */
router.post('/addEntry', addEntry);

// Async function for API call to geonames.org
async function addEntry(req, res) {
    let cityToProcess = req.body.formDestination;
    const urlGeonames = `http://api.geonames.org/search?username=${apiGeonames}&type=json&name_equals=${cityToProcess}`;
    const geoResult = await fetch(urlGeonames);
    try {
        const apiData = await geoResult.json();
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

/* POST route for weatherbit.io */
router.post('/addTemp', addTemp);

// Async function for API call to weatherbit.io
async function addTemp(req, res) {
    let dateToProcess = req.body.formDeparture;
    /* Calculate time difference for later use */
    let d = new Date();
    let trip = new Date (dateToProcess); 
    let x = trip.getDate() - d.getDate();
    const urlWeatherbit = `http://api.weatherbit.io/v2.0/forecast/daily?&lat=${geoData.latitude}&lon=${geoData.longitude}&key=${apiWeatherbit}`;
    const tempResult = await fetch(urlWeatherbit);
    try {
        const apiTemp = await tempResult.json();
        tempData={
            "date":apiTemp.data[x].valid_date,
            "city":apiTemp.city_name,
            "country":apiTemp.country_code,
            "temp":apiTemp.data[x].temp,
            "max_temp":apiTemp.data[x].max_temp,
            "min_temp":apiTemp.data[x].min_temp,
            "wind_dir":apiTemp.data[x].wind_dir,
            "wind_speed":apiTemp.data[x].wind_spd,
            "precipitation":apiTemp.data[x].pop,
        };
        console.log(tempData);
        res.send(tempData);
    } catch (error) {
        console.log('ERROR: Could not get tempData from weatherbit' + error);
    }
}

/* POST route for pixabay.com */
router.post('/addPix', addPix);

// Async function for API call to geonames.org
async function addPix(req, res) {
    let city = req.body.formDestination;
    const urlPixabay = `https://pixabay.com/api/?key=${apiPixabay}&q=${city}&image_type=photo&orientation=horizontal&category=travel&pretty=true`;
    const pixResult = await fetch(urlPixabay);
    try {
        const apiPix = await pixResult.json();
        pixData={
            "picture":apiPix.hits[0].webformatURL,
        }
        console.log(pixData);
        res.send(pixData);
    } catch (error) {
        console.log('ERROR: Could not get image from pixabay' + error);
    }
}

module.exports = router