import React from "react";
// import library ที่จำเป็น
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FiltersScreen from "../screens/FiltersScreen";

// สร้าง navigator ตามโจทย์กำหนด
const MealsNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainNavigator = createDrawerNavigator();
const FavsNavigator = createNativeStackNavigator();
const FiltersNavigator = createNativeStackNavigator();

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
function MealNavigator() {
  return (
    <MealsNavigator.Navigator initialRouteName="Categories" screenOptions={{ headerStyle: { backgroundColor: "#4a148c", },headerTintColor:"white", }}>
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
       options={{title: "Meal Categories"
                }} />
      <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen}
      options={({route})=>({title:route.params.categoryTitle})
                }/>
      <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen}
      options={({route})=>({title:route.params.title})
    }/>
    </MealsNavigator.Navigator>
  );
}

function FavNavigator(){
  return(
    <FavsNavigator.Navigator screenOptions={{ headerStyle: { backgroundColor: "#4a148c", },headerTintColor:"white", }}>
      <FavsNavigator.Screen name="Favorite" component={FavoriteScreen}/>
      <FavsNavigator.Screen name="MealDetail" component={MealDetailScreen} options={({route})=>({title:route.params.title})}/>
    </FavsNavigator.Navigator>
  );
}

function MealsFavTabNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Meals" component={MealNavigator}
       options={{tabBarIcon: ({ color, size }) => {return <Ionicons name="ios-restaurant" size={size} color={color} />;},}}/>
      <Tab.Screen name="Favorites" component={FavNavigator} 
      options={{tabBarIcon: ({ color, size }) => {return <Ionicons name="ios-star" size={size} color={color} />;},}}/>
    </Tab.Navigator>
  );
}

function FilterNavigator(){
  return (
    <FiltersNavigator.Navigator>
      <FiltersNavigator.Screen name="Filters" component={FiltersScreen}/>
    </FiltersNavigator.Navigator>
  );
}


// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{headerShown:false}}>
        <MainNavigator.Screen name="MealsFav" component={MealsFavTabNavigator} options={{drawerLabel:"Meals"}}/>
        <MainNavigator.Screen name="Filters" component={FilterNavigator}/>
      </MainNavigator.Navigator>
  </NavigationContainer>
  );
}
