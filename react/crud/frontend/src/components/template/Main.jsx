import './Main.css'
import React from 'react'
import Header from './Header'

export default (props) => (
  <>
    <Header {...props} /> {/*Header recebe as mesmas propriedades de Main*/}
    <main className="content">
      Conteúdo
    </main>
  </>
)