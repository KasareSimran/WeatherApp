// eslint-disable-next-line no-unused-vars
import React from "react";
import './Weather.css'
import search_icon from '../assets/search.svg';
import cloudy_icon from '../assets/cloudy.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import sun_icon from '../assets/sun.png';
import wind_icon from '../assets/wind.png';
function Weather(){

    return(<>
    <div className="main-container">
        <div className="search-bar">
            <input type="text" placeholder="Search"/>
            <img className='search'src={search_icon} />
        </div>
        <img src={sun_icon} className="weather-icon"/>
        <p className="temperature">16°c</p>
        <p className="location">London</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} className="info-icon"/>
                <div>
                    <p>91 %</p>
                    <span>Humidity</span>
                </div>
                </div>  
                <div className="col">
                <img src={wind_icon} className="info-icon"/>
                <div>
                    <p>3.6 km/hr</p>
                    <span>Wind Speed</span>
                </div>
                </div>   
        </div>
    </div>
    </>);
}
export default Weather