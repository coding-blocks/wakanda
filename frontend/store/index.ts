import { configureStore } from '@reduxjs/toolkit';
import activeTasksReducer from './userTasksSlice';
import currentUserReducer from './currentUserSlice';

export const store = configureStore({
  reducer: {
    userTasks: activeTasksReducer,
    currentUser: currentUserReducer,
  },
});

export default store;
