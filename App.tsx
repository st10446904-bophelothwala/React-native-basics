import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './Screens/MainScreen';
import AddScreen from './Screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Main">
         <Stack.Screen name="Main" component={MainScreen} />
         <Stack.Screen name="Add" component={AddScreen} />
       </Stack.Navigator>
      </NavigationContainer>
  );
}
