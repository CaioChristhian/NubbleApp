import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostBottomProps = Pick<Post, 'author' | 'commentCount' | 'text'>;

export function PostBottom({author, commentCount, text}: PostBottomProps) {
  const commentText = getCommentText(commentCount);
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentCount > 0 && (
        <Text color="primary" mt="s8" preset="paragraphSmall" bold>
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return '';
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
