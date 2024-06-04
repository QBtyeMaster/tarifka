import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
const Loading = () => {
  return(
  <View style={Styles.container}>
    <LottieView 
      source={require('/Users/ulvi/Projects/ReactNative/Meals/src/assets/Animations/meal_loading1.json')}
      style={Styles.lottie}
      autoPlay
    />
  </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lottie:{
    marginTop: -150,
    width: 250,
    height: 250,
    
  }
})
export default Loading;