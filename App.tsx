
import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './src/navigations/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="StackComponents"  component={StackComponent} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

