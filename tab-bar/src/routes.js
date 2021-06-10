import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import New from './pages/New'
import Notification from './pages/Notification'
import Profile from './pages/Profile'
import Search from './pages/Search'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Procurar" component={Search} />
      <Tab.Screen name="Novo" component={New} />
      <Tab.Screen name="Notificações" component={Notification} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  )
}