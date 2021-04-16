import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper'

export default function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>Youtube</Text>
      <Text style={{fontSize: 25}}>Sujeito Programador</Text>
      <Button icon="camera" mode="contained" onPress={() => {}}>
        Tirar foto
      </Button>
    </View>
  );
}
