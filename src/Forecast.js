import React from "react";
import { BsFillCloudHazeFill, BsSearch } from "react-icons/bs";

const Forecast = ({ cityData, loadData, city, setcity }) => {
  return (
    <>
      {!cityData ? (
        <div className="forecast-container px-5">
          <div className="border-b-2 border-gray-700 grid justify-center mt-3 mb-3 py-5">
            <BsFillCloudHazeFill className="text-white text-[100px]" />
            <h2 className="text-[30px] text-white mt-5">HAZE</h2>
          </div>
          <div>
            <div className="flex items-centerm mt-5 border-gray-700">
              <input
                type="text"
                className="outline-none text-white focus:text-white bg-transparent border-b-2 border-gray-700 cursor-pointer w-[80%] m-auto "
                placeholder="Search any city"
                value={city}
                onChange={(e) => setcity(e.currentTarget.value)}
              />
              <BsSearch onClick={loadData} className="text-white" />
            </div>
            <div className="mt-5">
              <div className="flex justify-center  border-b-2 py-2 border-gray-700">
                <div className="text-white font-bold">London, </div>
                <div className="text-white">GB</div>
              </div>
              <div className="flex justify-between border-b-2 py-2  text-white border-gray-700">
                <div>Temperature</div>
                <div>14°c</div>
              </div>
              <div className="flex justify-between border-b-2 py-2  text-white border-gray-700">
                <div>Humidity</div>
                <div>83%</div>
              </div>
              <div className="flex justify-between border-b-2 py-2  text-white border-gray-700">
                <div>Visibilty</div>
                <div>1000 mi</div>
              </div>
              <div className="flex justify-between border-b-2 py-2 text-white border-gray-700">
                <div>Wind Speed</div>
                <div>1.5km/h</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="forecast-container px-5">
          <div className="border-b-2 border-gray-700 grid justify-center mt-3 mb-3 py-5">
            <BsFillCloudHazeFill className="text-white text-[100px]" />
            <h2 className="text-[30px] text-white mt-5">{cityData.weather[0].main}</h2>
          </div>
          <div>
            <form
              className="flex items-centerm mt-5 border-gray-700"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                className="outline-none text-white focus:text-white bg-transparent border-b-2 border-gray-700 cursor-pointer w-[80%] m-auto "
                placeholder="Search any city"
                value={city}
                onChange={(e) => setcity(e.currentTarget.value)}
              />
              <BsSearch onClick={loadData} className="text-white" />
            </form>

            <div className="mt-5">
              <div className="flex justify-center  border-b-2 py-2 border-gray-700">
                <div className="text-white font-bold">{cityData.name},</div>
                <div className="text-white">{cityData.sys.country}</div>
              </div>
              <div className="flex justify-between border-b-2 py-2  text-white border-gray-700">
                <div>Temperature</div>
                <div>
                  {/* converting kelvin to celsius  */}
                  {(cityData.main.temp - 273.15).toFixed(1)}°c
                  {cityData.weather.main}
                </div>
              </div>
              <div className="flex justify-between border-b-2 py-2  text-white border-gray-700">
                <div>Humidity</div>
                <div>{cityData.main.humidity}%</div>
              </div>
              <div className="flex justify-between border-b-2 py-2  text-white border-gray-700">
                <div>Visibilty</div>
                <div>{cityData.visibility} mi</div>
              </div>
              <div className="flex justify-between border-b-2 py-2 text-white border-gray-700">
                <div>Wind Speed</div>
                <div>{cityData.wind.speed}km/h</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Forecast;
