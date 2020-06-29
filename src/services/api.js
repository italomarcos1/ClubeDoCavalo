import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://clubedocavalo.shop/api-v2',
});

export const fakeapi = axios.create({
  baseURL: 'https://192.168.1.9:3333',
});

export const sandbox = axios.create({
  baseURL: 'https://sandbox.amfrutas.pt/api-v2',
});
