import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
   const [scroll, setScroll] = useState(0);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setScroll(window.scrollY < 100 ? window.scrollY : 100);
      });
   }, []);

   return (
      <div
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
            <Link to="/collections/zelte">
               <Button
                  style={{ filter: `invert(${scroll}%)` }}
                  color="gray"
                  size="lg"
                  className="rounded-none bg-white text-black"
               >
                  Discover now
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default NavBar;
