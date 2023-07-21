import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ListItem, Card } from '@material-tailwind/react';

const SidebarStore = () => {
  const sideBarSelector = useSelector(
    (state: RootState) => state.sideBar.translateStoreXr
  );

  return (
    <Card
      className={`absolute flex-col rounded-none w-[30%] h-full  ${sideBarSelector} transition ease-in-out duration-200`}
    >
      <ul className="mt-[50%] ml-[10%]">
        <li>
          <ListItem className="cursor-pointer">PRODUCTS</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">HPT SELECTED</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">RE:STORE</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer mt-5 p-1 pl-[12px] text-[0.7rem]">
            GIFT VOUCHER
          </ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer p-1 pl-[12px] text-[0.7rem]">
            TOP SELLER
          </ListItem>
        </li>
      </ul>
    </Card>
  );
};
export default SidebarStore;
