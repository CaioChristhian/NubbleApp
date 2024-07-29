import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.zwZJxJkyC4De-YohWvde1s5kHHXkqMj6L8e40A6rJUz_np4hK4rkFNtWpOuD',
  },
});
