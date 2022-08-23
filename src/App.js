import { useEffect, useState } from 'react';
import Search from './components/search/search';
import CurrentWeather from './components/weatherCard/weatherCard';
import Forecast from './components/forecast/forecast';
import './App.css';
import { OPEN_WEATHER_KEY, OPEN_WEATHER_URL } from './apiConstants';
import ToggleSwitch from './components/toggleSwitch/toggleSwitch';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [checked, setChecked] = useState(false);
  const [tempUnit, setTempUnit] = useState("metric");
  const [cityCoordinates, setCityCoordinates] = useState("");

  const handleOnSearchChange = (searchData) => {
    setCityCoordinates(searchData);
    const [lat, lon] = searchData.value.split(" ");
    console.log("tempUnit: ", tempUnit);
    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=${tempUnit}`
    );
    const forecastFetch = fetch(
      `${OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=${tempUnit}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forcastResponse });
    })
    .catch(console.log);
  }

  const handleChange = (val) => {
    if (val) {
      setTempUnit("imperial");
    } else {
      setTempUnit("metric");
    }
  }

  useEffect(() => {
    console.log("cityCoordinates: ", cityCoordinates)
  }, [cityCoordinates])

  useEffect(() => {
    console.log(tempUnit, "cityCoordinates: ", cityCoordinates);
    if (cityCoordinates !== "") {
      handleOnSearchChange(cityCoordinates);
    }
  }, [tempUnit])

  return (
    <div className="container">
      <h1 className='center'>Weather App</h1>
      <Search onSearchChange={handleOnSearchChange} />
      <ToggleSwitch ischecked={checked} onChange={handleChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} unit={tempUnit}/>}
      {forecast && <Forecast data={forecast} unit={tempUnit}/>}

      <div className='note'>
        <span>Note: *</span>
        <span >By default temperature is calculated in Celcius</span>
      </div>
    </div>
  );
}

export default App;
