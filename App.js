import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Form from './Form';
import CheckIn from './CheckIn';
import Home from './Home'

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
