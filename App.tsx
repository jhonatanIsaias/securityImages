
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './src/routes/router';
import { AuthProvider } from './src/contexts/AuthContext';
import React from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
 
 return (
  
        <Router />
  

 )
}

