import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {setLoading(false)}, 4000)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {loading ?
        <>
          <Text style={styles.title}>Iniciando o app!</Text>
          <LottieView
            source={require("./src/assets/loading.json")}
            style={{width: 200, height: 200}}
            loop
            autoPlay
          />
        </>
        :
        <View
          style={styles.container}
        >
          <Text style={styles.title}>Tela inicial</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40
  }
});
