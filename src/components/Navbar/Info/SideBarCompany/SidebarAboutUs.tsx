import { Card, List, ListItem } from '@material-tailwind/react';

const SidebarAboutUs = () => {
  return (
    <Card
      className={
        'fixed translate-x-[100%] rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'
      }
    >
      <List className="absolute top-[15%] pl-[10%]">
        <ListItem className="cursor-pointer  rounded-none">
          OUR HISTORY
        </ListItem>
        <ListItem className="cursor-pointer  rounded-none">
          HPT - HAMBURG
        </ListItem>
        <ListItem className="cursor-pointer  rounded-none">
          CAREER / JOBS
        </ListItem>
      </List>
    </Card>
  );
};

export default SidebarAboutUs;
