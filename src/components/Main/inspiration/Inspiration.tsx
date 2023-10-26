import { Typography, Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Inspiration = () => {
   return (
      <div className="relative h-[90vh] max-w-full">
         <img
            src={require('./inspiration-bg.webp')}
            alt="inspiration"
            className="absolute z-[-1] w-full h-full object-cover brightness-[0.7]"
         />
         <div className="flex flex-col justify-between h-full py-[5%] px-[10%]  xl:w-2/4 sm:w-3/4 w-full">
            <div>
               <Typography
                  variant="h2"
                  color="white"
                  className="border-t-[1px] border-b-[1px] border-white sm:text-4xl text-2xl"
               >
                  HEIMPLANET IS INSPIRED BY THE EXCITEMENT OF TRAVEL.
               </Typography>
               <Typography variant="paragraph" color="white" className="mt-5">
                  When you travel, you feel alive. All your senses are awake and
                  you always expect something new. You are constantly adapting
                  to new situations, new people, new cultures and new
                  environments.
               </Typography>
            </div>
            <div className="mt-5 flex gap-5 ">
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/pages/unternehmen-store"
               >
                  <Button
                     color="white"
                     className="rounded-none sm:px-7 px-3 border-[1px] border-white"
                  >
                     ABOUT AS
                  </Button>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/collections/re-store"
               >
                  <Button
                     variant="text"
                     className="rounded-none sm:px-7 px-3 text-white border-[1px] border-white hover:bg-white hover:text-black"
                  >
                     RE:STORE PROGRAM
                  </Button>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default Inspiration;
