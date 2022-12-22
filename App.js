import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Alert } from 'react-native';
import Form from './Form';
import CheckIn from './CheckIn';
import Home from './Home'

import * as firebase from "firebase/app";
import * as auth from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSK8LUhzod8aACyv7QEvX6EWDc_KTYGPk",
  authDomain: "nutricoachme-native.firebaseapp.com",
  databaseURL: "https://nutricoachme-native-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nutricoachme-native",
  storageBucket: "nutricoachme-native.appspot.com",
  messagingSenderId: "57367713349",
  appId: "1:57367713349:web:90285454aac96e9087f52c",
  measurementId: "G-65JRMLDDLE"
};

let app = firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen  name='Home' component={Home} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Check In' component={CheckIn} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#ffffff'
  }
});
