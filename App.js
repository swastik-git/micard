import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import { Avatar } from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.insideContainer}>
        <Avatar.Image size={150} style={{ alignSelf: "center", borderColor: "#fff", borderWidth: 3 }} source={require('./assets/images/photoSd.jpeg')} />

        {/* <Avatar.Icon size={24} icon="folder" /> */}
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.name}>Swastik Dolas</Text>
          <Text style={styles.position}>React-Native Developer</Text>
        </View>

        <Text style={{ alignSelf: "center" }}>___________________________</Text>
        <View style={{ marginTop: 10 }} />

        <Icon.Button
          name="call"
          backgroundColor="#DDD"
          color="#3e7eb0"
          size={30}
          onPress={() => alert("This Functionality not avaliable now")}
          iconStyle={{ margin: 10 }}>
          +91 7879996890
        </Icon.Button>
        <View style={{ marginTop: 10 }} />
        <Icon.Button
          name="email"
          backgroundColor="#DDD"
          color="#3e7eb0"
          size={30}
          onPress={() => alert("This Functionality not avaliable now")}
          iconStyle={{ margin: 10 }}>
          Swastikdolas123@gmail.com
        </Icon.Button>
      </View>
    </SafeAreaView>
  )
}

export default App;


// styling 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e7eb0',
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