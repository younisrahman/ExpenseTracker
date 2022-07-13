import {
  configureStore,
  AnyAction,
  ThunkDispatch,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Expense'],
};
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<AppDispatch, void, AnyAction>;
const middleware = [
  ...(__DEV__ ? [logger] : []),
  ...getDefaultMiddleware({serializableCheck: false}),
];

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: __DEV__,
});
const persistor = persistStore(store);

export {store, persistor};
