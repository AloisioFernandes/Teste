import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image 
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})