import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollContainer: {paddingHorizontal: 20},
  backButton: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
  resetButton: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '5%',
    marginTop: 20,
    marginRight: 37,
    borderRadius: 10,
  },
  titleReset: {
    color: 'crimson',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  title: {
    color: 'gold',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 25,
    letterSpacing: 1,
  },
  box: {
    alignSelf: 'center',
    padding: 20,
    width: '90%',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: 3,
  },
  textBody: {fontWeight: '500', letterSpacing: 1},
});
