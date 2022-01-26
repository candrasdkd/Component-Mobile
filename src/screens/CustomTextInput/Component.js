import {
  SafeAreaView,
  View,
  Button,
  Alert,
  Text,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';
import TextInputNormal from '../../camponents/TextInputNormal/Component';
import styles from './Style';
import IonIcon from 'react-native-vector-icons/Ionicons';

const CustomTextInput = () => {
  // Text Input Normal
  const [text, setText] = useState('');

  // Text Input OTP
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  // Text Input Password
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Text Input Normal */}
        <View style={styles.inputNormal}>
          <Text style={styles.title}>Text Input Normal</Text>
          <TextInputNormal
            value={text}
            onChangeText={e => setText(e)}
            placeholder="Input your text"
          />
          <Button title="Submit" onPress={() => Alert.alert(`${text}`)} />
        </View>

        {/* Text Input OTP */}
        <Text style={styles.title}>Text Input OTP</Text>
        <View style={styles.inputOTP}>
          <TextInput
            ref={pin1Ref}
            value={pin1}
            onChangeText={pin1 => {
              setPin1(pin1.replace(/[^0-9]/g, ''));
              if (pin1 !== '') {
                pin2Ref.current.focus();
              }
            }}
            maxLength={1}
            keyboardType={'number-pad'}
            style={styles.customInputOTP}
          />
          <TextInput
            ref={pin2Ref}
            value={pin2}
            onChangeText={pin2 => {
              setPin2(pin2.replace(/[^0-9]/g, ''));
              if (pin2 !== '') {
                pin3Ref.current.focus();
              }
            }}
            maxLength={1}
            keyboardType={'number-pad'}
            style={styles.customInputOTP}
          />
          <TextInput
            ref={pin3Ref}
            value={pin3}
            onChangeText={pin3 => {
              setPin3(pin3.replace(/[^0-9]/g, ''));
              if (pin3 !== '') {
                pin4Ref.current.focus();
              }
            }}
            maxLength={1}
            keyboardType={'number-pad'}
            style={styles.customInputOTP}
          />
          <TextInput
            ref={pin4Ref}
            value={pin4}
            onChangeText={pin4 => setPin4(pin4.replace(/[^0-9]/g, ''))}
            maxLength={1}
            keyboardType={'number-pad'}
            style={styles.customInputOTP}
          />
        </View>
        <Button
          title="Submit"
          onPress={() =>
            Alert.alert(`YOUR PIN IS '${pin1}${pin2}${pin3}${pin4}'`)
          }
        />

        {/* Text Input Normal */}
        <View style={styles.containerPassword}>
          <Text style={styles.title}>Text Input Password</Text>
          <TextInputNormal
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder=" Enter Your Password"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            enablesReturnKeyAutomatically
            secureTextEntry={passwordVisibility}
            customStyle={styles.inputPassword}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <IonIcon
              name={rightIcon}
              size={22}
              color="#232323"
              style={styles.iconPassword}
            />
          </Pressable>
          <Button
            title="Show Value"
            onPress={() => Alert.alert(`${password}`)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomTextInput;
