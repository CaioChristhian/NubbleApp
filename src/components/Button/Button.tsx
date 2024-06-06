import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';
import {Box} from '../Box/Box';

interface ButtonProps {
  loading?: boolean;
  title: string;
}

export function Button({title, loading}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      /*  style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: colors.carrotSecondary,
        alignItems: 'center',
        borderRadius: 16,
      }} */
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold>
          {title}
        </Text>
      )}
    </Box>
  );
}
