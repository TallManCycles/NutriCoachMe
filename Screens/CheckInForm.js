import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class CheckInForm extends Component {
  render() {
    return (
      <View>
        <Text>CheckInForm</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        margin: 25,
        justifyContent: 'flex-start',
        alignContent: 'center',
}})