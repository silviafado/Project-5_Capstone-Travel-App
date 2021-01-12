# CAPSTONE: Travel App

# Description

The aim of the project is to create a Travel App that uses API calls and Webpack to request asynchronously user data to dynamically update the UI. The project uses local server running on Node and Express Enviornment.


# Project Instructions

The goal of this project:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Request weather forecast and images from at least 3 API: geonames.org, weatherbit.io and pixabay.com
- Jest test
- HTML & CSS customised with responsive design

## Setting up the APIs

- Set an API key in: http://geonames.org, http://weatherbit.io and https://pixabay.com.
- Environment Variables: declare our API keys with .env file so they are private, the API calls are made in the server side also for more privacity. 


# Instructions to use

- Enter your trip information: Origin, Destination, Departure Date and Return Date and the forecast for the arrival date and an image of the city will be printed in the app. Press the Search button to make your entry.


# Run the application

1. Install node.js

2. Set the enviornment in your computer

3. Install npm and the dependencies
```
npm install
```
4. Run build-prod to create the dist folder to see the production mode in the browser. 
```
npm run build-prod
```
5. Start the server
```
npm start
````
6. Open Google Chrome and go to localhost link: http://localhost:8001/
