import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Text} from '@components';
import {AppStackParamList} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettingsScreen() {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}
