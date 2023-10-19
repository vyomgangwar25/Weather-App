import React, { } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSun,fasunset} from "@fortawesome/free-solid-svg-icons";
const WeatherCard = ({tempInfo}) => {


    const{temp,humidity,pressure,main,
    name,speed,country,sunset}=tempInfo
  
    // temp convertion
   let tempe=temp-273.15;
   var originalTemperature = tempe;
   var temperatureToOneDecimalPlace = originalTemperature.toFixed(1);
  


//time conversion
    let sec=sunset;
    let date=new Date(sec*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`
  return (
    <>
       <article className="widget">
        <div className="weatherIcon">
          <FontAwesomeIcon icon={faSun} />
        <span className='abc'>{main}</span>  
        </div>
        <div className="wetherInfo">
          <div className="temperature">
            <span>{temperatureToOneDecimalPlace}°C</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place"> {name}, {country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/*4 column */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                {" "}
                <FontAwesomeIcon icon= {faSun} />
              </p>
              <p className="extra-info-leftside">
                {timeStr}PM<br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                {" "}
                <FontAwesomeIcon icon={faSun} />
              </p>
              <p className="extra-info-leftside">
                {humidity}% <br />
                Humidity
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                {" "}
                <FontAwesomeIcon icon={faSun} />
              </p>
              <p className="extra-info-leftside">
                {pressure}mb <br />
                Perssure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                {" "}
                <FontAwesomeIcon icon={faSun} />
              </p>
              <p className="extra-info-leftside">
                {speed}km/hr<br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard
