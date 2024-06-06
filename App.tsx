import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Box marginBottom="s16">
            <Button title="Entrar" />
          </Box>
          <Button loading title="Entrar" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
