import { useDispatch } from 'react-redux';
import { ListItem, Typography } from '@material-tailwind/react';
import {
   toggleStore,
   toggleMagazine,
   toggleCompany,
} from '../../../store/redusers/sideBarReduser';

const NavInfo = () => {
   const dsispatch = useDispatch();

   const clickStoreHandler = () => {
      dsispatch(toggleStore());
   };

   const clickMagazineHandler = () => {
      dsispatch(toggleMagazine());
   };

   const clickCompanyHandler = () => {
      dsispatch(toggleCompany());
   };

   return (
      <div className="flex xl:gap-10 lg:gap-6 gap-3">
         <Typography
            onClick={() => clickStoreHandler()}
            className="cursor-pointer text-black md:text-base rounded-none w-auto"
         >
            STORE
         </Typography>
         <Typography
            onClick={() => clickMagazineHandler()}
            className="cursor-pointer text-black md:text-base rounded-none w-auto"
         >
            MAGAZINE
         </Typography>
         <Typography
            onClick={() => clickCompanyHandler()}
            className="cursor-pointer text-black md:text-base rounded-none w-auto"
         >
            COMPANY
         </Typography>
      </div>
   );
};

export default NavInfo;
