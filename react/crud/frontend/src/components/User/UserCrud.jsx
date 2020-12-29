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

  function updateField(event) {
    const usr = { ...user }
    usr[event.target.name] = event.target.value
    setUser(usr)
  }

  function renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" className="form-control" 
                name="name" 
                value={user.name}
                onChange={(e) => updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input type="text" className="form-control" 
                name="email" 
                value={user.email}
                onChange={(e) => updateField(e)}
                placeholder="Digite o e-mail..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary"
              onClick={(e) => handleSave(e)}
            >
              Salvar
            </button>

            <button className="btn btn-secondary ml-2"
              onClick={(e) => handleClear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Main {...headerProps}>
      {renderForm()}
    </Main>
  )
}

export default UserCrud