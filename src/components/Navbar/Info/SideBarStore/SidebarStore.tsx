import { ListItem, Card } from '@material-tailwind/react';

const SidebarStore = () => {
  return (
    <Card className={'fixed flex-col rounded-none w-[20%] h-full z-10'}>
      <ul className="mt-24 ml-[10%]">
        <li>
          <ListItem className="cursor-pointer rounded-none">PRODUCTS</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer rounded-none">
            HPT SELECTED
          </ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer rounded-none">RE:STORE</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer rounded-none mt-5 p-1 pl-[12px] text-[0.7rem]">
            GIFT VOUCHER
          </ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer rounded-none p-1 pl-[12px] text-[0.7rem]">
            TOP SELLER
          </ListItem>
        </li>
      </ul>
    </Card>
  );
};
export default SidebarStore;
