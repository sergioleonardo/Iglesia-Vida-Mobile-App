import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const stylesHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
export function HomeScreen() {
  return (
    <View style={stylesHome.container}>
      <Text>Home Screen</Text>
    </View>
  );
}