import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Clipboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [urlFinal, setUrlFinal] = useState('')

  const short = async () => {
    Keyboard.dismiss()

    if(url.includes('https://') || url.includes('http://')) { // verifica se o usuário digitou uma URL válida iniciada em https ou http
      await fetch(`https://cutt.ly/api/api.php?key=a08a02e7890afba3580ee945ffbe6667e0646&short=${url}&name=${name}`)
        .then(async response => {
          const data = await response.json()
          if(data.url.status === 3) {
            alert('Esse nome já está em uso')
            return
          }
          if(data.url.status === 2) {
            alert('URL é inválida')
            return
          }

          setUrlFinal(data.url.shortLink)
        })
      return
    }
    alert('Url inválida')
  }

  function copyUrl() {
    Clipboard.setString(urlFinal)
    alert('Url copiada com sucesso!')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>url
          <Text style={{ color: '#1076F7' }}>Sujeito</Text>
        </Text>

        <TextInput 
          style={styles.input}
          onChangeText={(texto) => setUrl(texto)}
          value={url}
          placeholder="Digite a url..."
        />

        <TextInput 
          style={styles.input}
          onChangeText={(texto) => setName(texto)}
          value={name}
          placeholder="Nome personalizado..."
        />

        <TouchableOpacity onPress={() => short()} style={styles.shortBtn}>
          <Text style={{ color: '#FFF' }}>Encurtar</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={urlFinal ? copyUrl : () => {}}>
          <View style={styles.finalUrl}>
            <Text style={{fontSize: 20}}>{urlFinal}</Text>
            {!!urlFinal && (
              <Ionicons name={'copy-outline'} color="#DDD" size={30} />
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#21243d',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20
  },

  input: {
    height: 50,
    width: '80%',
    borderColor: '#21243d',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 20,
    fontSize: 20
  },

  shortBtn: {
    backgroundColor: '#ff7c7c',
    borderRadius: 20,
    height: 40,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  finalUrl: {
    flexDirection: 'row', 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
    marginTop: 20, 
    width: '80%'    
  }
})
