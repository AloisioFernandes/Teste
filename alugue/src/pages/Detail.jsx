import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

import SwiperComponent from '../components/Swiper'

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>

      <View style={styles.headerContent}>
        <View style={{ width: '65%' }}>
          <Text>Casa de Praia</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  swiperContent: {
    flexDirection: 'row',
    height: 340,
    width: '100%'
  }
})

// 30:00