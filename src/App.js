import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import NamePage from './pages/auth/Register/NamePage';
import FirstPage from './pages/FirstPage';
import color from './components/styles/color';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='FirstPage' component={FirstPage} options={{headerShown:false}}/>
        <Stack.Screen name="NamePage" component={NamePage} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  };

  // const AppStack = () => {

  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='AuthStack' component={AuthStack} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
