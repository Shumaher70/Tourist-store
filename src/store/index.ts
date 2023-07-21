import { configureStore } from '@reduxjs/toolkit';
import sideBarReduser from './redusers/sideBarReduser';

export const store = configureStore({
  reducer: {
    sideBar: sideBarReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
