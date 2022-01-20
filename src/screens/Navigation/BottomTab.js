import React from 'react';
import HomeScreen from '../Home/Component';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeTab = props => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home-sharp';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3A72E8',
        tabBarInactiveTintColor: '#000',
        headerShown: false,
        tabBarStyle: {paddingBottom: 10},
        tabBarLabelStyle: {
          position: 'absolute',
          bottom: -5,
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Custom',
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
