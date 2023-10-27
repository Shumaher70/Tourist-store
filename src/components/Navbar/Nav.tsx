import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '@material-tailwind/react';
import {
   heightNav,
   widthNav,
} from '../../store/redusers/sizeComponentsReducer';
import { NavInfo, ShopFinder, Search, IconProfile, Cart } from '../index';

const Nav = () => {
   const [showInfo, getInfo] = useState(true);

   const size = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch();

   const handleResize = useCallback(() => {
      if (size.current) {
         window.innerWidth < 768 ? getInfo(false) : getInfo(true);
         setTimeout(() => {
            if (size.current) {
               dispatch(heightNav(size.current?.offsetHeight.toString()));
               dispatch(widthNav(size.current?.offsetWidth.toString()));
            }
         }, 1);
      }
   }, [dispatch]);

   useEffect(() => {
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [handleResize]);

   return (
      <Navbar
         ref={size}
         className="
            z-30 
            fixed 
            rounded-none 
            bg-opacity-1 
            flex 
            justify-between 
            items-center 
            max-w-full 
            px-[10%] 
            border-b-[1px]
            border-[#f2f2f2]
            shadow-none
            gap-3
         "
      >
         <NavLink
            className="flex justify-center items-center sm:w-[200px] md:w-[200px]  w-[125px]"
            to="/"
            onClick={() => window.scrollTo(0, 0)}
         >
            <img src={require('./logo/logo.png')} alt="logo" />
         </NavLink>
         {showInfo && <NavInfo />}
         <div className="w-auto flex items-center gap-3">
            {showInfo && <ShopFinder />}
            <Search />
            <IconProfile />
            <Cart />
         </div>
      </Navbar>
   );
};

export default Nav;
