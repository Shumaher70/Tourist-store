import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonCustom from './ButtonCustom';

interface NavBarProps {
   src: string;
   title?: string;
}

const NavBar: React.FC<NavBarProps> = ({ src, title = 'descover now' }) => {
   const [scroll, setScroll] = useState(0);

   const scrollHandler = useCallback(() => {
      const calcScroll = window.scrollY / 3;
      setScroll(calcScroll < 100 ? calcScroll : 100);
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
      return () => {
         window.removeEventListener('scroll', scrollHandler);
      };
   }, [scrollHandler]);

   return (
      <nav
         style={{ backgroundColor: `rgb(255 255 255 / ${scroll}%)` }}
         className="
            px-[10%]
            w-full
            h-[100px]
            flex
            justify-between
            items-center
            fixed
            scroll-smooth
            border-b-[1px]
            border-[#f2f2f275]
            z-[99]
         "
      >
         <div className="w-[150px] sm:w-[200px] lg:w-[20%]">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
               <img
                  src={require('../../components/navbar/logo/logoWhite.png')}
                  alt="logo"
                  style={{ filter: `invert(${scroll}%)` }}
               />
            </Link>
         </div>
         <div>
            <Link onClick={() => window.scrollTo(0, 0)} to={`${src}`}>
               <ButtonCustom btnTitle={title} />
            </Link>
         </div>
      </nav>
   );
};

export default NavBar;
