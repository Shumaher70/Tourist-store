import { ListItem, Card } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { toggleMagazine } from '../../../../store/redusers/sideBarReduser';
import { useDispatch } from 'react-redux';

const SideBarMagazine = () => {
   const dispatch = useDispatch();

   return (
      <Card className={'fixed rounded-none md:w-[300px] h-full z-20'}>
         <ul className="absolute top-[15%] pl-[10%]">
            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/pages/blog"
               >
                  <ListItem className="cursor-pointer rounded-none">
                     OVERVIEW
                  </ListItem>
               </Link>
            </li>
            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/blogs/abenteuer"
               >
                  <ListItem className="cursor-pointer rounded-none">
                     ADVENTURE
                  </ListItem>
               </Link>
            </li>
            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/blogs/collabs"
               >
                  <ListItem className="cursor-pointer rounded-none">
                     COLLABORATIONS
                  </ListItem>
               </Link>
            </li>
            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/blogs/projekte"
               >
                  <ListItem className="cursor-pointer rounded-none">
                     PROJECTS
                  </ListItem>
               </Link>
            </li>
            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/blogs/gourmet-camping"
               >
                  <ListItem className="cursor-pointer rounded-none">
                     HPT GOURMET CAMPING
                  </ListItem>
               </Link>
            </li>
            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/pages/ambassador"
               >
                  <ListItem className="cursor-pointer rounded-none">
                     AMBASSADORS
                  </ListItem>
               </Link>
            </li>

            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/blogs/abenteuer/unsere-tipps-fur-reisen-mit-leichtem-gepack"
               >
                  <ListItem className="cursor-pointer rounded-none mt-5 p-1 pl-[12px] text-[0.7rem]">
                     BLOG: LIGHTWEIGHT LUGGAGE
                  </ListItem>
               </Link>
            </li>
            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/blogs/abenteuer/mavericks-eishockey-tour"
               >
                  <ListItem className="cursor-pointer rounded-none p-1 pl-[12px] text-[0.7rem]">
                     BLOG: MAVERICKS TOUR
                  </ListItem>
               </Link>
            </li>
            <li>
               <Link
                  onClick={() => {
                     window.scrollTo(0, 0);
                     dispatch(toggleMagazine());
                  }}
                  to="/blogs/abenteuer/auf-pilgerreise-in-osttibet"
               >
                  <ListItem className="cursor-pointer p-1 pl-[12px] text-[0.7rem]">
                     BLOG: PILGRIMAGE IN EASTERN TIBET
                  </ListItem>
               </Link>
            </li>
         </ul>
      </Card>
   );
};
export default SideBarMagazine;
