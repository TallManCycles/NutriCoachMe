import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Alert } from 'react-native';
import Form from './Screens/Form';
import CheckIn from './Screens/CheckIn';
import Home from './Screens/Home'
import AuthScreen from './Screens/AuthScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Home">
        <Stack.Screen  name='Home' component={Home} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Check In' component={CheckIn} />
        <Stack.Screen name='AuthScreen' component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#ffffff'
  }
});
