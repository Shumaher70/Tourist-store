import { NavLink } from 'react-router-dom';
import { Navbar } from '@material-tailwind/react';

import {
  Logo,
  NavInfo,
  ShopFinder,
  Search,
  IconProfile,
  Cart,
} from '../variables';

const Nav = () => {
  return (
    <Navbar className="fixed rounded-none	 min-w-full max-w-screen-xl flex justify-around py-5 px-4 lg:px-8 lg:py-4">
      <NavLink className="flex justify-center items-center" to="/">
        <Logo />
      </NavLink>
      <NavInfo />
      <div className="container w-auto flex items-center gap-5">
        <ShopFinder />
        <Search />
        <IconProfile />
        <Cart />
      </div>
    </Navbar>
  );
};

export default Nav;
