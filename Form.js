import React from 'react';
import { StyleSheet,View, Text, TextInput } from 'react-native';

function Form({navigation}) {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Name'></TextInput>
        <Text>This is the form</Text>
      </View>
    )
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

  export default Form