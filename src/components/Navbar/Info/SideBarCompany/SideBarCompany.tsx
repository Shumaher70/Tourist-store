import { ListItem, Card } from '@material-tailwind/react';

const SideBarCompany = () => {
  return (
    <Card className={'fixed flex-col rounded-none w-[20%] h-full z-10'}>
      <ul className="mt-24 ml-[10%]">
        <li>
          <ListItem className="cursor-pointer">ABOUT US</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">CAREER</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">SUSTAINABILITY</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">DESIGN SPACE</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer mt-5 p-1 pl-[12px] text-[0.7rem]">
            THE GREAT MAKEOVER
          </ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer p-1 pl-[12px] text-[0.7rem]">
            NEW TENT: KIRRA
          </ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer p-1 pl-[12px] text-[0.7rem]">
            HEIMPLANET X 66°NORTH
          </ListItem>
        </li>
      </ul>
    </Card>
  );
};
export default SideBarCompany;
