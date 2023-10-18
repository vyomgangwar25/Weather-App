import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import { faSun,fasunset} from '@fortawesome/free-solid-svg-icons'
const Temp = () => {
  return (
    <>
    <div className="wrap">
      <div className="search">
        <input
          placeholder="search..."
          autoFocus
          id="search"
          className="searchTerm"
        />
        <button className="searchButton" type="button">
          Search
        </button>
      </div>
    </div>
    <article className="widget">
      <div className="weatherIcon">
      <FontAwesomeIcon   icon={faSun} />
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
        <p> <FontAwesomeIcon   icon={faSun} /></p>
        <p className="extra-info-leftside">
          19:19 PM <br />
          Sunset
        </p>
        </div>

        

        <div className="two-sided-section">
        <p> <FontAwesomeIcon   icon={faSun} /></p>
        <p className="extra-info-leftside">
          19:19 PM <br />
           Humidity
        </p>
        </div>
        </div>
        <div className="weather-extra-info">
          
        </div>
       </div>
    </article>
    </>
  );
};

export default Temp;
