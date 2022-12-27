import React from 'react';
import { StyleSheet, View } from 'react-native';
import {WebView} from 'react-native-webview';

function CheckIn({navigation}) {
    const checkInUrl = 'https://form.jotform.com/fatforweightloss/weekly-check-in-form'
    return (
        <View style={styles.container} >  
          <WebView source={{uri: checkInUrl}}></WebView>
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

  export default CheckIn;