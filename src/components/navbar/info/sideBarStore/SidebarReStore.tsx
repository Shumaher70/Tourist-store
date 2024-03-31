import { List, ListItem, Card } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { toggleStore } from '../../../../store/redusers/sideBarReduser';
import { useDispatch } from 'react-redux';

const SidebarReStore = () => {
   const dispatch = useDispatch();
   return (
      <Card
         className={
            'fixed translate-x-[100%] rounded-none md:w-[300px] h-full z-20'
         }
      >
         <List className="absolute top-[15%] pl-[10%]">
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleStore());
               }}
               to="/collections/re-store"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  LEARN MORE
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

export default SidebarReStore;
