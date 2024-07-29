import {api, PageAPI} from '@api';

import {PostApi} from './postTypes';

async function getList(): Promise<PageAPI<PostApi>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  const response = await api.get<PageAPI<PostApi>>('user/post');
  return response.data;
}

export const postApi = {
  getList,
};
