import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function House() {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={require('../assets/house5.jpg')}
          style={styles.cover}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>DESCRIÇÃO</Text>
        <Text style={styles.price}>R$ 954,60</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 260,
    height: 70,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 6,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 2,
    borderRadius: 10
  },

  cover: {
    borderRadius: 10,
    width: 60,
    height: 60
  },

  content: {
    width: '65%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10
  }
})

// 10:00