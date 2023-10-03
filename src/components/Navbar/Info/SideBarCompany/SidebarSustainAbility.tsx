import { Card, List, ListItem } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const SidebarSustainAbility = () => {
   return (
      <Card
         className={
            'fixed translate-x-[100%] rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'
         }
      >
         <List className="absolute top-[15%] pl-[10%]">
            <NavLink to="/blogs/projekte/1-for-the-planet">
               <ListItem className="cursor-pointer  rounded-none">
                  1% FOR THE PLANET
               </ListItem>
            </NavLink>

            <NavLink to="/blogs/projekte/lebenslanger-support-garantie">
               <ListItem className="cursor-pointer  rounded-none">
                  LIFETIME WARRANTY
               </ListItem>
            </NavLink>

            <NavLink to="/collections/re-store">
               <ListItem className="cursor-pointer  rounded-none">
                  RE-STORE PROGRAM
               </ListItem>
            </NavLink>

            <NavLink to="/blogs/designraum/dyecoshell™">
               <ListItem className="cursor-pointer  rounded-none">
                  DYECOSHELL
               </ListItem>
            </NavLink>
         </List>
      </Card>
   );
};

export default SidebarSustainAbility;
