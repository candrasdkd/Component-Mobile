import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function TextInputNormal(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="#C0C0C0"
        {...props}
      />
    </View>
  );
}

export default TextInputNormal;

const styles = StyleSheet.create({
  container: {
    width: 400,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginVertical: 5,
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
