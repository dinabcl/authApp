import { StyleSheet, View } from 'react-native';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screens/Profile';
import AllProduct from './screens/AllProducts';
import AllProducts from './screens/AllProducts';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{ title: "Login Screen" }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Welcome Screen" }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile Screen" }} /> */
        <Stack.Screen name="AllProducts" component={AllProducts} options={{ title: "All Prodcts Screen" }}/>
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: "Screen 1" }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: "Screen 2" }} />
        <Stack.Screen name="Screen3" component={Screen3} options={{ title: "Screen 3" }} />
        <Stack.Screen name="Screen4" component={Screen4} options={{ title: "Screen 4" }} />
        <Stack.Screen name="Screen5" component={Screen5} options={{ title: "Screen 5" }} />
      </Stack.Navigator>
    </NavigationContainer>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
