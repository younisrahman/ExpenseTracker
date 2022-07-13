import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store';
import {CommonList, DateFilter} from '@components';
import moment from 'moment';

const HomeExpenses = () => {
  const {allExpenses} = useSelector((state: RootState) => state.Expense);
  let homeData = allExpenses.filter(item => item.type === 'home');
  const selectedTab = useRef('all');
  useEffect(() => {
    homeData = allExpenses.filter(item => item.type === 'home');
    setData(homeData);
  }, [allExpenses]);

  const [data, setData] = useState(homeData);
  const filterhandler = (val: string) => {
    if (val === 'all') {
      selectedTab.current = 'all';
      setData(homeData);
    }
    if (val === 'week') {
      const week = homeData.filter(item => {
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
      const month = homeData.filter(item => {
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

export default HomeExpenses;
