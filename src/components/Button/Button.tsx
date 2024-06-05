import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      /*  style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: colors.carrotSecondary,
        alignItems: 'center',
        borderRadius: 16,
      }} */
    >
      <Text preset="paragraphMedium" bold>
        {title}
      </Text>
    </Box>
  );
}
