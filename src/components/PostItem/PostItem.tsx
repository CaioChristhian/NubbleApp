import React from 'react';

import {Post} from '@domain';

import {Box, PostActions, PostBottom, PostHeader, PostImage} from '@components';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box paddingHorizontal="s24" mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        commentCount={post.commentCount}
        text={post.text}
      />
    </Box>
  );
}
