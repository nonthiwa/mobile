import React from "react";
import { View, Text, Button, StyleSheet,ImageBackground } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route,navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const {title, steps, image, duration, complexity, affordability} = route.params;
  return (
    <View style={styles.mealItem}>
      <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>

              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  Dish: {title}
                </Text>
              </View>
            
          </View>
      </View>
          
      <View style={styles.screen}>
        <Text>Steps: {steps}</Text>
        <View style={styles.screen}>
          <Button
            title="Go Back to Categories"
            onPress={() => {
            // เขียนโค้ดเพิ่ม
            navigation.navigate("Categories");
            }}
          />
        </View>
      </View>
          
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {

    justifyContent: "center",
    alignItems: "center",
  },
  mealItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mealRow: {
    
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight:"bold"
  },
  bgImage: {
  },
});

export default MealDetailScreen;
