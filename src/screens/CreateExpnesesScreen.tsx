import {View} from 'react-native';
import React from 'react';
import {AddExpensesNavigationProps} from 'types';
import {AddExpensesCard} from '@components';

const CreateExpnesesScreen = ({}: AddExpensesNavigationProps) => {
  return (
    <View>
      <AddExpensesCard />
    </View>
  );
};

export default CreateExpnesesScreen;
