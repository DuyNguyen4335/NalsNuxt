import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api-placeholder.herokuapp.com/api/v2/',
    // timeout: 1000,
    'accept': 'application/json'
  });


  export default axiosInstance;