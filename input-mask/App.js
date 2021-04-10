import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

export default function App() {
  const [cell, setCell] = useState('')
  const [cpf, setCpf] = useState('')
  const cpfRef = useRef(null)
  const cellRef = useRef(null)

  function showCpf() {
    const unmask = cpfRef?.current.getRawValue()

    alert(unmask)
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginTop: 30 }}>CELULAR</Text>

      <TextInputMask 
        style={styles.input}
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        value={cell}
        onChangeText={text => setCell(text)}
        ref={cellRef}
      />      

      <Text style={{ fontSize: 25, marginTop: 30 }}>CPF</Text>

      <TextInputMask 
        style={styles.input}
        type={'cpf'}
        value={cpf}
        onChangeText={text => setCpf(text)}
        ref={cpfRef}
      />

      <Button
        title="Mostrar CPF"
        onPress={showCpf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#DDD',
    borderRadius: 5,
    fontSize: 20,
    padding: 5
  }
});
