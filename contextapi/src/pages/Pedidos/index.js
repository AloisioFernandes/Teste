import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AuthContext } from '../../contexts/auth'

export default function Pedidos() {
 const { nome } = useContext()

 return (
   <View style={styles.container}>
     <Text>Pagina Pedidos</Text>
     <Text>Nome: {nome}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})