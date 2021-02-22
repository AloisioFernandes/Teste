import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OneSignal from 'react-native-onesignal'

export default function App() {

  useEffect(() => {
    OneSignal.init('86aa0514-14ec-49d5-b51e-3af2eb499f99')
    OneSignal.addEventListener('opened', onOpened)

    return () => OneSignal.removeEventListener('opened', onOpened)
  }, [])

  function onOpened(result) {
    console.log('Mensagem', result.notification.payload.body)
    console.log('Result: ', result)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SujeitoProgramador</Text>
      <Text style={{color: '#FFF'}}>Inscreva-se no canal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303293',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#FFF'
  }
});
