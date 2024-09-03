import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {Box, TextMessage} from '@components';

interface Props {
  postId: number;
  onAddComment: () => void;
}
export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const [message, setMessage] = useState('');

  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
      onAddComment();
    },
  });

  return (
    <Box>
      <TextMessage
        placeholder="Adicione um comentário"
        value={message}
        onChangeText={setMessage}
        onPressSend={createComment}
      />
    </Box>
  );
}
