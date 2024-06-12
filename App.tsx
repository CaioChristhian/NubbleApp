import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Icon name="eyeOff" color="backgroundContrast" size={20} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
