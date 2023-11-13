import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './pages/login/LoginScreen'
import HomeScreen from './pages/home/HomeScreen'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerStyle: {
          backgroundColor: '#14487c',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
      >
      <Drawer.Screen name="home" component={HomeScreen} options={homeOptions} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='login'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green'
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={loginOptions}
        />
        <Stack.Screen
          name="drawer"
          component={DrawerMenu}
          options={drawerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const loginOptions = {
  headerShown: false,
};

const drawerOptions = {
  headerShown: false,
};

const homeOptions = {
  title: 'Home'
}