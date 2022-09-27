import React from 'react'
import { View, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>

      </View>
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26734d',
    justifyContent: "center",
  },
  insideContainer: {
    flexDirection: 'column',
    // alignSelf: "center",
    // justifyContent: "center",
    borderColor: "#000",
    // padding: 20,
    borderWidth: 1,
  },
  styleForImage: {},
  styleForCard: {},
})