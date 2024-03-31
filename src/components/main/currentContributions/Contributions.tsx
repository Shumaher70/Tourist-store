import { Typography, Button } from '@material-tailwind/react';
import ContribuionsCardWrapper from '../../../pages/ContribuionsCardWrapper';
import ContributionsCard from '../../../pages/ContributionsCard';
import { NavLink } from 'react-router-dom';

const Contributions = () => {
   return (
      <div className="px-[10%] py-[5%] h-full w-full">
         <div className="w-full flex justify-between items-center gap-5">
            <Typography
               color="black"
               className="sm:text-4xl text-2xl font-normal"
            >
               CURRENT CONTRIBUTIONS
            </Typography>
            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/pages/blog"
               className="hidden sm:flex"
            >
               <Button
                  color="white"
                  className=" border-[1px] border-black rounded-none"
               >
                  DISCOVER
               </Button>
            </NavLink>
         </div>

         <div className="flex gap-10 mt-5 flex-col lg:flex-row">
            <div className="w-full">
               <img
                  src={require('./main.jpg')}
                  alt="main"
                  className="w-full max-h-[450px] object-cover"
               />
            </div>

            <div className="flex w-full flex-col justify-between">
               <div>
                  <Typography
                     varian="h2"
                     color="black"
                     className="sm:text-4xl text-2xl py-2 border-t-[1px] border-b-[1px] border-black w-auto font-normal"
                  >
                     MAHARISHI X HEIMPLANET
                  </Typography>
                  <Typography variant="paragraph" color="black">
                     London-based streetwear label Maharishi and HEIMPLANET
                     celebrate nature with a DPM: Golden Tigerstripe Camouflage.
                  </Typography>
               </div>

               <div>
                  <NavLink
                     onClick={() => window.scrollTo(0, 0)}
                     to="/blogs/collabs/maharishi-x-heimplanet-the-cave"
                  >
                     <Button
                        color="white"
                        size="lg"
                        className="bg-black text-white rounded-none mt-5"
                     >
                        READ MORE
                     </Button>
                  </NavLink>
               </div>
            </div>
         </div>

         <ContribuionsCardWrapper>
            <ContributionsCard
               title="SUP ADVENTURES - DOORSTEP TO OCEAN IN ONE DAY"
               description="It was a sunny day when we decided to explore the pristine nature right outside our doorstep."
               img="contributions-1.webp"
               path="/blogs/abenteuer/sup-abenteuer-direkt-vor-der-haustur"
            />
            <ContributionsCard
               title="OUR TIPS FOR TRAVELING LIGHT"
               description="Space-saving and lightweight packing is a fundamental skill for any globetrotter."
               img="contributions-3.jpg"
               path="/blogs/abenteuer/unsere-tipps-fur-reisen-mit-leichtem-gepack"
            />
            <ContributionsCard
               title="CAMPING IN GERMANY"
               description="More openings are in sight and it's time to plan the first trips outdoors. If you want to spend a night at a campsite in beautiful surroundings in Germany without being woken up by slamming car doors or motorhome generators, only to find that the first thing you see is a wall of caravans, it's not so easy."
               img="contributions-2.webp"
               path="/blogs/abenteuer/camping-in-deutschland"
            />
         </ContribuionsCardWrapper>
      </div>
   );
};

export default Contributions;
