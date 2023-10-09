import { Card, List, ListItem } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const SidebarHptSelected = () => {
   return (
      <Card
         className={
            'fixed translate-x-[100%] rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'
         }
      >
         <List className="absolute top-[15%] pl-[10%]">
            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/collections/knives"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  KNIVES & EQUIPMENT
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/collections/camping-furniture"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  CAMPING FURNITURE
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/collections/cooking"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  COOKING
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/collections/sleeping"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  SLEEPING
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/collections/hygiene"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  HYGIENE
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/collections/hpt-selected"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  ALL PRODUCTS
               </ListItem>
            </NavLink>
         </List>
      </Card>
   );
};

export default SidebarHptSelected;
