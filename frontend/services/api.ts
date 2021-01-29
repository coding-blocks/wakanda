import axios from 'axios';
import config from '../config';

export const client = axios.create({
  baseURL: config.API.HOST,
  responseType: 'json',
});

export default client;
