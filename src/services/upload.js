import axios from 'axios';

const upload = axios.create({
  baseURL: 'https://clubedocavalo.shop/api/',
});

export default upload;
