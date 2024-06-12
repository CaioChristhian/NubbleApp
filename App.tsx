import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';

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
          <EyeOnIcon />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
