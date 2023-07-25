import { useState, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '@material-tailwind/react';

import {
  Logo,
  NavInfo,
  ShopFinder,
  Search,
  IconProfile,
  Cart,
} from './variablesHeader';

const Nav = () => {
  const [showInfo, getInfo] = useState(true);
  const { innerWidth: width } = window;

  useLayoutEffect(() => {
    width < 768 ? getInfo(false) : getInfo(true);
  }, [width]);

  return (
    <Navbar className="z-10 fixed rounded-none	flex justify-between items-center max-w-full px-3 lg:px-[10%] md:px-5">
      <NavLink className="flex justify-center items-center" to="/">
        <Logo />
      </NavLink>
      {showInfo && <NavInfo />}
      <div className="w-auto flex items-center gap-5">
        {showInfo && <ShopFinder />}
        <Search />
        <IconProfile />
        <Cart />
      </div>
    </Navbar>
  );
};

export default Nav;
