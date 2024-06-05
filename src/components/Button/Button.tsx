import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: colors.buttonPrimary,
        alignItems: 'center',
        borderRadius: 16,
      }}>
      <Text preset="paragraphMedium" bold>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
