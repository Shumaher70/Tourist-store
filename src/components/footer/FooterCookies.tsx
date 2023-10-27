import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
const FooterCookies = () => {
   return (
      <div className="bg-[#111] w-full px-[10%] py-[3%]  flex flex-wrap gap-5 justify-between items-center">
         <div className="w-[80%] sm:w-[20%] cursor-pointer">
            <a href="/#carousel">
               <img src={require('./footer-logo.png')} alt="footer-logo" />
            </a>
         </div>
         <div>
            <div className="flex sm:flex-wrap sm:flex-row flex-col gap-2 ">
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/pages/impressum"
               >
                  <Typography className="text-white w-auto p-1  mr-3 rounded-none">
                     IMPRINT
                  </Typography>
               </NavLink>
               <NavLink onClick={() => window.scrollTo(0, 0)} to="/pages/agb">
                  <Typography className="text-white w-auto p-1  mr-3 rounded-none">
                     AGB
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/pages/datenschutz"
               >
                  <Typography className="text-white w-auto p-1  mr-3 rounded-none">
                     PRIVAC POLICY
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/pages/widerruf"
               >
                  <Typography className="text-white w-auto p-1  mr-3 rounded-none">
                     REVOCATION
                  </Typography>
               </NavLink>
               <NavLink onClick={() => window.scrollTo(0, 0)} to="/">
                  <Typography className="text-white w-auto p-1  mr-3 rounded-none">
                     COOKIES
                  </Typography>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default FooterCookies;
