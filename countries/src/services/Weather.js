import axios from "axios";
const weatherUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const get = (latitude, longitude, apiKey) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=finnish`
  );
  return request.then((response) => response.data);
};

export default { get };
