import React from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  style?: ViewStyle;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ style, ...rest }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#999"
      autoCapitalize="none"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 50,
    color: '#333',
    backgroundColor: '#fff',
  },
});

export default CustomTextInput;
