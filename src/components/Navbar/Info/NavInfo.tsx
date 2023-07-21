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
    <ul className="flex">
      <li
        onClick={() => {
          clickStoreHandler();
        }}
      >
        <ListItem className="text-black">STORE</ListItem>
      </li>
      <li
        onClick={() => {
          clickMagazineHandler();
        }}
      >
        <ListItem className="text-black">MAGAZINE</ListItem>
      </li>
      <li
        onClick={() => {
          clickCompanyHandler();
        }}
      >
        <ListItem className="text-black">COMPANY</ListItem>
      </li>
    </ul>
  );
};

export default NavInfo;
