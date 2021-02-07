import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const intialState = { users }
const UsersContext = createContext({}) // inicia contexto de usuários com objeto vazio

const actions = {
  createUser(state, action) {
    const user = action.payload
    user.id = Math.random()
    return {
      ...state,
      users: [...state.users, user] // acrescenta novo usuário na lista
    }
  },
  updateUser(state, action) {
    const updated = action.payload
    return {
      ...state,
      users: state.users.map(u => u.id === updated.id ? updated : u) // percorre array de usuários, se o id do usuário é igual ao do usuário alterado, retorna o alterado, se não retorna o usuário percorrido. Método para substituir/alterar um usuário de um array de usuários 
    }
  },
  deleteUser(state, action) {
    const user = action.payload
    return {
      ...state, // atributo opcional para essa situação. Gera um clone do estado atual, para o caso de conter mais de um atributo e não sobrescrever todo o estado
      users: state.users.filter(u => u.id !== user.id)
    }
  }
}

export const UsersProvider = (props) => {

  function reducer(state, action) { // função para evoluir/alterar o estado
    const fn = actions[action.type] // seleciona uma função do objeto actions com nome igual ao action.type recebido pelo dispatch
    return fn ? fn(state, action) : state // um estado evoluido/alterado deve ser retornado
  }

  const [state, dispatch] = useReducer(reducer, intialState)

  return ( // envolverá toda a aplicação com um Provider do contexto com valor inicial state contendo lista de usuários
    // state é recebido pelo useReducer, dispatch será utlizado para invocar um evento (função reducer)
    <UsersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContext