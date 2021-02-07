import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Icon } from 'react-native-elements'

import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { UsersProvider } from './context/UsersContext'

const Stack = createStackNavigator()

export default (props) => {
  return ( // UserProvider envolvendo a aplicação permite o uso do contexto passado (lista de usuários) em toda a aplicação (o resto da aplicação é o props.children)
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="UserList" 
          screenOptions={screenOptions}
        >
          <Stack.Screen 
            name="UserList" 
            component={UserList} 
            options={({ navigation }) => { // função que será chamada toda vez que o objeto for carregado
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button 
                    onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                )
              }
            }}
          />
          <Stack.Screen 
            name="UserForm" 
            component={UserForm} 
            options={{
              title: 'Formulário de Usuários'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}