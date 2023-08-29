import { List, ListItem, Card } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const SidebarProduct = () => {
  return (
    <Card
      className={
        'fixed translate-x-[100%] rounded-none xl:w-1/6 lg:w-1/4 w-2/6 h-full z-20'
      }
    >
      <List className="absolute top-[15%] pl-[10%]">
        <NavLink to="/collections/zelte">
          <ListItem className="cursor-pointer  rounded-none">
            TENTS & ACCESSORIES
          </ListItem>
        </NavLink>
        <NavLink to="/collections/tarps">
          <ListItem className="cursor-pointer  rounded-none">TARPS</ListItem>
        </NavLink>
        <NavLink to="/collections/carry-essentials">
          <ListItem className="cursor-pointer  rounded-none">BAGS</ListItem>
        </NavLink>
        <NavLink to="/collections/carry-essentials">
          <ListItem className="cursor-pointer  rounded-none">APPAREL</ListItem>
        </NavLink>
        <NavLink to="/collections/gear">
          <ListItem className="cursor-pointer  rounded-none">GEAR</ListItem>
        </NavLink>
        <NavLink to="/collections/all-products">
          <ListItem className="cursor-pointer  rounded-none">
            ALL PRODUCTS
          </ListItem>
        </NavLink>
      </List>
    </Card>
  );
};

export default SidebarProduct;
