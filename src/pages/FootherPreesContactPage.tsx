import { Button, Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import { NavLink } from 'react-router-dom';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const FootherPreesContactPage = () => {
   return (
      <>
         <TemplatePage
            title="PRESS CONTACT"
            description="Media distribution list, image material & publications - Your PR contact to HEIMPLANET"
            buttonTitle="Learn more"
            buttonStyle="bg-black text-white"
            img="FootherPreesContactPageImg1.webp"
            id="dis"
         />

         <div id="dis" className="lg:px-[20%] px-[10%] py-[5%] text-center">
            <img
               src={require('./img/FootherPreesContactPageImg2.webp')}
               alt=""
            />
         </div>

         <div className="bg-[#f6f6f6] px-[10%] py-[5%]">
            <div className="flex justify-between w-full items-center ">
               <Typography className="sm:text-4xl text-2xl ">
                  MORE CONTRIBUTIONS
               </Typography>
               <NavLink to="/blogs/collabs/maharishi-x-heimplanet-the-cave">
                  <Button
                     color="white"
                     size="lg"
                     className="rounded-none bg-white text-black border-[1px] border-black hover:bg-black hover:text-white"
                  >
                     READ MORE
                  </Button>
               </NavLink>
            </div>
            <ContribuionsCardWrapper>
               <ContributionsCard
                  title="SUP ADVENTURES - DOORSTEP TO OCEAN IN ONE DAY"
                  description="It was a sunny day when we decided to explore the pristine nature right outside our doorstep."
                  img="contributions-1.webp"
               />
               <ContributionsCard
                  title="OUR TIPS FOR TRAVELING LIGHT"
                  description="Space-saving and lightweight packing is a fundamental skill for any globetrotter."
                  img="contributions-3.jpg"
               />
               <ContributionsCard
                  title="CAMPING IN GERMANY"
                  description="More openings are in sight and it's time to plan the first trips outdoors. If you want to spend a night at a campsite in beautiful surroundings in Germany without being woken up by slamming car doors or motorhome generators, only to find that the first thing you see is a wall of caravans, it's not so easy."
                  img="contributions-2.webp"
               />
            </ContribuionsCardWrapper>
         </div>
      </>
   );
};

export default FootherPreesContactPage;
