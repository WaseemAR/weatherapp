import React from 'react';
import "./weatherCard.css";

const WeatherCard = ({ data, unit }) => {

    return (
        <div className="weather-card">
            <div className="up">
                <div>
                    <p className="city-name">{data.city}</p>
                </div>
                    <p className="weather-desc">{data.weather[0].description}</p>
            </div>
            <div className="down">
                <p className="temperature">{Math.round(data.main.temp)}°{unit === "metric" ? "C" : "F"}</p>
                <div className="details">
                    
                    <div className="row">
                        <span className="label">Wind</span>
                        <span className="value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="row">
                        <span className="label">Humidity</span>
                        <span className="value">{data.main.humidity}%</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;