import { Card, List, ListItem } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { toggleCompany } from '../../../../store/redusers/sideBarReduser';
import { useDispatch } from 'react-redux';

const SidebarSustainAbility = () => {
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
                  dispatch(toggleCompany());
               }}
               to="/blogs/projekte/1-for-the-planet"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  1% FOR THE PLANET
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleCompany());
               }}
               to="/blogs/projekte/lebenslanger-support-garantie"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  LIFETIME WARRANTY
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleCompany());
               }}
               to="/collections/re-store"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  RE-STORE PROGRAM
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleCompany());
               }}
               to="/blogs/designraum/dyecoshell™"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  DYECOSHELL
               </ListItem>
            </NavLink>
         </List>
      </Card>
   );
};

export default SidebarSustainAbility;
