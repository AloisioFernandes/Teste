import React, { createContext, useEffect, useState } from 'react'

import useAuth from './Hooks/useAuth'

const Context = createContext()

function AuthProvider({ children }) {  
  const { authenticated, loading, handleLogin, handleLogout } = useAuth()

  return ( // só será renderizado se loading for false
    <Context.Provider value={{ authenticated, handleLogin, handleLogout, loading }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }