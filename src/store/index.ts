import { configureStore } from '@reduxjs/toolkit';
import sideBarReduser from './redusers/sideBarReduser';
import sizeComponentsReducer from './redusers/sizeComponentsReducer';
import mobailNavAcardionReducer from './redusers/mobailNavAccordionReducer';
import filterReduser from './redusers/filterReduser';
import cartReduser from './redusers/cartReduser';

export const store = configureStore({
   reducer: {
      sideBar: sideBarReduser,
      size: sizeComponentsReducer,
      acardion: mobailNavAcardionReducer,
      filter: filterReduser,
      cart: cartReduser,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
