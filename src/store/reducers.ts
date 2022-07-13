// import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import expensesInfo, {ExpensesProps} from '../feature/Expenses';

// export const store = configureStore({
//   reducer: {
//     expense: expenses,
//   },
// });

interface AppState {
  Expense: ExpensesProps;
}

const rootReducer = combineReducers<AppState>({
  Expense: expensesInfo,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
