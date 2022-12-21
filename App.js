import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, Modal, Image, ScrollView, Linking } from 'react-native';
import {WebView} from 'react-native-webview';
import MainLogo from './assets/header.jpg'

export default function App() {

  const onboardingUrl = 'https://form.jotform.com/fatforweightloss/new-client-intake-form';
  const checkInUrl = 'https://form.jotform.com/fatforweightloss/weekly-check-in-form'
  const googleSheetURL = 'https://docs.google.com/spreadsheets/d/1SwmuMEGEuiamZ6P36uoR8JVbldfV42JKNpRLJY4_kwk/edit#gid=355762032';
  const contentUrl = 'https://fatforweightloss.thrivecart.com/l/11-nutrition-coaching/';
  const consultationLink = 'https://calendly.com/fatforweightloss/monthly-client-book-in-consultation';

  const [onboadingFormVisible, SetOnboardingFormVisible] = useState(false)
  const [filledInOnboarding, SetFilledInOnboarding] = useState(false)
  const [checkInVisible, SetCheckInVisible] = useState(false)
  const [consultationVisible, SetConsultationVisible] = useState(false)

  const openOnboarindFormHandler = () => {
    SetOnboardingFormVisible(true)
  }

  const openCheckInHandler = () => {
    SetCheckInVisible(true)
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
      
      {/* Check Ins */}
      <View style={styles.viewstyles}>
        <Text style={styles.text}>CHECK IN: SUNDAY</Text>
      <Button 
        title='Weekly Check In' 
        onPress={openCheckInHandler}/>
      <Modal
        visible={checkInVisible}
        presentationStyle='pageSheet'
        animationType={'slide'}
        onRequestClose={() => SetCheckInVisible(false)}>
          <WebView source={{uri: checkInUrl}}></WebView>
      </Modal>
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
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    margin: 25,
    justifyContent: 'flex-start',
    alignContent: 'center',
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
