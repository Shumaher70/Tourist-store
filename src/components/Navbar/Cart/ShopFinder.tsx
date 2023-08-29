import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const ShopFinder = () => {
  return (
    <NavLink to="/pages/shopfinder">
      <Typography
        className="cursor-pointer text-base"
        variant="paragraph"
        color="black"
      >
        SHOPFINDER
      </Typography>
    </NavLink>
  );
};
export default ShopFinder;
