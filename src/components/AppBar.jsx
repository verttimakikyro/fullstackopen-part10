import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback, Touchable } from 'react-native'
import Constants from 'expo-constants'


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 150,
    backgroundColor: '#24292e'
    // ...
  },
  text: {
      color: 'white',
      marginTop: 70,
      marginLeft: 25,
      fontSize: 20
  }
  // ...
})

const AppBar = () => {
  return <View style={styles.container}>
        <TouchableWithoutFeedback  onPress={() => alert('Pressed')}>
            <Text style={styles.text}>Repositories</Text>
        </TouchableWithoutFeedback>
  </View>
}

export default AppBar