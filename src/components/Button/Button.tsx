import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Text} from '../Text/Text';
import {Box} from '../Box/Box';

interface ButtonProps {
  loading?: boolean;
  title: string;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#FFF'}}>
          {title}
        </Text>
      )}
    </Box>
  );
}
