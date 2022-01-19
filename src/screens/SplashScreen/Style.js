import {Dimensions, StyleSheet} from 'react-native';
const d = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: 'auto',
    height: d.height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 200, height: 200},
});
