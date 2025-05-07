import React from 'react';

import {Post} from '@domain';

import {Text, Box, ProfileAvatar} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export function PostHeader({author}: PostHeaderProps) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text ml="s12" preset="paragraphMedium" semibold>
        {author.userName}
      </Text>
    </Box>
  );
}
