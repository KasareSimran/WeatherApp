// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import './WeatherStyle.css'
import search_icon from '../assets/search.svg';
import cloudy_icon from '../assets/cloudy.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import sun_icon from '../assets/sun.png';
import wind_icon from '../assets/wind.png';
function Weather(){

    const inputRef =useRef();

    const [weatherData,setWeatherData]=useState(false)

    const allIcon={
        "01d":sun_icon,
        "01n":sun_icon,
        "02d":cloudy_icon,
        "02n":cloudy_icon,
        "03d":cloudy_icon,
        "03n":cloudy_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,
    }
    const search =async(city)=>{
        if(city===""){
            alert("Enter City Name");
            return;
        }
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=matric&appid=5b658fcfa0dac315ea655fda7c296848`

            const response=await fetch(url);
            const data = await response.json();
            //if data is wrong
            if(!response.ok){
                alert(data.message);
                return;
            }
            console.log(data);
            const icon=allIcon[data.weather[0].icon] || sun_icon;
            setWeatherData({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon
            })
        // eslint-disable-next-line no-unused-vars
        }catch (error){
            setWeatherData(false);
            console.error("Error in fetching weather data.")
        }
    }
    useEffect(()=>{
        search("london");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
    <div className="main-container">
        <div className="search-bar">
            <input  ref={inputRef} type="text" placeholder="Search"/>
            <img className='search'src={search_icon} onClick={()=>search(inputRef.current.value)}/>
        </div>

        {/* check of data is correct then display else not  */}
        {weatherData?<><img src={weatherData.icon} className="weather-icon"/>
        <p className="temperature">{weatherData.temperature}°c</p>
        <p className="location">{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} className="info-icon"/>
                <div>
                    <p>{weatherData.humidity}</p>
                    <span>Humidity</span>
                </div>
                </div>  
                <div className="col">
                <img src={wind_icon} className="info-icon"/>
                <div>
                    <p>{weatherData.windSpeed} Km/h</p>
                    <span>Wind Speed</span>
                </div>
                </div>   
        </div></>:<></>}
        
    </div>
   );
}
export default Weather