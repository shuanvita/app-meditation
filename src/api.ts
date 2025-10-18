import axios from 'axios';
export const API_BASE = 'http://127.0.0.1:3000/api/';
export const API_ROUTES = {
  meditations: 'meditations',
};

export const http = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});
