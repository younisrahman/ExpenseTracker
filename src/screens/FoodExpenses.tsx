import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store';
import {CommonList, DateFilter} from '@components';
import moment from 'moment';

const FoodExpenses = () => {
  const {allExpenses} = useSelector((state: RootState) => state.Expense);
  const selectedTab = useRef('all');
  let foodData = allExpenses.filter(item => item.type === 'food');
  useEffect(() => {
    foodData = allExpenses.filter(item => item.type === 'food');
    setData(foodData);
  }, [allExpenses]);

  const [data, setData] = useState(foodData);
  const filterhandler = (val: string) => {
    if (val === 'all') {
      selectedTab.current = 'all';
      setData(foodData);
    }
    if (val === 'week') {
      const week = foodData.filter(item => {
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
      const month = foodData.filter(item => {
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

export default FoodExpenses;
