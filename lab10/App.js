import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Example04 from "./examples/Example04";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const StackNavigator = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Example02"
            screenOptions={{headerStyle: {backgroundColor: "lightblue"}}}
        >
          <StackNavigator.Screen name="Example02" component={Example02}
            options={{
                title: "Add Student"
            }}
            />
            <StackNavigator.Screen name="Example01" component={Example01}
            options={{
                title: "Student List"
            }}
            />
            <StackNavigator.Screen name="Example03" component={Example03}
            options={{
                title: "Student Info"
            }}
            />
        </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
