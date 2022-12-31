import { useState, React, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Alert } from 'react-native';
import Form from './Screens/Form';
import CheckIn from './Screens/CheckIn';
import Home from './Screens/Home'
import AuthScreen from './Screens/AuthScreen'
import {firebase} from './config'
import MessagesScreen from './Screens/MessagesScreen';
import ChatScreen from './Screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState('');

  useEffect(()=> {
      const userCheck = firebase.auth().onAuthStateChanged(userExist=>{
          if(userExist)
            setUser(userExist)
          else 
            setUser("")
      })
      return () => {
      userCheck()
      console.log(user);
    }
  },[])

  return (
    
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
      {user ?
        <>
        <Stack.Screen  name='Home' component={Home} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Check In' component={CheckIn} />
        <Stack.Screen name='Chat Screen'> 
        {props => <ChatScreen {...props} user={user}/> } 
        </Stack.Screen>
        <Stack.Screen name="Messages Screen" options={() => ({headerBackVisible: false,})}> 
        {props => <MessagesScreen {...props} user={user}/>} 
        </Stack.Screen>
        </>
        :
        <Stack.Screen name="Auth" component={AuthScreen} options={() => ({
          headerBackVisible: false,
          headerShown: false})} /> 
      }
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
