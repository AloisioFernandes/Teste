import React, { useState, useEffect } from 'react'
import Main from '../template/Main'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const UserCrud = () => {
  return (
    <Main {...headerProps}>
      Cadastro de Usuário
    </Main>
  )
}

export default UserCrud