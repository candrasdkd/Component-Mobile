import {StyleSheet, Dimensions} from 'react-native';
const d = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewScroll: {marginTop: 10},
  cardContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 20,
    elevation: 6,
    borderRadius: 10,
    height: 100,
  },
  button: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    right: 9,
  },
  textBody: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 25,
    marginHorizontal: 23,
  },
  cubeButton: {position: 'absolute', right: -8.5, height: 95},
});
