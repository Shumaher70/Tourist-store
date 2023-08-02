import { useDispatch } from 'react-redux';
import { ListItem } from '@material-tailwind/react';
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
    <div className="flex">
      <ListItem
        onClick={() => clickStoreHandler()}
        className="text-black md:text-base rounded-none w-auto"
      >
        STORE
      </ListItem>
      <ListItem
        onClick={() => clickMagazineHandler()}
        className="text-black md:text-base rounded-none w-auto"
      >
        MAGAZINE
      </ListItem>
      <ListItem
        onClick={() => clickCompanyHandler()}
        className="text-black md:text-base rounded-none w-auto"
      >
        COMPANY
      </ListItem>
    </div>
  );
};

export default NavInfo;
