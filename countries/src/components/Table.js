import { useEffect, useState } from "react";

const Table = ({ data, country, setData, WeatherData }) => {
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    setDataLength(data.length);
    console.log(dataLength);
  }, [data, dataLength]);

  if (dataLength === 1) {
    if (WeatherData && WeatherData.main) {
      return (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <h1>{item.name.common}</h1>
              <ul>
                <li>Capital: {item.capital}</li>
                <li>Area: {item.area}</li>
                <h3>Languages:</h3>
                <ul>
                  {Object.entries(item.languages).map(([code, language]) => (
                    <li key={code}>
                      {code}: {language}
                    </li>
                  ))}
                </ul>
              </ul>
              <img src={item.flags.png} alt={`${item.name.common} flag`} />
            </div>
          ))}
          <div>
            <div>
              <h1>Weather in {WeatherData.name}</h1>
              <p>Temperature is {WeatherData.main.temp} Celsius</p>
              <p>Wind is {WeatherData.wind.speed}m/s</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Loading weather data...</p>;
    }
  } else if (dataLength <= 10) {
    return (
      <div>
        <h1>Maat</h1>
        {data.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item.name.common}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Tarkenna hakua!</h1>
      </div>
    );
  }
};

export default Table;
