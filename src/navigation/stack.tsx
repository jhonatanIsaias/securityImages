import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';


const Stack = createNativeStackNavigator();

export default function StackComponent() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}