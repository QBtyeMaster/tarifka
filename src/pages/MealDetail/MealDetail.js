import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useFetch from '../../hooks/useFetch/useFetch';
import Styles from './MealDetailStyle';
import Loading from '../../components/Loading';

const MealDetail = props => {
  const idMeal = props.route.params.item.idMeal;
  let meal = null;

  const {loading, data, error} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal,
  );
  meal = data[0];
  let i = true;
  let x = 1;
  let ingredients = [];
  if (meal != null) {
    while (i) {
      if (meal['strIngredient' + x] != '') {
        ingredients.push(
          meal['strIngredient' + x] + ' ' + meal['strMeasure' + x],
        );
        x = x + 1;
      } else {
        i = false;
      }
    }
  }

  const handlePress = async () => {
    const youtubeWebUrl = meal.strYoutube;
    try {
      await Linking.openURL(youtubeWebUrl);
    } catch (error) {
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={{flex: 1, backgroundColor: '#F7FCE3'}}>
      <StatusBar barStyle="light-content" />
      <View style={Styles.mealImageContainer}>
        <Image
          style={Styles.headerMealImage}
          source={{uri: meal.strMealThumb}}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['#00000090', '#00000000']}
          style={Styles.headerImageMask}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
        />
        <View style={Styles.headerMealTitleWrapper}>
          <Text style={Styles.headerMealTitle}>{meal.strMeal}</Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <ScrollView style={Styles.mealInfoContainer}>
          <View style={{marginBottom: 30}}>
            <View>
              <Text style={Styles.maeldetailHeadTitle}>Ingredients</Text>
            </View>
            <View>
              {ingredients.map((ingredient, index) => (
                <Text style={Styles.ingredientTitle} key={index}>
                  {ingredient}
                </Text>
              ))}
            </View>
          </View>
          <View>
            <View>
              <Text style={Styles.maeldetailHeadTitle}>Instructions</Text>
            </View>
            <View>
              <Text style={Styles.instructionsTitle}>
                {meal.strInstructions}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={Styles.youtubeButton} onPress={handlePress}>
              <Text style={Styles.youtubeButtonText}>Watch on Youtube</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default MealDetail;
