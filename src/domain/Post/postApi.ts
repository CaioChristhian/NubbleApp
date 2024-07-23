import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //simular delay api
  return postListMock;
}

export const postApi = {
  getList,
};
