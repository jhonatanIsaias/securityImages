import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SecurityToken from '../screens/SecurityToken';
import InicialPage from '../screens/InicialPage';


const Stack = createNativeStackNavigator();

export default function StackComponent() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="InicialPage" component={InicialPage}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="SecurityToken" component={SecurityToken}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
