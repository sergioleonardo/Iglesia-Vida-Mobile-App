import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const stylesVideo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  

export function VideoScreen() {
  return (
    <View style={stylesVideo.container}>
      <Text>Video Screen</Text>
    </View>
  );
}