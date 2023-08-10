import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Services from "./services/Services";
import Weather from "./services/Weather";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);
  const [WeatherData, setWeatherData] = useState([]);
  const apiKey = "a4d2b209889c74a9597419c004a0048e";

  useEffect(() => {
    if (country !== "") {
      Services.getAll()
        .then((countries) => {
          const filteredData = countries.filter((item) =>
            item.name.common.toLowerCase().includes(country.toLowerCase())
          );
          setData(filteredData);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } else {
      setData([]);
    }
  }, [country]);

  useEffect(() => {
    if (data.length === 1) {
      const CountryName = data[0].name.common;
      Services.get(CountryName)
        .then((item) => {
          const coordinates = item.capitalInfo.latlng;
          const latitude = coordinates[0];
          const longitude = coordinates[1];
          Weather.get(latitude, longitude, apiKey)
            .then((weatherData) => {
              setWeatherData(weatherData);
            })
            .catch((error) => {
              console.log("Error fetching weather data:", error);
            });
        })
        .catch((error) => {
          console.log("Error fetching country data:", error);
        });
    } else {
      setWeatherData([]);
    }
  }, [data]);

  return (
    <div>
      <Form country={country} setCountry={setCountry} setData={setData} />
      <Table
        data={data}
        country={country}
        setData={setData}
        WeatherData={WeatherData}
      />
    </div>
  );
}

export default App;
