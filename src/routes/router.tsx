
import { NavigationContainer } from '@react-navigation/native';
import StackComponent from '../navigations/stack';
import AuthStackComponent from '../navigations/authStack';
import React from 'react';





export default function Router() {
  const authData = true;
  return (
    <NavigationContainer>
      {authData ? <StackComponent /> : <AuthStackComponent />}
  </NavigationContainer>
  );
}

