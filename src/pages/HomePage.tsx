import React, { useState } from "react";
import { useWeatherInCityQuery } from "../store/weather/weather.api";

export function HomePage() {
    const [search, setSearch] = useState('');
    const [inputValue, setInputValue] = useState("");
    const { isLoading, isError, data } = useWeatherInCityQuery(search, {
        skip: search.length < 1
    });
    const submitHandler = (e: any) => {
        e.preventDefault();
        setSearch(inputValue);
    }
    const iconPath = `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
    
    return (
      <div className="container ml-auto mr-auto flex flex-col items-center pt-10 pb-10">
        {isError && (
          <h3 className="error text-5xl text-red-700">
            Something went wrong...
          </h3>
        )}
        <form action="" className="mb-10" onSubmit={submitHandler}>
          <input
            type="text"
            className="border py-2 px-4 w-[450px] h-[42px] mb-2 mr-4 rounded border-black"
            placeholder="Search city"
            onChange={ e => setInputValue(e.target.value) }
          />
          <button className="border py-2 px-4 h-[42px] mb-2 rounded-3xl bg-blue-950 text-white">
            Search
          </button>
        </form>
        <div className="cityCard">
          <h2 className="cityName">{data?.name}</h2>
          <p className="country">{data?.sys.country}</p>
          <p className="weather">{data?.weather[0].main}</p>
          <img src={iconPath} alt={data?.weather[0].description} />
          <p className="iconDescription">{data?.weather[0].description}</p>
          <p className="tempNow">Temp now: {data?.main.temp}&#8451;</p>
          <p className="pressure">Pressure: {data?.main.pressure} hPa</p>
          <p className="wind">Wind speed: {data?.wind.speed} m/s</p>
        </div>
      </div>
    );
}