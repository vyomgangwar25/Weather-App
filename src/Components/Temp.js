import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";


const Temp = () => {

  
  const[searchValue,setSearchValue]=useState("Farrukhabad")
  const[tempInfo,setTempInfo]=useState([])

  const getWeatherInfo= async()=>{
   try{ 
   let url=`https://api.openweathermap.org/data/2.5/weather?q= ${searchValue} &appid=76e13e9c160009488ba27544b3865bdb` 
    const res = await fetch(url);
    const data=await res.json();
    
   
    console.log(data);
  
    
    const{temp,humidity,pressure}=data.main;
    const{main}=data.weather[0];
    const{name}=data;
    const{speed}=data.wind;
     const{country,sunset}=data.sys;

     const myNewWeather={
      temp,humidity,pressure,main
      ,speed,country,sunset,name
     };
    setTempInfo(myNewWeather)
   } catch(error){
    console.log(error);

   }
  };
  useEffect(()=>{
  getWeatherInfo();
  },[])
  return (
    <>
      <div className="wrap"> 
        <div className="search">
          <input
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e)=>{
              setSearchValue(e.target.value)
            }}
          />
          <button className="searchButton" type="button" 
          onClick={getWeatherInfo}>
             Search
          </button>
        </div>
      </div>
     <WeatherCard tempInfo={tempInfo}/>
    </>
  );
};

export default Temp;
