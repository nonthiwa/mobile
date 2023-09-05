import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MyNavigator from "./navigation/MyNavigator";
// import คอมโพเนนต์ที่จำเป็น

const MealsNavigator = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return <MyNavigator/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
