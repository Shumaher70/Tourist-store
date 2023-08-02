import { useDispatch } from 'react-redux';
import {
  sidebarStoreProduct,
  sidebarStoreHptSelected,
  sidebarStoreReStore,
} from '../../../../store/redusers/sideBarReduser';

import { List, ListItem, Card } from '@material-tailwind/react';

const SidebarStore = () => {
  const dispatch = useDispatch();

  const clickProductHanlder = () => {
    dispatch(sidebarStoreProduct());
  };

  const clickHptSelectedHandler = () => {
    dispatch(sidebarStoreHptSelected());
  };

  const clickReStoreHandler = () => {
    dispatch(sidebarStoreReStore());
  };

  return (
    <Card className="fixed rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20">
      <List className="absolute top-[15%] pl-[10%]">
        <ListItem
          onClick={() => clickProductHanlder()}
          className="cursor-pointer  rounded-none"
        >
          PRODUCTS
        </ListItem>

        <ListItem
          onClick={() => clickHptSelectedHandler()}
          className="cursor-pointer rounded-none"
        >
          HPT SELECTED
        </ListItem>

        <ListItem
          onClick={() => clickReStoreHandler()}
          className="cursor-pointer rounded-none"
        >
          RE:STORE
        </ListItem>

        <ListItem className="cursor-pointer rounded-none mt-5 p-1 pl-[12px] text-[0.7rem]">
          GIFT VOUCHER
        </ListItem>

        <ListItem className="cursor-pointer rounded-none p-1 pl-[12px] text-[0.7rem]">
          TOP SELLER
        </ListItem>
      </List>
    </Card>
  );
};
export default SidebarStore;
