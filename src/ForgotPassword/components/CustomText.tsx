import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface CustomTextProps {
  style?: TextStyle;
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomText;
