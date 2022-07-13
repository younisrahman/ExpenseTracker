import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppText} from '@common';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, FontFamily} from '@config';

interface Props {
  type: string;
  amount: number;
  description: string;
  date: Date;
}

const ExpensesCard = ({type, amount, description, date}: Props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.expensesType}>
        Expenses type: {type} Expenses
      </AppText>
      <AppText style={styles.amount}>Amount: {amount}</AppText>
      <AppText style={styles.description}>Description: {description}</AppText>
      <AppText style={styles.createAt}>Create at: {date.toString()}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: hp(13),
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginBottom: hp(1),
    padding: hp(1),
    borderRadius: hp(1),
  },
  expensesType: {
    fontFamily: FontFamily.SourceSansB,
  },
  amount: {
    marginTop: hp(1),
    fontFamily: FontFamily.SourceSansB,
  },
  description: {
    marginTop: hp(1),
    fontFamily: FontFamily.SourceSansB,
  },
  createAt: {
    marginTop: hp(1),
    fontFamily: FontFamily.SourceSansB,
  },
});

export default ExpensesCard;
