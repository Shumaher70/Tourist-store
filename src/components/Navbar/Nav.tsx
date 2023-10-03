import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
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

   useEffect(() => {
      const handleResize = () => {
         if (size.current) {
            window.innerWidth < 768 ? getInfo(false) : getInfo(true);
            setTimeout(() => {
               if (size.current) {
                  dispatch(heightNav(size.current?.offsetHeight.toString()));
                  dispatch(widthNav(size.current?.offsetWidth.toString()));
               }
            }, 1);
         }
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [dispatch]);

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
         "
      >
         <NavLink
            className="flex justify-center items-center w-[150px] sm:w-[200px] lg:w-[20%]"
            to="/"
         >
            <img src={require('./logo/logo.png')} alt="logo" />
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
