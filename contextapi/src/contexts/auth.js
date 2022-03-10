import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [user, setUser] = useState({})

  function signIn(email, password) {
    if(email !== '' && password !== '') {
      setUser({
        email: email,
        status: "ATIVO"
      })
    }
  }

  return (
    <AuthContext.Provider value={{ nome: "MATHEUS SILVA" }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider