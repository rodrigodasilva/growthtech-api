import axios from 'axios';

const jsonPlaceholderApi = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
  timeout: 3000,
});

export { jsonPlaceholderApi };
