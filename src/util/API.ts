import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 10000,
});
