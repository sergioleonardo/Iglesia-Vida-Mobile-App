import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const connectStack = createStackNavigator();

const stylesConnect = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

function ConnectOptions() {
  return (
    <View style={stylesConnect.container}>
      <Text>connect Screen</Text>
      <Button
        title="Go to Options"
        onPress={() => navigation.navigate('Connect1')}
      />
    </View>
  );
}
  

export function ConnectScreen() {
  return (
      <connectStack.Navigator initialRouteName="ConnectOptions" headerMode='none'>
        <connectStack.Screen name="ConnectOptions" component={ConnectOptions} />
      </connectStack.Navigator>
  );
}