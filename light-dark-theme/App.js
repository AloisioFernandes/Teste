import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home'

import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <ThemeProvider theme={{ background: '#121212', color: '#FFF' }}>
      <Home />
    </ThemeProvider>
  );
}
