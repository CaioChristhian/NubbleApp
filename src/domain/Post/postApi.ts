import {api, PageAPI} from '@api';

import {PostApi} from './postTypes';

async function getList(): Promise<PageAPI<PostApi>> {
  const response = await api.get<PageAPI<PostApi>>('user/post');
  return response.data;

  /* let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.zwZJxJkyC4De-YohWvde1s5kHHXkqMj6L8e40A6rJUz_np4hK4rkFNtWpOuD',
    },
  });

  let data: PageAPI<PostApi> = await response.json();
  console.log(data);

  //await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return data; */
}

export const postApi = {
  getList,
};
