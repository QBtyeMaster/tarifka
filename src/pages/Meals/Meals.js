import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import MealCard from '../../components/MealsCard/';
import Loading from '../../components/Loading';

const Meals = (props) => {
  
  const {loading, data, error} = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+props.route.params.categoryName)

  const renderData = ({item}) => {
    return <MealCard item={item} navigation={props.navigation} />
  }

  if(loading){
    return <Loading />
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderData}
        keyExtractor={(item) => item.idMeal}
      />
    </SafeAreaView>
  )

}
export default Meals;