import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_NASA_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const fetchApod = (date) =>
  axiosInstance.get('/planetary/apod', {
    params: {
      api_key: process.env.REACT_APP_NASA_API_KEY,
      date,
    },
  });
