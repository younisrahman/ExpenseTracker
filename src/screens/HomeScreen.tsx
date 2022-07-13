import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store';

import {CommonList, DateFilter} from '@components';
import moment from 'moment';

const HomeScreen = () => {
  const {allExpenses} = useSelector((state: RootState) => state.Expense);
  const selectedTab = useRef('all');
  const [data, setData] = useState(allExpenses);

  useEffect(() => {
    setData(allExpenses);
  }, [allExpenses]);
  const filterhandler = (val: string) => {
    if (val === 'all') {
      selectedTab.current = 'all';
      setData(allExpenses);
    }
    if (val === 'week') {
      const week = allExpenses.filter(item => {
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
      const month = allExpenses.filter(item => {
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

export default HomeScreen;
