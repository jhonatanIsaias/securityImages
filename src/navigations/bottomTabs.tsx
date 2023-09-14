import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ConnectDataBase from '../screens/connectDataBase';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ConnectDataBase" component={ConnectDataBase} />
    </Tab.Navigator>
  )
}