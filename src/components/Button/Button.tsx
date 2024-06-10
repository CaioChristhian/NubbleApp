import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPreset, buttonPresets} from './buttonPresets';

interface ButtonProps extends TouchableOpacityBoxProps {
  loading?: boolean;
  title: string;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
