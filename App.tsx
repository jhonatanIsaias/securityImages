import BottomTab from './src/navigations/bottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './src/navigations/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="StackComponents"  component={StackComponent} />
    <Tab.Screen name="BottomTabs" component={BottomTab}  options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  
    
   
  );
}

