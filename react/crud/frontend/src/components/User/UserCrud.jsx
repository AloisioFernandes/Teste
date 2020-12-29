import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const baseUrl = 'http://localhost:3001/users'
const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const UserCrud = () => {
  const [user, setUser] = useState({name: '', email: ''})
  const [list, setList] = useState([])
  
  function handleClear() {
    setUser({name: '', email: ''})
  }

  function getUpdatedList(user) {
    const lista = list.filter(u => u.id !== user.id)
    lista.unshift(user)
    return lista
  }
  
  function handleSave() {
    const usr = user
    const method = usr.id ? 'put' : 'post' //se tiver id fará requisição put, se não será post
    const url = usr.id ? `${baseUrl}/${user.id}` : baseUrl 
    axios[method](url, usr)
      .then(resp => {
        const lst = getUpdatedList(resp.data)
        setUser({name: '', email: ''})
        setList(lst)
      })
  }


  return (
    <Main {...headerProps}>
      Cadastro de Usuário
    </Main>
  )
}

export default UserCrud