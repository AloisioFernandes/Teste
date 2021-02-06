import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {}) // verifica se route.params existe, se usuário entrou para editar ou adicionar usuário
  return (
    <View>
      <Text>Name</Text>
      <TextInput 
        onChangeText={name => setUser({ ...user, name})} // atualiza o nome do usuário
        placeholder="Informe o Nome"
        value={user.name}
      />
    </View>
  )
}