import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals'
import MealDetail from './pages/MealDetail';


const Router = () => {
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Categories" 
          component={Categories} 
          options={{
            headerStyle:{
            backgroundColor:"#FAF7BA"
            },
            headerTintColor:"#BF7C2A",
          }} 
        />
        <Stack.Screen 
          name="Meals" 
          component={Meals} 
          options={{
            headerStyle:{
            backgroundColor:"#FAF7BA"
            },
            headerTintColor:"#BF7C2A",
          }} 
        />
        <Stack.Screen 
          name="MealDetail" 
          component={MealDetail} 
          options={{
            headerShown: false
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;


