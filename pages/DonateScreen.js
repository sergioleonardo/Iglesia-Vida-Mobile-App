import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const stylesDonate = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  

export function DonateScreen() {
  return (
    <View style={stylesDonate.container}>
      <Text>Donate Screen</Text>
    </View>
  );
}