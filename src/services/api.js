import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://clubedocavalo.shop/api/',
});

export const fakeapi = axios.create({
  baseURL: 'https://192.168.1.9:3333',
});
