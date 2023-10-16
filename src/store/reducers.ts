import sideBarReduser from './redusers/sideBarReduser';
import sizeComponentsReducer from './redusers/sizeComponentsReducer';
import mobailNavAcardionReducer from './redusers/mobailNavAccordionReducer';
import filterReduser from './redusers/filterReduser';
import cartReduser from './redusers/cartReduser';

export const RootReducer = {
   sideBar: sideBarReduser,
   size: sizeComponentsReducer,
   acardion: mobailNavAcardionReducer,
   filter: filterReduser,
   cart: cartReduser,
};
