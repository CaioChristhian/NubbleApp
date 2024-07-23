import React from 'react';

import {Post} from '@domain';

import {Box, PostHeader, PostImage} from '@components';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
    </Box>
  );
}
