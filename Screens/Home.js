import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, Modal, Image, Linking, TextInput } from 'react-native';
import {WebView} from 'react-native-webview';
import MainLogo from '../assets/header.jpg';
import {firebase} from '../config'

function Home({ navigation }) { 
    const onboardingUrl = 'https://form.jotform.com/fatforweightloss/new-client-intake-form';
    const googleSheetURL = 'https://docs.google.com/spreadsheets/d/1SwmuMEGEuiamZ6P36uoR8JVbldfV42JKNpRLJY4_kwk/edit#gid=355762032';
    const contentUrl = 'https://fatforweightloss.thrivecart.com/l/11-nutrition-coaching/';
    const consultationLink = 'https://calendly.com/fatforweightloss/monthly-client-book-in-consultation';
  
    const [onboadingFormVisible, SetOnboardingFormVisible] = useState(false)
    const [filledInOnboarding, SetFilledInOnboarding] = useState(false)
    const [consultationVisible, SetConsultationVisible] = useState(false)
  
    const openOnboarindFormHandler = () => {
      SetOnboardingFormVisible(true)
    }
  
    const openProgramHandler = () => {
      Linking.openURL(googleSheetURL)
    }
  
    const openContentHandler = () => {
      Linking.openURL(contentUrl)
    }
  
    const openConsultationHandler = () => {
      SetConsultationVisible(true)
    }

    const userSignOut = async () => {
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });

    }
  
  
    return (   
      <View style={styles.container}>
        <Image style={styles.image} source={MainLogo} ></Image>
        
        {/* Onboarding Form */}
        {!filledInOnboarding && <View style={styles.viewstyles} collapsable={filledInOnboarding}>
        <Button 
          title='Onboarding Form' 
          onPress={openOnboarindFormHandler}/>
        <Modal
          visible={onboadingFormVisible}
          presentationStyle='pageSheet'
          animationType={'slide'}
          onRequestClose={() => {
            SetOnboardingFormVisible(false)
            SetFilledInOnboarding(true)
          }}>
            <WebView source={{uri: onboardingUrl}}></WebView>
        </Modal>
        </View> }
  
        {/* Weekly Check In */}
        <Text style={{alignContent: 'center', textAlign: 'center', marginTop: 15}}>{daysUntilSunday()} days until Check In Day (Sunday)</Text>
        <View style={styles.viewstyles}>        
        <Button
          title="Weekly Check In"
          onPress={() => navigation.navigate('Check In')}
        />     
        </View>
        
        
        {/* My Google Sheet */}
        <View style={styles.viewstyles}>
        <Button 
          title='Meal Plan' 
          onPress={openProgramHandler}/>
        </View>
  
        {/* Learning Content */}
        <View style={styles.viewstyles}>
        <Button 
          title='Learning Content' 
          onPress={openContentHandler}/>
        </View>
  
        {/* Session Links */}
        <View style={styles.viewstyles}>
        <Button 
          title='Book In A Video Session' 
          onPress={openConsultationHandler}/>
          <Modal
          visible={consultationVisible}
          presentationStyle='pageSheet'
          animationType={'slide'}
          onRequestClose={() => SetConsultationVisible(false)}>
            <WebView source={{uri: consultationLink}}></WebView>
        </Modal>
  
        <View style={styles.viewstyles}>
        <Button
          title="Exercises"
          onPress={() => navigation.navigate('Form')}
        />
        </View>

        <View style={styles.viewstyles}>
        <Button
          title="Messages"
          onPress={() => navigation.navigate('Messages Screen')}
        />
        </View>

        <View style={styles.viewstyles}>
        <Button
          title="ChatScreen"
          onPress={() => navigation.navigate('Chat Screen')}
          // onPress={() => navigation.navigate(
          //   'ChatScreen',
          //   { user },
          // )}
        />
        </View>

        <View style={styles.viewstyles}>
        <Button
          title="Sign Out"
          onPress={userSignOut}
        />
        </View>
        </View>
      </View> 
    );
  }

  function daysUntilSunday() {
    // Get the current day of the week
    var currentDay = new Date().getDay();
  
    // If it's already Sunday, the number of days until Sunday is 7
    if (currentDay === 0) {
      return 7;
    }
  
    // Otherwise, return the number of days until Sunday
    return 7 - currentDay;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 20,
      justifyContent: 'flex-start',
      alignContent: 'center',
      backgroundColor: '#ffffff'
    },
    text: {
      margin: 10,
      fontSize: 15,
      textAlign: 'center'
    },
    image: {
      width: '100%',
      height: 120
    },
    viewstyles: {
      marginTop: 20
    }
  });

  export default Home;