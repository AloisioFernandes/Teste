import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <NavItem link="#/" icon="home" text="Início" />
      <NavItem link="#/user" icon="users" text="Usuários" />
    </nav>
  </aside>
)