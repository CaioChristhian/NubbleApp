import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: PostActionsProps) {
  function likePost() {
    //todo
  }

  function navigateToComments() {
    //todo
  }

  function favoritePost() {
    //todo
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
      />
      <Item
        onPress={favoritePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}
function Item({onPress, icon, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
