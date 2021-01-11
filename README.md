# CAPSTONE: Travel App

# Description:

This is the final project for the Udacity course Front End Web Developer. The aim of the project is to create a Travel App that uses API calls and Webpack to request asynchronously user data to dynamically update the UI. Local server running on Node and Express Enviornment.


# Project Instructions

The goal of this project:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Request weather forecast and images from at least 3 API: geonames.org, weatherbit.io and pixabay.com.

## Getting started

Followed the steps from the course to install node and express enviornment and webpack, but don't add Service Workers just yet.

## Setting up the APIs

- Set an API key in: http://geonames.org, http://weatherbit.io and https://pixabay.com.
- Environment Variables: declare our API keys. Private keys, visible publicly are never a good thing, we are using enviornment variables that only belong to our system and won't be visible in Github when pushing our project. 

### Setting up Environment Variables

- [ ] Install the dotenv package with npm ```npm install dotenv```. 
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/server.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it:
```
// API_KEY for each API
const apiKey = process.env.API_KEY;
```

### Using the APIs

Set up a call requset for each API, post the responses in a local server and have the UI updated with the info. The API call starting point will be the Destination city and Departure date that the user introduce in the form, and will be called with an eventListener when clicking the Search button.


## Testing using Jest Framework

Jest is a framework for testing JavaScript projects, provides us the ability to create, and run unit tests. We will write tests for desired functions defined in the client and server directories. The tests will check if the functions are behaving expectedly when provided an input. 

## Service Workers

"Offline Functionality": The project must have set up service workers in webpack.
Go to the webpack config file, and add the setup for service workers. Test that the site should be available even when you stop your local server.


# Instructions to use:

Enter your trip information: Origin, Destination, Departure Date and Return Date and the forecast for the arrival date and an image of the city will be printed in the app. Press the Search button to make your entry.