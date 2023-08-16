import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>
    </View>
  )
}

export default ContactScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});