import { Button, Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import { NavLink } from 'react-router-dom';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const ContributionsAdventuresPage = () => {
   return (
      <>
         <TemplatePage
            title="SUP ADVENTURES - DOORSTEP TO OCEAN IN ONE DAY"
            description="It was a sunny day when we decided to explore the pristine nature right outside our doorstep."
            buttonTitle="LEARN MORE"
            buttonStyle="bg-black text-white"
            img="contributions-2.webp"
            id="dis"
         />
         <div id="dis" className="px-[10%] py-[5%]">
            <Typography>
               Our good friend Andy, a passionate surfboard and SUP shaper,
               invited us on one of his mini adventures, and we couldn't wait to
               join.
            </Typography>
            <img
               src={require('./img/contributionsAdventurePageImg1.webp')}
               alt="img1"
               className="mt-5"
            />
            <Typography className="mt-10">
               Just a few miles from Andy's home lies the Westensee near Kiel, a
               picturesque lake that offered an abundance of nature and perfect
               opportunities for stand-up paddling. We packed up our gear,
               including a Kirra, a Tarp, camping equipment and much more, and
               loaded everything onto the SUP.
            </Typography>
            <img
               src={require('./img/contributionsAdventurePageImg2.webp')}
               alt="img2"
               className="mt-10"
            />
            <Typography className="mt-10">
               Andy led us through the eelgrass fields of Westensee as we slowly
               made our way north to where the lake empties into the Eider
               River, which flows directly into the Kiel Canal.
            </Typography>
            <img
               src={require('./img/contributionsAdventurePageImg3.webp')}
               alt="img3"
               className="mt-10"
            />
            <img
               src={require('./img/contributionsAdventurePageImg4.webp')}
               alt="img4"
               className="mt-2"
            />
            <Typography className="mt-10">
               After a short stop, we found ourselves in the middle of the
               canal, surrounded by large container ships that frequented the
               canal for their deliveries. It was an impressive sight as we
               maneuvered our way between the ships.
            </Typography>
            <img
               src={require('./img/contributionsAdventurePageImg5.webp')}
               alt="img5"
               className="mt-10"
            />
            <Typography className="mt-10">
               Through the Kiel Canal we finally arrived directly in the Baltic
               Sea, more precisely in the Kiel Fjord. Here the vastness of the
               sea opened up to us and we suddenly felt very small against this
               impressive backdrop.
            </Typography>
            <img
               src={require('./img/contributionsAdventurePageImg6.webp')}
               alt="img6"
               className="mt-10"
            />
            <Typography className="mt-10">
               After a few more kilometers we discovered a secluded spot,
               perfect for our little camp. It was a rugged bluff, lined with
               fallen trees, and no human was to be seen far and wide. We set up
               our kirra and stowed our gear. With the driftwood that the ocean
               had washed up, we lit a warming fire and prepared the fish we had
               brought with us.
            </Typography>
            <img
               src={require('./img/contributionsAdventurePageImg7.jpg')}
               alt="img7"
               className="mt-10"
            />
            <Typography className="mt-10">
               Then it was time to say goodbye. We thanked Andy for this mini
               adventure. On the way home, we thought about how important it is
               to explore and appreciate the nature that surrounds us. We knew
               that in the future we would go exploring more often to experience
               many more of such magical moments.
            </Typography>
            <img
               src={require('./img/contributionsAdventurePageImg8.webp')}
               alt="img8"
               className="mt-10"
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
                     className="bg-black text-white rounded-none"
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

export default ContributionsAdventuresPage;
