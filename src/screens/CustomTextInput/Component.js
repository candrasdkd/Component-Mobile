import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import TextInputNormal from '../../camponents/TextInputNormal/Component';
import Styles from './Style';
const CustomTextInput = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={Styles.container}>
      <TextInputNormal
        value={text}
        onChangeText={e => setText(e)}
        placeholder="Ini placeholder"
      />
    </SafeAreaView>
  );
};

export default CustomTextInput;
