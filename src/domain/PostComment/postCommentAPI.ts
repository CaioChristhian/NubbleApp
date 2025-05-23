import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './postCommentTypes';

const PATH = 'user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 500));
  const response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });
  return response.data;
}

async function create(
  post_id: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(PATH, {
    post_id,
    message,
  });
  return response.data;
}

async function remove(postCommentId: number): Promise<{message: string}> {
  const response = await api.delete<{message: string}>(
    `${PATH}/${postCommentId}`,
  );

  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove,
};
