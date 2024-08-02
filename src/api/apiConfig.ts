import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.9feY3IqQskvFQ8RF5pzpBcWa871isTZOZj76KnpjnArG_dYN4BVCw06vctrv',
  },
});
