import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Button disabled title="Primary" marginBottom="s12" />
          <Button disabled title="Outline" marginBottom="s12" />
          <Button loading title="Loading" />
          <EyeOffIcon />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
