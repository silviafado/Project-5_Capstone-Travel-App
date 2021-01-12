const router = require('express').Router();

const server = require ('./router')

// Define fetch in NodeJS
const fetch = require('node-fetch');

// API_KEY for sentiment analysis
const apiGeonames = process.env.API_KEY_GEONAMES;
const apiWeatherbit = process.env.API_KEY_WEATHERBIT;
const apiPixabay = process.env.API_KEY_PIXABAY;

const travelData = [];

// Initialize GET route with a callback function
router.get('/data', getData);
/* Callback function to complete GET '/data' */
function getData(req,res){
    res.send(travelData)
};

// POST route
router.post('/addEntry', addEntry);

// Async function for API call to geonames.org
async function addEntry(req, res) {
    let data = {};
    const cityToProcess = req.body.formDestination;
    /* Calculate time difference for later use */
    let d = new Date();
    let depart = new Date (req.body.formDeparture); 
    let retur = new Date (req.body.formReturn);
    let x = depart.getDate() - d.getDate();
    let y = retur.getDate() - depart.getDate();
    /* Promise to request geonames */
    const geoPromise = new Promise ( (resolve, reject) => {
        fetchGeonames(cityToProcess).then(function(response){
            resolve(response);
        });
    });
    /* Promise to request weatherbit */
    const weatherPromise = new Promise ( (resolve, reject) => {
        fetchWeather(data.latitude, data.longitude).then(function(response){
            resolve(response);
        });
    });
    /* Promise to request pixabay */
    const pixPromise = new Promise ( (resolve, reject) => {
        fetchPicture(cityToProcess).then(function(response){
            resolve(response);
        });
    });

    Promise.all([fetchGeonames, fetchWeather, fetchPicture]).then(function(results) {
        

        const apiTemp = results[x];
        const apiPix = results[1];

        data.latitude = geoData.latitude;
        data.longitude = apiData.geonames[0].lng;
        data.country = apiData.geonames[0].countryName;
        data.city = apiData.geonames[0].name;
        data.date = apiTemp.data[x].valid_date;
        data.temp = apiTemp.data[x].temp;
        data.max_temp = apiTemp.data[x].max_temp;
        data.min_temp = apiTemp.data[x].min_temp;
        data.wind_dir = apiTemp.data[x].wind_dir;
        data.wind_speed = apiTemp.data[x].wind_spd;
        data.precipitation = apiTemp.data[x].pop;
        data.duration = y;
        data.picture = apiPix.hits[0].webformatURL;
        
        console.log(data); 
        travelData.push(data);
        res.send('travelData added successfully!')
    });
};   

async function fetchGeonames(cityToProcess, res) {
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
        return geoData;
    } catch (error) {
        console.log('ERROR: Could not get apiData from geonames' + error);
    }
}

// Async function for API call to weatherbit.io
const fetchWeather = async (latitude, longitude) => {
    const urlWeatherbit = `http://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${apiWeatherbit}`;
    const tempResult = await fetch(urlWeatherbit);
    try {
        const apiTemp = await tempResult.json();
        console.log(apiTemp);
        return apiTemp;
    } catch (error) {
        console.log('ERROR: Could not get tempData from weatherbit' + error);
    }
}


// Async function for API call to geonames.org
const fetchPicture = async (city) => {
    const urlPixabay = `https://pixabay.com/api/?key=${apiPixabay}&q=${city}&image_type=photo&orientation=horizontal&category=travel`;
    const pixResult = await fetch(urlPixabay);
    try {
        const apiPix = await pixResult.json();
        return apiPix;
    } catch (error) {
        console.log('ERROR: Could not get image from pixabay' + error);
    }
}

module.exports = router