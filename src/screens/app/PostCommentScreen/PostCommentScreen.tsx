import React from 'react';

import {usePostCommentList} from '@domain';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  usePostCommentList(postId);

  return (
    <Screen title="Comentários" canGoBack>
      <Text preset="headingSmall">Comentarios screen</Text>
    </Screen>
  );
}
