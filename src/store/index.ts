import { configureStore } from '@reduxjs/toolkit';
import sideBarReduser from './redusers/sideBarReduser';
import sizeComponentsReducer from './redusers/sizeComponentsReducer';

export const store = configureStore({
  reducer: {
    sideBar: sideBarReduser,
    size: sizeComponentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
