import React, { createContext } from 'react'
import users from '../data/users'

const UsersContext = createContext({}) // inicia contexto de usuários com objeto vazio

export const UsersProvider = (props) => {
  return ( // envolverá toda a aplicação com um Provider do contexto com valor inicial state contendo lista de usuários
    <UsersContext.Provider value={{
      state: {
        users
      }
    }}> 
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContext