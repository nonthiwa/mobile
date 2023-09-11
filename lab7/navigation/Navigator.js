import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, Ionicons, Entypo } from '@expo/vector-icons'

import Spring from "../screens/SpringPage";
import Sequence from "../screens/SequencePage";
import Parallel from "../screens/ParallelPage";

const Tab = createBottomTabNavigator()

export default function Navigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Spring"
        screenOptions={{headerShown: false,tabBarActiveTintColor: 'orange',}}>

        <Tab.Screen
          name="Spring"
          component={Spring}
          options={{tabBarIcon: ({ size, color }) => (<SimpleLineIcons name="graph" size={size} color={color} />),}}/>

        <Tab.Screen
          name="Sequence"
          component={Sequence}
          options={{tabBarIcon: ({ size, color }) => (<Entypo name="menu" size={size} color={color} />),}}/>

        <Tab.Screen
          name="Parallel"
          component={Parallel}
          options={{tabBarIcon: ({ size, color }) => (<Ionicons name="git-merge" size={size} color={color} />),}}/>

        </Tab.Navigator>

      </NavigationContainer>
    )
  }