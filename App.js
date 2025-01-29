import { StyleSheet, View } from 'react-native';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screens/Profile';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: "Login Screen" }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Welcome Screen" }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile Screen" }} />
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
