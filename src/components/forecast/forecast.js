import React from 'react';
import './forecast.css';

const _DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data, unit }) => {
    const dayOfAWeek = new Date().getDay();
    //console.log("dayOfAWeek: ", dayOfAWeek);
    const forecastingDays = _DAYS.slice(dayOfAWeek, _DAYS.length).concat(_DAYS.slice(0, dayOfAWeek));
    //console.log("forecastingDays: ", forecastingDays);
    //console.log("Data: ", JSON.stringify(data.list));

    return (
        <>
            {data.list.splice(0, 7).map((item, i) => (
                <ul className="forcast-frames" key={i}>
                    <li>
                        <div className="week-day-title">
                            <label className="week-day">{forecastingDays[i]}</label>
                            <label className="week-day-desc">{item.weather[0].description}</label>
                        </div>
                        <ul className='frame-detail'>
                            <li>
                                <label className='bold-txt'>Wind speed:</label>
                                <label className='right-txt'>{item.wind.speed} m/s</label>
                            </li>
                            <li>
                                <label className='bold-txt'>Humidity:</label>
                                <label className='right-txt'>{item.main.humidity}%</label>
                            </li>
                            <li>
                                <label className='bold-txt'>Temp Min:</label>
                                <label className='right-txt'>{item.main.temp_min}°{unit === "metric" ? "C" : "F"}</label>
                            </li>
                            <li>
                                <label className='bold-txt'>Temp Max:</label>
                                <label className='right-txt'>{item.main.temp_max}°{unit === "metric" ? "C" : "F"}</label>
                            </li>
                        </ul>
                    </li>
                </ul>
            ))}
        </>
    );
}

export default Forecast;