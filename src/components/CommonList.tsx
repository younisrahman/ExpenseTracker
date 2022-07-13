import React from 'react';
import {TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {ExpensesCard} from '@components';

import {heightPercentageToDP} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@config';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from 'types';
import {itemProps} from '../feature/Expenses';

interface Props {
  data: itemProps[];
}
const CommonList = ({data}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingTop: heightPercentageToDP(2.3),
          paddingBottom: heightPercentageToDP(10),
        }}
        renderItem={({item}) => {
          return (
            <ExpensesCard
              type={item.type}
              amount={item.amount}
              description={item.description}
              date={item.createAt}
            />
          );
        }}
      />

      <TouchableOpacity
        style={styles.addExpenses}
        onPress={() => navigation.navigate('AddExpenses')}>
        <Icons name="ios-add" size={RFValue(30)} color={Colors.white} />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  addExpenses: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: heightPercentageToDP(6),
    height: heightPercentageToDP(6),
    borderRadius: heightPercentageToDP(3),
    bottom: heightPercentageToDP(2),
    right: heightPercentageToDP(2),
    backgroundColor: 'green',
  },
});

export default CommonList;
