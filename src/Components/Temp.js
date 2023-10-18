import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSun, fasunset } from "@fortawesome/free-solid-svg-icons";
const Temp = () => {
  const[searchValue,setSearchValue]=useState("mumbai")
  const getWeatherInfo= async()=>{
   try{ 
   let url=`https://api.openweathermap.org/data/2.5/weather?q= ${searchValue} &appid=76e13e9c160009488ba27544b3865bdb` 
    const res = await fetch(url);
    const data=await res.json();
    
    const {temp,humidity,pressure}=data.main;
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
      <article className="widget">
        <div className="weatherIcon">
          <FontAwesomeIcon icon={faSun} />
        </div>
        <div className="wetherInfo">
          <div className="temperature">
            <span>25.5</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place"> Pune,India</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/*4 column */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                {" "}
                <FontAwesomeIcon icon={faSun} />
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                {" "}
                <FontAwesomeIcon icon={faSun} />
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Humidity
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                {" "}
                <FontAwesomeIcon icon={faSun} />
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Perssure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                {" "}
                <FontAwesomeIcon icon={faSun} />
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Temp;
