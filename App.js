import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.insideContainer}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.name}>Swastik Dolas</Text>
          <Text style={styles.position}>React-Native Developer</Text>
        </View>

        <Text style={{ alignSelf: "center" }}>___________________________</Text>
        <View style={{ marginTop: 10 }} />

        <Icon.Button
          name="call"
          backgroundColor="#DDD"
          color="#000"
          iconStyle={{ margin: 10 }}>
          +91 7879996890
        </Icon.Button>
        <View style={{ marginTop: 10 }} />
        <Icon.Button
          name="email"
          backgroundColor="#DDD"
          color="#000"
          iconStyle={{ margin: 10 }}>
          Swastikdolas123@gmail.com
        </Icon.Button>
      </View>
    </View>
  )
}

export default App;


// styling 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26734d',
    justifyContent: "center",
  },
  insideContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: "stretch",
    justifyContent: "center",
    borderColor: "#000",
    padding: 20,
    borderWidth: 1,
  },
  name: {
    fontSize: 45,
    fontFamily: "DancingScript-Bold"
  },
  position: {
    fontSize: 18,
    textTransform: "capitalize",
    // fontFamily:"StyleScript-Regular"
  },
  styleForImage: {},
  styleForCard: {},
})