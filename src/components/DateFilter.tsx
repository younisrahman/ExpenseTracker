import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppText} from './common';
import {Colors} from '@config';

interface Props {
  onPressAll?: () => void;
  onPressWeek?: () => void;
  onPressMonth?: () => void;
}

const DateFilter = ({onPressAll, onPressWeek, onPressMonth}: Props) => {
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity style={styles.allButtons} onPress={onPressAll}>
        <AppText>All</AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.allButtons} onPress={onPressWeek}>
        <AppText>Weekly</AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.allButtons} onPress={onPressMonth}>
        <AppText>Monthly</AppText>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.lightGray1,
    height: hp(6),
    width: wp(90),
    borderBottomLeftRadius: heightPercentageToDP(1),
    borderBottomRightRadius: heightPercentageToDP(1),
  },
  allButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6),
    width: wp(30),
  },
});

export default DateFilter;
