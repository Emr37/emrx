import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CalcScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CalcScreen</Text>
    </View>
  )
}

export default CalcScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
