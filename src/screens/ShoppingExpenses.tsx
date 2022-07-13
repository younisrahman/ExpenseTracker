import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store';
import {CommonList, DateFilter} from '@components';
import moment from 'moment';

const ShoppingExpenses = () => {
  const {allExpenses} = useSelector((state: RootState) => state.Expense);
  let shoppingData = allExpenses.filter(item => item.type === 'shopping');
  const selectedTab = useRef('all');
  useEffect(() => {
    shoppingData = allExpenses.filter(item => item.type === 'shopping');
    setData(shoppingData);
  }, [allExpenses]);

  const [data, setData] = useState(shoppingData);
  const filterhandler = (val: string) => {
    if (val === 'all') {
      selectedTab.current = 'all';
      setData(shoppingData);
    }
    if (val === 'week') {
      const week = shoppingData.filter(item => {
        if (
          moment(item.createAt).isBetween(
            moment(new Date()).subtract(7, 'days'),
            new Date().toISOString(),
          )
        ) {
          return item;
        }
      });
      selectedTab.current = 'week';
      setData(week);
    }
    if (val === 'month') {
      const month = shoppingData.filter(item => {
        if (
          moment(item.createAt).isBetween(
            moment(new Date()).subtract(30, 'days'),
            new Date().toISOString(),
          )
        ) {
          return item;
        }
      });
      selectedTab.current = 'month';
      setData(month);
    }
  };

  return (
    <>
      <DateFilter
        onPressAll={() => filterhandler('all')}
        onPressWeek={() => filterhandler('week')}
        onPressMonth={() => filterhandler('month')}
        selected={selectedTab.current}
      />
      <CommonList data={data} />
    </>
  );
};

export default ShoppingExpenses;
