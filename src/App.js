import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FirstPage from './pages/FirstPage';
import RegisterPage1 from './pages/auth/Register/RegisterPage1';
import RegisterPage2 from './pages/auth/Register/RegisterPage2';
import RegisterPage3 from './pages/auth/Register/RegisterPage3';
import RegisterPage4 from './pages/auth/Register/RegisterPage4';
import RegisterPage5 from './pages/auth/Register/RegisterPage5';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterPage1"
        component={RegisterPage1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterPage2"
        component={RegisterPage2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterPage3"
        component={RegisterPage3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterPage4"
        component={RegisterPage4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterPage5"
        component={RegisterPage5}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    
  );
};

// const AppStack = () => {

// }

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Router() {
  return(
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default Router;
