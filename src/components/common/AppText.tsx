import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';
import {Colors, FontFamily, FontSize} from '@config';
type AppTextProp = {
  children?: React.ReactNode;
  style?: object;
} & TextProps;
const AppText: React.FC<AppTextProp> = ({children, style, ...otherProps}) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontFamily: FontFamily.SourceSansL,
    fontSize: FontSize.S,
  },
});

export default AppText;
