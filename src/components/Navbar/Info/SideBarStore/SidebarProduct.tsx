import { List, ListItem, Card } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleStore } from '../../../../store/redusers/sideBarReduser';

const SidebarProduct = () => {
   const dispatch = useDispatch();
   return (
      <Card
         className={
            'fixed translate-x-[100%] rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'
         }
      >
         <List className="absolute top-[15%] pl-[10%]">
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
               to="/collections/zelte"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  TENTS & ACCESSORIES
               </ListItem>
            </NavLink>
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
               to="/collections/tarps"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  TARPS
               </ListItem>
            </NavLink>
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
               to="/collections/carry-essentials"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  BAGS
               </ListItem>
            </NavLink>
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
               to="/collections/carry-essentials"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  APPAREL
               </ListItem>
            </NavLink>
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
               to="/collections/gear"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  GEAR
               </ListItem>
            </NavLink>
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
               to="/collections/all-products"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  ALL PRODUCTS
               </ListItem>
            </NavLink>
         </List>
      </Card>
   );
};

export default SidebarProduct;
