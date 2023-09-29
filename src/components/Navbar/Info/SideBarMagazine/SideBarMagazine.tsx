import { ListItem, Card } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const SideBarMagazine = () => {
   return (
      <Card
         className={'fixed rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'}
      >
         <ul className="absolute top-[15%] pl-[10%]">
            <li>
               <NavLink to="/pages/blog">
                  <ListItem className="cursor-pointer rounded-none">
                     OVERVIEW
                  </ListItem>
               </NavLink>
            </li>
            <li>
               <NavLink to="/blogs/abenteuer">
                  <ListItem className="cursor-pointer rounded-none">
                     ADVENTURE
                  </ListItem>
               </NavLink>
            </li>
            <li>
               <NavLink to="/blogs/collabs">
                  <ListItem className="cursor-pointer rounded-none">
                     COLLABORATIONS
                  </ListItem>
               </NavLink>
            </li>
            <li>
               <NavLink to="/blogs/projekte">
                  <ListItem className="cursor-pointer rounded-none">
                     PROJECTS
                  </ListItem>
               </NavLink>
            </li>
            <li>
               <NavLink to="/blogs/gourmet-camping">
                  <ListItem className="cursor-pointer rounded-none">
                     HPT GOURMET CAMPING
                  </ListItem>
               </NavLink>
            </li>
            <li>
               <NavLink to="/pages/ambassador">
                  <ListItem className="cursor-pointer rounded-none">
                     AMBASSADORS
                  </ListItem>
               </NavLink>
            </li>
            <li>
               <ListItem className="cursor-pointer rounded-none mt-5 p-1 pl-[12px] text-[0.7rem]">
                  BLOG: LIGHTWEIGHT LUGGAGE
               </ListItem>
            </li>
            <li>
               <ListItem className="cursor-pointer rounded-none p-1 pl-[12px] text-[0.7rem]">
                  BLOG: MAVERICKS TOUR
               </ListItem>
            </li>
            <li>
               <ListItem className="cursor-pointer p-1 pl-[12px] text-[0.7rem]">
                  BLOG: PILGRIMAGE IN EASTERN TIBET
               </ListItem>
            </li>
         </ul>
      </Card>
   );
};
export default SideBarMagazine;
