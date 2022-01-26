import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTab from './src/screens/Navigation/BottomTab';
import SplashScreen from './src/screens/SplashScreen/Component';
import CustomCheckbox from './src/screens/CustomCheckbox/Component';
import CustomTextInput from './src/screens/CustomTextInput/Component';
import AnimatedScreen from './src/screens/AnimatedScreen/Component';

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
          name="CustomCheckbox"
          component={CustomCheckbox}
          options={{headerShown: false}}
        />
        <StackScreen
          name="CustomTextInput"
          component={CustomTextInput}
          options={{headerShown: false}}
        />
        <StackScreen
          name="AnimatedScreen"
          component={AnimatedScreen}
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
