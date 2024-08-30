import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.GxLHkZngfTro3fXaxbWTjPqGS7Wo1xlG0VrpAnWeBvGyTQ871OrC3TbupRQb',
  },
});
