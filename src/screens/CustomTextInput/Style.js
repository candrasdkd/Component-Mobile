import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
  },
  inputNormal: {
    marginVertical: 40,
  },
  inputOTP: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  customInputOTP: {
    height: 60,
    width: 60,
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    borderRadius: 50,
    marginHorizontal: 8,
    backgroundColor: '#c0c0c0',
  },
  containerPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginVertical: 25,
  },
  inputPassword: {
    backgroundColor: '#c0c0c0',
    width: 350,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  iconPassword: {
    position: 'absolute',
    bottom: 17,
    left: 130,
  },
});
