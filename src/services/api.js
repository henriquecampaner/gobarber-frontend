import axios from 'axios';

const api = axios.create({
  baseURL: 'http://206.189.17.185',
});

export default api;
