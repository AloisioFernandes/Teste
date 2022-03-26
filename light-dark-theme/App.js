import { useColorScheme } from 'react-native'

import Home from './src/Home'

import { ThemeProvider } from 'styled-components'
import theme from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={{ background: '#121212', color: '#FFF' }}>
      <Home />
    </ThemeProvider>
  );
}
