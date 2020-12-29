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

  useEffect(() => {
    axios(baseUrl).then(resp => {
      setList(resp.data)
    })
  }, [])
  
  function getUpdatedList(user, add=true) {
    const lista = list.filter(u => u.id !== user.id)
    if(add) lista.unshift(user)
    return lista
  }

  function handleClear() {
    setUser({name: '', email: ''})
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

  function handleLoad(user) {
    setUser(user)
  }

  function handleRemove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp => {
      const lista = getUpdatedList(user, false)
      setList(lista)
    })
  }

  function updateField(event) {
    const usr = { ...user }
    usr[event.target.name] = event.target.value
    setUser(usr)
  }

  function renderTable() {
    return(
      <table className="table mt4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    )
  }

  function renderRows() {
    return list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning"
              onClick={() => handleLoad(user)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger ml-2"
              onClick={() => handleRemove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
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
      {renderTable()}
    </Main>
  )
}

export default UserCrud