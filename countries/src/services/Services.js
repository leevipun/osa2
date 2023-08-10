import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAll = () => {
  const request = axios.get(
    "https://studies.cs.helsinki.fi/restcountries/api/all"
  );
  return request.then((response) => response.data);
};

const get = (country) => {
  const request = axios.get(`${baseUrl}/name/${country}`);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};
const deleting = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, update, deleting, get };
