import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTab from './src/screens/Navigation/BottomTab';
import SplashScreen from './src/screens/SplashScreen/Component';

const App = () => {
  const {Navigator: StackNav, Screen: StackScreen} = createStackNavigator();
  return (
    <NavigationContainer>
      <StackNav initialRouteName={'SplashScreen'}>
        <StackScreen
          name="HomeTab"
          component={HomeTab}
          options={{headerShown: false}}
        />
        <StackScreen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </StackNav>
    </NavigationContainer>
  );
};

export default App;
