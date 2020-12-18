/* Setup empty JS object to act as endpoint for all routes */
projectData={};

/* Express to run server and routes */
const express=require('express');

/* Start up an instance of app */
const app=express();

/* Dependencies */
/* Middleware */

/* Here we are configuring express to use body-parser as middle-ware */
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Cors for cross origin allowance */
const cors=require('cors');
const { request, json } = require('express');
app.use(cors());

/* Initialize the main project folder */
app.use(express.static('src'));

/* Spin up the server */
const port=8000;

const server=app.listen(port,listening);

/* Callback to debug */
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};

/* Initialize all route with a callback function */
app.get('/all', getData);

/* Callback function to complete GET '/all' */
function getData(req,res){
    res.send(projectData)
};

/* POST route */
app.post('/addEntry', addEntry);

function addEntry(request, response) {
    projectData = {
    date: request.body.date,
    location: request.body.location,
    country: request.body.country,
    temp: request.body.temp,
    content: request.body.content
    };
    response.send({ message: "Post received" });
};
    