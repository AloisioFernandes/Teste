import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Home from './src/Home'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    primary: '#131313',
    accent: '#FFD900',
    danger: '#ED1C24'
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
