import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.GiQNBOF8yfs3kOB6UUe6X8RuT2ABDBfHwM88bw5PWXnqIEAHJsdvEQJI9WlF',
  },
});
