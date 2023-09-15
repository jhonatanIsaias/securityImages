import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Entypo,Feather } from '@expo/vector-icons';
import Profile from '../screens/profiles';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    
    <Tab.Navigator tabBarOptions={{
      tabBarStyle:{
          backgroudColor :'#121212',
          borderTopColor : 'transparent'
      },
      activeTintColor: '#6935D3',
      tabStyle:{
          paddingBottom:5,
          paddingTop:5
      }
  }}
  >
      <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:({size,color})=>(
                    <Entypo name="home" size={size} color={color}/>
                )
            }}/> 
      <Tab.Screen name="Profile" component={Profile}   options={{
                tabBarIcon:({size,color})=>(
                    <Feather name="user" size={size} color={color}/>
                )
            }}/>
    </Tab.Navigator>
  )
}