import { ListItem, Card } from '@material-tailwind/react';

const SideBarMagazine = () => {
  return (
    <Card className={'fixed flex-col rounded-none w-[20%] h-full z-10'}>
      <ul className="mt-24 ml-[10%]">
        <li>
          <ListItem className="cursor-pointer">OVERVIEW</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">ADVENTURE</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">COLLABORATIONS</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">PROJECTS</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">HPT GOURMET CAMPING</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer">AMBASSADORS</ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer mt-5 p-1 pl-[12px] text-[0.7rem]">
            BLOG: LIGHTWEIGHT LUGGAGE
          </ListItem>
        </li>
        <li>
          <ListItem className="cursor-pointer p-1 pl-[12px] text-[0.7rem]">
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
