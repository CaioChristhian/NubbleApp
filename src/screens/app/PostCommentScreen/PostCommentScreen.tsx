import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({}: AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen title="Comentários" canGoBack>
      <Text preset="headingSmall">Comentarios screen</Text>
    </Screen>
  );
}
