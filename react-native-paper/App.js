import React from 'react';
import { Appearance } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Home from './src/Home'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    primary: '#131313',
    accent: '#550000',
    danger: '#ED1C24'
  }
}

const dark = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#131313',
    primary: '#FFF',
    accent: '#FFD900',
    danger: '#ED1C24'
  }
}

const colorScheme = Appearance.getColorScheme()

export default function App() {
  return (
    <PaperProvider theme={colorScheme === 'dark' ? dark : theme}>
      <Home />
    </PaperProvider>
  );
}
