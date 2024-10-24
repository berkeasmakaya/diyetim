import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import {store} from './redux/store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import FirstPage from './pages/FirstPage';

import InfoPage1 from './pages/InfoPages/InfoPage1';
import InfoPage2 from './pages/InfoPages/InfoPage2';
import InfoPage3 from './pages/InfoPages/InfoPage3';
import InfoPage4 from './pages/InfoPages/InfoPage4';
import InfoPage5 from './pages/InfoPages/InfoPage5';
import InfoPage6 from './pages/InfoPages/InfoPage6';
import InfoPage7 from './pages/InfoPages/InfoPage7';
import InfoPage8 from './pages/InfoPages/InfoPage8';
import RegisterPage from './pages/auth/Register/RegisterPage';
import LoginPage from './pages/auth/Login/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import color from './styles/color';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SelectFoodPage from './pages/SelectFoodPage';
import FoodDetailPage from './pages/FoodDetailPage';
import MealDetailPage from './pages/MealDetailPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainPageOption = () => ({
  tabBarIcon: ({focused}) => (
    <Icon name="home" size={30} color={focused ? color.themeColor : '#797575' }/> 
  ),
})
// const MyProgramOption = () => ({
//   tabBarIcon: ({focused}) => (
//     <Icon name="clipboard-text-multiple-outline" size={30} color={focused ? color.themeColor : '#797575' }/> 
//   ),
// })
const ChartPageOption = () => ({
  tabBarIcon: ({focused}) => (
    <Icon name="chart-bar" size={30} color={focused ? color.themeColor : '#797575' }/> 
  ),
})
const ProfilePageOption = () => ({
  tabBarIcon: ({focused}) => (
    <Icon name="account" size={30} color={focused ? color.themeColor : '#797575' }/> 
  ),
})


const InfoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InfoPage1"
        component={InfoPage1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPage2"
        component={InfoPage2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPage3"
        component={InfoPage3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPage4"
        component={InfoPage4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPage5"
        component={InfoPage5}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPage6"
        component={InfoPage6}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPage7"
        component={InfoPage7}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPage8"
        component={InfoPage8}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoStack"
        component={InfoStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainPagesStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='MainPage' component={MainPage} options={{headerShown:false}}/>
      <Stack.Screen name='SelectFoodPage' component={SelectFoodPage} options={{headerShown:false}}/>
      <Stack.Screen name='FoodDetailPage' component={FoodDetailPage} options={{headerShown:false}}/>
      <Stack.Screen name='MealDetailPage' component={MealDetailPage} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const AppStack = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false, 
        tabBarStyle:{margin:10,  borderRadius:20,},
        tabBarShowLabel:false,
        
      }}>
      <Tab.Screen 
        name="MainPagesStack" 
        component={MainPagesStack} 
        options={MainPageOption}/>
      {/* <Tab.Screen 
        name="MyProgram" 
        component={MainPage} 
        options={MyProgramOption}/> */}
      <Tab.Screen 
        name="ChartPage" 
        component={MainPage} 
        options={ChartPageOption}/>
      <Tab.Screen 
        name="ProfilPage" 
        component={ProfilePage}
        options={ProfilePageOption}/>
    </Tab.Navigator>
  );
};

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppAuthStack"
          component={AppAuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Router() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default Router;
