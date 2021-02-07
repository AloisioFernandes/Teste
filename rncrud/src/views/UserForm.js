import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {}) // verifica se route.params existe, se usuário entrou para editar ou adicionar usuário
  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput 
        style={style.input}
        onChangeText={name => setUser({ ...user, name})} // atualiza o nome do usuário
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text>E-mail</Text>
      <TextInput 
        style={style.input}
        onChangeText={email => setUser({ ...user, email})} // atualiza o email do usuário
        placeholder="Informe o E-mail"
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <TextInput 
        style={style.input}
        onChangeText={avatarUrl => setUser({ ...user, avatarUrl})} // atualiza a url do avatar do usuário
        placeholder="Informe a URL do Avatar"
        value={user.avatarUrl}
      />
      <Button 
        title="Salvar"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    padding: 12
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15
  }
})