import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import LottieView from 'lottie-react-native';

const Home = props => {
  const [changeColor, setChangeColor] = useState('#3A72E8');

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
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={changeColor} barStyle="light-content" />
      <View style={styles.viewScroll}>
        <FlatList
          keyExtractor={item => item?.id?.toString()}
          data={titleComponents}
          renderItem={({item}) => {
            return (
              <>
                <View
                  style={[styles.cardContainer, {backgroundColor: item.color}]}>
                  <LottieView
                    source={require('../../../assets/gif/gear2.json')}
                    style={{
                      position: 'absolute',
                      bottom: -15,
                      left: -10,
                      opacity: 0.5,
                      height: 150,
                    }}
                    autoPlay
                    loop
                  />
                  <Text style={styles.textBody}>{item.title}</Text>

                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(item.navigation, {
                        color: item.color,
                      })
                    }>
                    <View
                      style={{position: 'absolute', justifyContent: 'center'}}>
                      <LottieView
                        source={require('../../../assets/gif/loading4.json')}
                        style={styles.cubeButton}
                        autoPlay
                        loop
                      />
                      <IonIcons
                        name="arrow-forward-circle-sharp"
                        style={styles.button}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
