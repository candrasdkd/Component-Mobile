import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../Home/Component';
import AnimatedScreen from '../AnimatedScreen/Component';
import Icon, {Icons} from '../../camponents/Icons/Icons';
import Colors from '../../constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.primary : Colors.primaryLite}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};
const HomeTab = () => {
  const TabArr = [
    {
      route: 'HomeScreen',
      label: 'Custom Component',
      type: Icons.Ionicons,
      activeIcon: 'grid',
      inActiveIcon: 'grid-outline',
      component: HomeScreen,
    },
    {
      route: 'AnimatedScreen',
      label: 'Custom Animated',
      type: Icons.MaterialCommunityIcons,
      activeIcon: 'animation-play',
      inActiveIcon: 'animation-play-outline',
      component: AnimatedScreen,
    },
  ];

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default HomeTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
