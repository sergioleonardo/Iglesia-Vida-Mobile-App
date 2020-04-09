import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const stylesConnect = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  

export function ConnectScreen() {
  return (
    <View style={stylesConnect.container}>
      <Text>connect Screen</Text>
    </View>
  );
}