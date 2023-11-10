import * as React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './bottomTabs';
import SendFotos from '../screens/SendFotos';
import OpenCamera from '../components/Camera';
import sendRequestSaveImage from '../API';
const Stack = createNativeStackNavigator();

export default function StackComponent() {
  return (
   
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={BottomTab}/>
          <Stack.Screen name="OpenCamera" component={OpenCamera} />
          <Stack.Screen name="SendFotos" component={SendFotos}/>
          
        </Stack.Navigator>
        
    
  );
}
