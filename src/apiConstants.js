const { 
  REACT_APP_RAPID_API_KEY,
  REACT_APP_RAPID_API_HOST,
  REACT_APP_OPEN_WEATHER_KEY 
} = process.env;

export const locOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": REACT_APP_RAPID_API_HOST,
    },
};
export const LOC_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5";
export const OPEN_WEATHER_KEY = REACT_APP_OPEN_WEATHER_KEY;