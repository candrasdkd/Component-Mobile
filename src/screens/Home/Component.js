import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import Colors from '../../constants/Colors';
import styles from './Style';
import LottieView from 'lottie-react-native';

const Home = props => {
  const [changeColor, setChangeColor] = useState('#3A72E8');
  const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;
  const CARD_WIDTH = Dimensions.get('window').width * 0.8;
  const CARD_HEIGHT = Dimensions.get('window').height * 0.7;

  // For Rendering Flatlist
  const titleComponents = [
    {
      id: 1,
      title: 'Custom Checkbox',
      color: '#3A72E8',
      navigation: 'CustomCheckbox',
    },
    {
      id: 2,
      title: 'Custom Text Input',
      color: '#46CC9B',
      navigation: 'CustomTextInput',
    },
    {
      id: 3,
      title: 'Custom Button',
      color: '#FC8823',
      navigation: 'CustomButton',
    },
    {
      id: 4,
      title: 'Custom Header',
      color: '#cb6ffc',
      navigation: 'CustomHeader',
    },
    {
      id: 5,
      title: 'Custom Modal',
      color: 'crimson',
      navigation: 'CustomModal',
    },
    {
      id: 6,
      title: 'Custom Animated',
      color: 'crimson',
      navigation: 'CustomAnimated',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={changeColor} barStyle="light-content" />
      <View style={styles.viewScroll}>
        <ScrollView
          horizontal // Change the direction to horizontal
          pagingEnabled // Enable paging
          decelerationRate={0} // Disable deceleration
          snapToInterval={CARD_WIDTH + 10} // Calculate the size for a card including marginLeft and marginRight
          snapToAlignment="center" // Snap to the center
          contentInset={{
            // iOS ONLY
            top: 0,
            bottom: 0,
            left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
            right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
          }}
          contentContainerStyle={{
            // contentInset alternative for Android
            paddingHorizontal:
              Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
          }}>
          {titleComponents.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                props.navigation.navigate(item.navigation, {
                  color: item.color,
                })
              }>
              <View style={styles.cardStyle}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
