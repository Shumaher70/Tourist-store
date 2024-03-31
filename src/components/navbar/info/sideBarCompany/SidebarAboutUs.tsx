import { Card, List, ListItem } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { toggleCompany } from '../../../../store/redusers/sideBarReduser';
import { useDispatch } from 'react-redux';

const SidebarAboutUs = () => {
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
               to="/pages/unternehmen-store"
            >
               <ListItem className="cursor-pointer rounded-none">
                  OUR HISTORY
               </ListItem>
            </NavLink>
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleCompany());
               }}
               to="/pages/unternehmen-store"
            >
               <ListItem className="cursor-pointer rounded-none">
                  HPT - HAMBURG
               </ListItem>
            </NavLink>
            <NavLink
               onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(toggleCompany());
               }}
               to="/pages/karriere"
            >
               <ListItem className="cursor-pointer rounded-none">
                  CAREER / JOBS
               </ListItem>
            </NavLink>
         </List>
      </Card>
   );
};

export default SidebarAboutUs;
