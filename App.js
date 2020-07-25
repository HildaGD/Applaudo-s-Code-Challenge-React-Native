/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,

} from 'react-native';

import Home from './App/containers/Home';
import Anime from './App/containers/Anime'
import { Provider as PaperProvider } from 'react-native-paper';
import {
  NavigationContainer, DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const Stack = createStackNavigator();
const scheme = useColorScheme();
function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />

      <Stack.Screen
        name="Anime"
        component={Anime}
        options={{ title: 'Anime' }}
      />

    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <NavStack />
          {/* <PaperProvider>
          <SafeAreaView>
            
          </SafeAreaView>
        </PaperProvider> */}
        </NavigationContainer>
      </AppearanceProvider>



    </>
  );
};


export default App;
