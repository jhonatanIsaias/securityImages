import * as React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './bottomTabs';
import SendFotos from '../screens/SendFotos';
import DateScreen from '../screens/Date';
const Stack = createNativeStackNavigator();

export default function StackComponent() {
  return (
   
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BottomTab}/>
          <Stack.Screen name="SendFotos" component={SendFotos}/>
          <Stack.Screen name="DateScreen" component={DateScreen}/>
        </Stack.Navigator>
        
    
  );
}
