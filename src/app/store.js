import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
// import counterReducer from '../features/counter/counterSlice';
import authReducer from '../redux/reducers/authSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth : authReducer
=======
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
>>>>>>> hoangpv
  },
});
