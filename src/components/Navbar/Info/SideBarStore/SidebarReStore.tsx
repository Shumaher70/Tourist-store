import { List, ListItem, Card } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const SidebarReStore = () => {
   return (
      <Card
         className={
            'fixed translate-x-[100%] rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'
         }
      >
         <List className="absolute top-[15%] pl-[10%]">
            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/collections/re-store"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  LEARN MORE
               </ListItem>
            </NavLink>
            <NavLink
               onClick={() => window.scrollTo(0, 0)}
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
