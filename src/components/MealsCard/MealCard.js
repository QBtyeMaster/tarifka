import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Styles from './MealCardStyle';


const MealCard = ({item, navigation}) => {

  const clicked = () =>  {
    navigation.navigate("MealDetail", {item})
  }


  return(
    <TouchableWithoutFeedback onPress={clicked}>
      <View style={Styles.mealCardContainer}>
        <Image 
          style={Styles.mealImage} 
          source={{uri:item.strMealThumb}} 
          resizeMode="cover"
        />
        <View style={Styles.mealInfo}><Text style={Styles.mealInfoText}>{item.strMeal}</Text></View>
      </View>
    </TouchableWithoutFeedback>
  )
}
export default MealCard;