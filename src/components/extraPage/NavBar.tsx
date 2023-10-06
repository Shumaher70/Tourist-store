import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonCustom from './ButtonCustom';

interface NavBarProps {
   src: string;
   title?: string;
}

const NavBar: React.FC<NavBarProps> = ({ src, title = 'descover now' }) => {
   const [scroll, setScroll] = useState(0);
   const [calculScrol, setcCalculScrol] = useState(0);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setcCalculScrol(window.scrollY / 3);
         setScroll(calculScrol < 100 ? calculScrol : 100);
      });
   }, [calculScrol]);

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
            <Link to="/">
               <img
                  src={require('../../components/navbar/logo/logoWhite.png')}
                  alt="logo"
                  style={{ filter: `invert(${scroll}%)` }}
               />
            </Link>
         </div>
         <div>
            <Link to={`${src}`}>
               <ButtonCustom btnTitle={title} />
            </Link>
         </div>
      </nav>
   );
};

export default NavBar;
