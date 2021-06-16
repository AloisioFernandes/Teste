import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function New(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image
        source={props.cover}
        style={styles.cover}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})

// 30:00