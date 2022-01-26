import {StyleSheet, Dimensions} from 'react-native';
const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;

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
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A72E8',
    margin: 5,
    borderRadius: 15,
  },
});
