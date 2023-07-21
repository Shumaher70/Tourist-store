import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ListItem, Card } from '@material-tailwind/react';

const SideBarMagazine = () => {
  const sideBarSelector = useSelector(
    (state: RootState) => state.sideBar.translateMagazineXr
  );

  return (
    <Card
      className={`absolute flex-col rounded-none w-[30%] h-full  ${sideBarSelector} transition ease-in-out duration-200`}
    >
      <ul className="mt-[50%] ml-[10%]">
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
