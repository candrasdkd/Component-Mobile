import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import styles from './Style';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeTab');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#063970" barStyle="light-content" />
      <LottieView
        source={require('../../../assets/gif/splash.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;
