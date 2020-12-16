# Weather-Journal App Project


# Description:

This project creates an asynchronous web app that uses a web API and user data to dynamically update the UI. Local server running on Node and Express Enviornment.


# Requirements:

This project runs on a local server that should be initiallised through express. It uses Node. 

An API key is requested through OpenWeatherMap.org.

The ‘cors’ package should be installed and the instance of the app should be setup to use cors().The body-parser package should be installed and included in the project.

The API Key variable is passed as a parameter to fetch().

Data is successfully returned from the external API.

There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object.

There should be an asynchronous function to fetch the data from the app endpoint.

The server side function should create a new entry in the apps endpoint consisting of the data received from the client side POST.


# Instructions to use:

Enter a zip code and your feelings of the day in the app spaceholders. Press the Generate button to make your entry. A list of parameters will be returned and printed in the app.