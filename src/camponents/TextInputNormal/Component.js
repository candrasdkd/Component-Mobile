import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function TextInputNormal(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={props.customStyle ? props.customStyle : styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="#393939"
        {...props}
      />
    </View>
  );
}

export default TextInputNormal;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  textInput: {
    width: 350,
    backgroundColor: '#c0c0c0',
    color: '#000',
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 10,
  },
});
