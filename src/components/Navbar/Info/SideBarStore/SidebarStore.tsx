import { useDispatch } from 'react-redux';
import {
   sidebarStoreProduct,
   sidebarStoreHptSelected,
   sidebarStoreReStore,
   toggleStore,
} from '../../../../store/redusers/sideBarReduser';

import { List, ListItem, Card } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const SidebarStore = () => {
   const dispatch = useDispatch();

   const clickProductHanlder = () => {
      dispatch(sidebarStoreProduct());
   };

   const clickHptSelectedHandler = () => {
      dispatch(sidebarStoreHptSelected());
   };

   const clickReStoreHandler = () => {
      dispatch(sidebarStoreReStore());
   };

   return (
      <Card className="fixed rounded-none md:w-[300px] h-full z-20">
         <List className="absolute top-[15%] pl-[10%]">
            <ListItem
               onClick={() => clickProductHanlder()}
               className="cursor-pointer  rounded-none"
            >
               PRODUCTS
            </ListItem>
            <ListItem
               onClick={() => clickHptSelectedHandler()}
               className="cursor-pointer rounded-none"
            >
               HPT SELECTED
            </ListItem>
            <ListItem
               onClick={() => clickReStoreHandler()}
               className="cursor-pointer rounded-none"
            >
               RE:STORE
            </ListItem>

            <NavLink
               to="/products/gift-card"
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
            >
               <ListItem className="cursor-pointer rounded-none mt-5 p-1 pl-[12px] text-[0.7rem]">
                  GIFT VOUCHER
               </ListItem>
            </NavLink>
            <NavLink
               to="/collections/topseller"
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
            >
               <ListItem className="cursor-pointer rounded-none p-1 pl-[12px] text-[0.7rem]">
                  TOP SELLER
               </ListItem>
            </NavLink>
         </List>
      </Card>
   );
};
export default SidebarStore;
