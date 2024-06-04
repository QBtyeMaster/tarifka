import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Styles from './CategoryCardStyle';


const CategoryCard = ({item, navigation}) => {

  const clicked = () =>  {
    navigation.navigate("Meals", {categoryName : item.strCategory})
  }


  return(
    <TouchableWithoutFeedback onPress={clicked}>
      <View style={Styles.categoryCardContainer}>
        <Image 
          style={Styles.categoryImage} 
          source={{uri:item.strCategoryThumb}} 
        />
        <View style={Styles.categoryTitleWrapper}><Text style={Styles.categoryTitle}>{item.strCategory}</Text></View>
      </View>
    </TouchableWithoutFeedback>
  )
}
export default CategoryCard;