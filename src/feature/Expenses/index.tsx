import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export interface itemProps {
  id: string;
  type: string;
  amount: number;
  description: string;
  createAt: Date;
}

export interface ExpensesProps {
  allExpenses: itemProps[];
}

export const addExpenses = createAsyncThunk(
  'expenses/addExpenses',
  async (item: itemProps, thunkAPI: any) => {
    try {
      return item;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

/// slice
const initialState = {
  allExpenses: [],
} as ExpensesProps;

const expensesInfo = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addExpenses.fulfilled, (state, {payload}) => {
      state.allExpenses.unshift(payload);
    });
  },
});

export default expensesInfo.reducer;
