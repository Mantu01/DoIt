import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import authReducer from './authSlice';
import appReducer from './appSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    app: appReducer
  },
});

export default store;
