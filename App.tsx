
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './src/routes/router';


const Stack = createNativeStackNavigator();

export default function App() {
 
 return (
  <Router />
 )
}

