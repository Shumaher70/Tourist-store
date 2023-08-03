import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '@material-tailwind/react';
import { hightNav } from '../../store/redusers/sizeComponentsReducer';
import {
  NavInfo,
  ShopFinder,
  Search,
  IconProfile,
  Cart,
} from './variablesHeader';

const Nav = () => {
  const [showInfo, getInfo] = useState(true);
  const size = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth < 768 ? getInfo(false) : getInfo(true);
      dispatch(hightNav(size.current!.offsetHeight.toString()));
    });
    dispatch(hightNav(size.current!.offsetHeight.toString()));
  }, [dispatch]);

  return (
    <Navbar
      ref={size}
      className="z-30 fixed rounded-none	flex justify-between items-center max-w-full px-[10%]"
    >
      <NavLink
        className="flex justify-center items-center w-[150px] sm:w-[200px] lg:w-[20%]"
        to="/"
      >
        {<img src={require('./logo/logo.png')} alt="logo" />}
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
