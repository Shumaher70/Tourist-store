import { useDispatch } from 'react-redux';
import {
   sidebarleCompanyAboutUs,
   sidebarleCompanySustainAbility,
   sidebarleCompanyDisignSpace,
} from '../../../../store/redusers/sideBarReduser';

import { List, ListItem, Card } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const SideBarCompany = () => {
   const dispatch = useDispatch();

   const clickAboutUsHandler = () => {
      dispatch(sidebarleCompanyAboutUs());
   };
   const clickSustainAbilityHandler = () => {
      dispatch(sidebarleCompanySustainAbility());
   };
   const clickDisignSpaceHandler = () => {
      dispatch(sidebarleCompanyDisignSpace());
   };

   return (
      <Card className="fixed rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20">
         <List className="absolute top-[15%] pl-[10%]">
            <ListItem
               onClick={() => clickAboutUsHandler()}
               className="cursor-pointer rounded-none"
            >
               ABOUT US
            </ListItem>

            <NavLink to="/pages/karriere">
               <ListItem className="cursor-pointer rounded-none">
                  CAREER
               </ListItem>
            </NavLink>

            <ListItem
               onClick={() => clickSustainAbilityHandler()}
               className="cursor-pointer rounded-none"
            >
               SUSTAINABILITY
            </ListItem>

            <ListItem
               onClick={() => clickDisignSpaceHandler()}
               className="cursor-pointer rounded-none"
            >
               DESIGN SPACE
            </ListItem>

            <NavLink to="/pages/the-great-makeover">
               <ListItem className="cursor-pointer rounded-none mt-5 p-1 pl-[12px] text-[0.7rem]">
                  THE GREAT MAKEOVER
               </ListItem>
            </NavLink>

            <NavLink to="/pages/kirra">
               <ListItem className="cursor-pointer rounded-none p-1 pl-[12px] text-[0.7rem]">
                  NEW TENT: KIRRA
               </ListItem>
            </NavLink>
            <ListItem className="cursor-pointer rounded-none p-1 pl-[12px] text-[0.7rem]">
               HEIMPLANET X 66°NORTH
            </ListItem>
         </List>
      </Card>
   );
};
export default SideBarCompany;
