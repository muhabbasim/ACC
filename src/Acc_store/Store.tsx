import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import UserReducer from '../Acc_store/users/UserSlice';

export const store = configureStore({
  reducer: {
    userReducer: UserReducer,
  },
});

const rootReducer = combineReducers({
  userReducer: UserReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch } = store;
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;

export default store;
