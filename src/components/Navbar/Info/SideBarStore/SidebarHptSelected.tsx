import { Card, List, ListItem } from '@material-tailwind/react';

const SidebarHptSelected = () => {
  return (
    <Card
      className={
        'fixed translate-x-[100%] rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'
      }
    >
      <List className="absolute top-[15%] pl-[10%]">
        <ListItem className="cursor-pointer  rounded-none">
          KNIVES & EQUIPMENT
        </ListItem>
        <ListItem className="cursor-pointer  rounded-none">
          CAMPING FURNITURE
        </ListItem>
        <ListItem className="cursor-pointer  rounded-none">COOKING</ListItem>
        <ListItem className="cursor-pointer  rounded-none">SLEEPING</ListItem>
        <ListItem className="cursor-pointer  rounded-none">HYGIENE</ListItem>
        <ListItem className="cursor-pointer  rounded-none">
          ALL PRODUCTS
        </ListItem>
      </List>
    </Card>
  );
};

export default SidebarHptSelected;
