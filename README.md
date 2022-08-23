# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### APPROACH

Took the help of a third party API for fetching city name and it's lat & long from GeoDB Cities [RapidoApi](https://rapidapi.com/wirefreethought/api/geodb-cities/), as per the requirement of Openweathermap API, we will need the lattitude and longitude of the city.

this API provides the list of cities and are populated into a reactjs library for autosearch dropdown [react-select-async-paginate](https://www.npmjs.com/package/react-select-async-paginate)

with the help of [openweathermap](https://openweathermap.org/current), selected city's weather forecast is displayed in to components based on the selected temperature type (F/C) 

1. today's weather in a card component 
2. timeframes followed by the next 7 days are displayed in a unordered list view component
3. a checkbox for toggling between F and C

**Note: an `.env` file is required which will have the third party API keys and its value.**


### Time Taken to complete

1. It took me 1 and Half hour to visualize and complete the task, as the inital setup of the app took me to a setup issue which took me half hour to resolve it, as my PC ran to a Nodejs version and Path variable setup issue.

2. Another point was with selecting the API for getting lat & long by typing the city name. There were many API's, but GeoDB cities caught my eye, as it looked easy to get lat and long by name of the city, another interesting thing about it was we can get the cities having a minimum population set. we can get the cities only having so and so no of population, this was one thing that was cool about using the API.

3. The forecast List of 7 frameworks is not working, According to the Openweather API, forcast list for daily 16days is not working as it throws and 401 error which is invalid API key error.
to url is [16days](https://api.openweathermap.org/data/2.5/forecast/daily?lat=41.03508&lon=28.983311&cnt=7&appid={API_KEY}). Therfor to overcome this for now i have used the 7 records from the list and shown it for the forecast frame list of 7 days.