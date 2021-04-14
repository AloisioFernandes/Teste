import React from 'react'
import Home from './src/Home'

import { ThemeProvider } from 'styled-components'

const cores = {
  bg: '#191a24',
  color: '#FF3F4A'
}

function App() {
  return (
    <ThemeProvider theme={cores}>
      <Home />
    </ThemeProvider>
  )
}

export default App