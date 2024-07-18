import React, { useEffect, useState } from "react";
import axios from 'axios';
import Forecast from "./Forecast";
const Weather = ({
  monthsName,
  daysName,
  dates,
  getMonth,
  getDay,
  Time, 
}) => {

  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [city, setcity] = useState("");
  const [cityData, setcityData] = useState(null);
  let APIKEY = `f114287cc76ec2d9ec15a4a3c6a763b6`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    }, function(error){
      setLocation({ latitude:27.216982, longitude:77.489517 });
    });
  }, []);

  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`)
       .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [location]);

  const loadData = (event) => {
   
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
        .then(response => {
          setcityData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  }

  return (
    <>
      <div className="main-container">
        {weatherData === null ? (
          <div className="inner-container">
            <div className="flex flex-col items-center justify-center">
              <img
                className=" text-transparent w-[300px]"
                src="https://github.com/gauravghai/weatherApp-Reactjs/blob/master/src/images/WeatherIcons.gif?raw=true"
                alt="gif"
              />
              <div className="text-center text-white mt-10">
                <p className="font-bold">
                  Detecting your Location ............{" "}
                </p>
                <p className="mt-4">
                  Your current Location will be displayed on the App <br /> and
                  used for calculating Real time weather .
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="inner-container flex">
            <div className="left-container w-[60%] py-5 px-5 relative">
              <div className="text-right text-white">
                <div className="text-[50px]">{weatherData.name}</div>
                <div className="font-bold">{weatherData.sys.country}</div>
              </div>
              <div className="flex items-center absolute bottom-10  text-white">
                <div>
                  <div className="text-[50px]">{Time}</div>
                  <div>
                    {daysName[getDay]}, {dates.getDate()} {monthsName[getMonth]}{" "}
                    {dates.getFullYear()}
                  </div>
                </div>
                <div className="ml-[200px]">
                  <span className="text-[40px]">{weatherData.main.temp}°</span> c
                </div>
              </div>
            </div>
            <div className="right-container w-[40%]">
              <Forecast cityData={cityData} city={city} setcity={setcity} loadData={loadData}/>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
