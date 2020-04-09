import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


// Import Pages
import { ContactScreen } from './pages/ContactScreen.js';
import { DonateScreen } from './pages/DonateScreen.js';
import { HomeScreen } from './pages/HomeScreen.js';
import { ConnectScreen } from './pages/ConnectScreen.js';
import { VideoScreen } from './pages/VideoScreen.js';

const Tab = createBottomTabNavigator();

function TopBar() {
  return (
    <View style={styles.TopBar}>
      <Image
        style={styles.Logo}
        source={require('./assets/IglesiaVidaLogo.png')}
      />
      <Text>Hello</Text>
    </View>
  );
}

export default function App() {
    return (
      <NavigationContainer>
        <TopBar/>
        <Tab.Navigator 
          initialRouteName="Home"
          tabBarOptions={{
            style: {
              backgroundColor: '#fff',
              borderStyle: 'none'
            },
            showLabel: false,
            activeTintColor: '#50B33E',
            inactiveTintColor: '#3C3C3C',
          }}
        >
          <Tab.Screen 
            name="Connect" 
            component={ConnectScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="slideshare" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Donate"
            component={DonateScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="donate" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Video" 
            component={VideoScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="folder-video" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Contact" 
            component={ContactScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="share" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  TopBar: {
    backgroundColor: '#3C3C3C',
    width: '100%',
    height: '14%',
    margin: 0,
    padding: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignContent: "center",
    justifyContent: "center"
  },
  Logo: {
    alignSelf: "center",
    marginTop: 40,
    width: 200,
    height: 300,
    resizeMode: "contain"
  }
});
