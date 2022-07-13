import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  TextStyle,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, FontFamily, FontSize} from '@config';
import AppText from './AppText';

interface Prorp {
  title: string;
  styletext: TextStyle;
  icon: string;
  style: StyleProp<ViewStyle>;
  iconStyle: TouchableOpacityProps;
  titleStyle: TextStyle;
  styleOuterArea: StyleProp<ViewStyle>;
  onPressRightIcon: () => void;
}

const AppTextInput = ({
  title,
  styletext,
  icon,
  style,
  iconStyle,
  titleStyle,
  styleOuterArea,
  onPressRightIcon,
  ...otherProps
}: Prorp) => {
  return (
    <>
      <View style={[styles.main, styleOuterArea]}>
        {title && <AppText style={[styles.text, titleStyle]}>{title}</AppText>}
        <View style={[styles.conatiner, style]}>
          <TextInput
            style={[styles.inputtext, styletext]}
            placeholderTextColor={Colors.lightGray1}
            {...otherProps}
          />
          {icon && (
            <TouchableOpacity onPress={onPressRightIcon} style={iconStyle}>
              <Icon
                name={icon}
                size={RFValue(20)}
                style={styles.icon}
                color={Colors.lightGray}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    // marginVertical: hp(0.4),
    width: wp(85),
    alignSelf: 'center',
  },
  conatiner: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(80),
    height: hp(6),
    borderWidth: wp(0.2),
    borderRadius: hp(0.7),
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray1,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'stretch',
    fontSize: RFValue(13),
    color: Colors.darkGray,
  },
  icon: {
    color: Colors.darkGray,
    // backgroundColor: "green",
    width: wp(8),
  },
  inputtext: {
    width: wp(68),
    marginLeft: wp(1),
    minHeight: hp(6),
    fontSize: FontSize.M,
    fontFamily: FontFamily.SourceSansL,
    fontWeight: 'normal',
    color: Colors.darkGray,
    // backgroundColor: 'green',
  },
});

export default AppTextInput;
