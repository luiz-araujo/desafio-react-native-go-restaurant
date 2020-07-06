import axios from 'axios';

const api = axios.create({
  // Device
  // baseURL: 'http://localhost:3333',
  // Emulador Android
  baseURL: 'http://10.0.2.2:3333/',
});

export default api;
