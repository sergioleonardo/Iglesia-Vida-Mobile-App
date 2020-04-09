import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const stylesContact = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  

export function ContactScreen() {
  return (
    <View style={stylesContact.container}>
      <Text>Contact Screen</Text>
    </View>
  );
}