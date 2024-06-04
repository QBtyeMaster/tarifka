import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Loading from '../../components/Loading';

const Categories = ({navigation}) => {

  const {loading, data, error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")


  const categoryRender = ({item}) => {
    return (
      <CategoryCard item={item} navigation={navigation} />
    );
  };


  if(loading){
    return <Loading />
  }
  if(error){
    return <Text>{error}</Text>
  }
  
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: "#F7FCE3"}}>
      <FlatList 
        data={data} 
        renderItem={categoryRender} 
        keyExtractor={(item) => item.idCategory } 
      />
    </SafeAreaView>
  );
}
export default Categories;