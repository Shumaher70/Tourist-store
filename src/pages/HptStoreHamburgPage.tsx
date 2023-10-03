import { Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const HptStoreHamburgPage = () => {
   return (
      <>
         <TemplatePage
            title="HPT STORE HAMBURG"
            description="What started two years ago with the search for a new office has developed into a completely different project."
            buttonTitle="Learn More"
            buttonStyle="bg-black text-white"
            img="HptStoreHamburgPageMainImg.webp"
            id="desc"
         />

         <div id="desc" className="w-full my-[5%] flex flex-col items-center">
            <div
               className="
               2xl:w-[40vw] 
               xl:w-[50vw] 
               lg:w-[60vw] 
               sm:w-[70vw]
            "
            >
               <Typography>
                  On 16 March we opened our first own shop, with a joint
                  exhibition of German Roamers.
               </Typography>

               <Typography className="mt-2">
                  What started two years ago with the search for a new office
                  has now developed into an extraordinary project of its own.
                  With our new premises at Shanghaialle 21 in Hamburg, we would
                  like to invite you to get to know us, HEIMPLANET with all its
                  facets.
               </Typography>

               <Typography className="mt-2">
                  Upstairs is our office, the place where we develop our
                  products and where you will find our team.
               </Typography>

               <img
                  src={require('../pages/img/HptStoreHamburgPage.webp')}
                  alt="HptStoreHamburgPage"
                  className="mt-5"
               />

               <Typography className="mt-5">
                  The rest of the space is open to the public. Grab a coffee and
                  discover the products or HEIMPLANET products or lose yourself
                  in one of the books we have selected in cooperation with
                  Sauter + Lackmann.
               </Typography>

               <Typography className="mt-2">
                  Our goal is for this place to become much more than just a
                  shop or shop. We want to use this space as a kind of stage for
                  our ambassadors, partners and also other brands. This space is
                  dedicated to the theme "Modern Outdoor", which we want to
                  celebrate with regular exhibitions, workshops and
                  collaborations.
               </Typography>

               <Typography className="mt-2">
                  We want to create a place where there is always something
                  exciting to discover.
               </Typography>

               <Typography className="mt-2 font-bold">
                  Welcome to HEIMPLANET.
               </Typography>
            </div>
         </div>

         <div className="wrapper">
            <ContribuionsCardWrapper
               title="MORE CONTRIBUTIONS"
               hideButton
               buttonTitle="discover"
            >
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

export default HptStoreHamburgPage;
