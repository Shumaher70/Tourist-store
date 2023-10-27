import { Card, List, ListItem } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { toggleCompany } from '../../../../store/redusers/sideBarReduser';
import { useDispatch } from 'react-redux';

const SidebarDisignSpace = () => {
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
               to="/blogs/designraum/zelttechnik"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  TENT TECHNOLOGY
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
                  DYECOSHELL™
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleCompany());
               }}
               to="/blogs/designraum/coolever-technologie"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  COOLEVER TECHNOLOGY
               </ListItem>
            </NavLink>

            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleCompany());
               }}
               to="/blogs/designraum"
            >
               <ListItem className="cursor-pointer  rounded-none">
                  ALL CONTRIBUTIONS
               </ListItem>
            </NavLink>
         </List>
      </Card>
   );
};

export default SidebarDisignSpace;
