import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import accomondationReducer from './accomondationSlice';

const store = configureStore({
  reducer: {
    accomondation: accomondationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch ;
export type RootState = ReturnType<typeof store.getState>;

export default store;