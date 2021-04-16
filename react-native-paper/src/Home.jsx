import React from 'react';
import { Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper'

export default function Home() {
  const { colors } = useTheme()

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background}}>
      <Text style={{fontSize: 25, color: colors.primary}}>Youtube</Text>
      <Text style={{fontSize: 25, color: colors.accent}}>Sujeito Programador</Text>
      <Button icon="camera" mode="contained" onPress={() => {}}>
        Tirar foto
      </Button>
    </View>
  );
}
