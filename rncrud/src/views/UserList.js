import React, { useContext } from 'react'
import { Alert } from 'react-native'
import { View, FlatList } from 'react-native'
import { Avatar, Button, ListItem, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default (props) => {

  const { state } = useContext(UsersContext) // informa o contexto que será utilizado

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      { 
        text: 'Sim', 
        onPress() {
          console.warn('delete' + user.id)
        } 
      },
      { 
        text: 'Não' 
      }
    ])
  }

  function getActions(user) {
    return ([
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)} // Passa usuário selecionado para próxima rota
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />  
        <Button
          onPress={() => confirmUserDeletion(user)} // confirma se usuário deve ser deletado 
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />  
      </>
    ])
  }

  function getUserItem({ item: user }) { // cada item do array de users será reconhecido como user
    return (
      <ListItem 
        key={user.id} 
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm', user)} // Passa usuário selecionado para próxima rota
      >
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
          <ListItem.ButtonGroup containerStyle={{borderColor:'rgba(255,255,255, 0)', flexDirection:'row', maxWidth: '26%', marginRight: -15}} buttons={getActions(user)}/>
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users} // dados vem do context
        renderItem={getUserItem}
      />
    </View>
  )
}