import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, FontFamily, FontSize} from '@config';
import {AppText} from '@common';
interface AppButtonProp {
  title?: string;
  textStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const ButtonGradient: React.FC<AppButtonProp> = ({
  title,
  textStyle,
  style,
  onPress,
}) => {
  return (
    <View style={[styles.buttonStyle, style]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.primary, Colors.primary2]}
        style={[styles.gradientStyle]}>
        <TouchableOpacity onPress={onPress} style={styles.touchArea}>
          <AppText style={[styles.buttonText, textStyle]}>{title}</AppText>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
    fontFamily: FontFamily.SourceSansB,
    fontSize: FontSize.M,
  },
  gradientStyle: {
    borderRadius: hp(0.7),
    height: '100%',
    width: '100%',
    elevation: 3,
  },
  touchArea: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp(85),
    height: hp(6),
    borderRadius: hp(0.7),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.44,
    shadowRadius: 3.32,
    elevation: 3,
    // backgroundColor: Colors.primary,
  },
});

export default ButtonGradient;
