import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
}

export function TextInput({label, ...rnTextInputProps}: TextInputProps) {
  const {colors} = useAppTheme();
  return (
    <Box>
      <Text preset="paragraphMedium" mb="s4">
        {label}
      </Text>
      <Box {...$TextInputContainer}>
        <RNTextInput
          placeholderTextColor={colors.gray2}
          style={$textInputStyle}
          {...rnTextInputProps}
        />
      </Box>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

const $TextInputContainer: BoxProps = {
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};
