import { Button, Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import { NavLink } from 'react-router-dom';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const ContributionsSectionMaharishiPage = () => {
   return (
      <>
         <TemplatePage
            title="MAHARISHI X HEIMPLANET"
            description="London-based streetwear label Maharishi and HEIMPLANET celebrate nature with a DPM: Golden Tigerstripe Camouflage."
            img="ContributionsPageImg.jpg"
            buttonTitle="Learn More"
            buttonStyle="bg-black text-white"
            id="magarishi"
         />
         <div id="magarishi" className="px-[15%] py-[5%]">
            <Typography>
               The limited edition tent combines Maharishi's signature aesthetic
               with the innovative tent design of HEIMPLANET and is aimed
               equally at outdoor enthusiasts and style-conscious campers.
            </Typography>

            <div className="flex flex-1">
               <img
                  src={require('./img/ContributionsSectionMaharishiPageImg1.webp')}
                  alt="img"
                  className="my-5"
               />
            </div>

            <Typography>
               Both HEIMPLANET and Maharishi share a similar philosophy when it
               comes to using patterns and structures from nature. So it made
               sense to develop a product together. Maharishi uses patterns and
               structures that exist in nature in his designs. HEIMPLANET also
               incorporates elements from nature - especially in terms of
               structures - when developing new designs. Both labels take a
               pacifist approach when it comes to using camouflage. They see it
               as a symbol of art and consider it a special way to celebrate and
               represent nature. During the development of their own
               camouflage-like pattern "Cairo Camo" by HEIMPLANET 2015, the book
               "DPM - Disruptive Pattern Material" by Maharishi founder Hardy
               Blechman was a great inspiration.
            </Typography>

            <div className="flex flex-1">
               <img
                  src={require('./img/ContributionsSectionMaharishiPageImg2.webp')}
                  alt="img"
                  className="my-5"
               />
            </div>

            <Typography>
               For the collaboration, Maharishi selected a special DPM: Golden
               Tigerstripe Camouflage, which is a reproduction of a rare
               Vietnamese Tigerstripe pattern known for its use by U.S. Special
               Forces in advising the South Vietnamese Army. The pattern is used
               inside the tent not to make the tent invisible, but to celebrate
               the roots of camouflage in nature and its use by artists.
            </Typography>

            <div className="flex flex-1">
               <img
                  src={require('./img/ContributionsSectionMaharishiPageImg3.webp')}
                  alt="img"
                  className="my-5"
               />
            </div>

            <Typography>
               The tent itself is the iconic model THE CAVE from HEIMPLANET in
               an olive green hue. Constructed with a geodesic dome structure,
               it withstands even the harshest conditions and is used by
               adventurers around the world. Thanks to its inflatable structure,
               the tent can be pitched in less than a minute, making it the
               perfect companion for any outdoor adventure.
               <br />
               Das limitierte Heimplanet x Maharishi Edition THE CAVE ist ab dem
               8. Juni HIER oder auf der Website von Maharishi zum Preis von
               1.149,- EUR / 1.249,- USD erhältlich.
            </Typography>

            <div className="flex flex-1">
               <img
                  src={require('./img/ContributionsSectionMaharishiPageImg4.webp')}
                  alt="img"
                  className="my-5"
               />
            </div>

            <Typography className="font-normal text-black">
               About Maharishi
            </Typography>
            <br />
            <Typography>
               Founded in 1994 by Hardy Blechman, Maharishi is an urban-elegant
               streetwear brand from the UK. Blechman is known for his mix of
               cultural influences, which is evident in both the brand's name
               (Sanskrit for "great seer") and its design language, which uses
               embroidered symbols from Asian culture such as dragons and
               tigers. The label produces functional, purposeful clothing for
               the "urban jungle." On the streets, Maharishi represents a kind
               of uniform in everyday life, based on a fusion of Eastern and
               Western silhouettes and graphic influences. The label takes a
               pacifist approach to the use of camouflage, viewing it as a
               symbol of nature and art. Maharishi founder Hardy Blechman was
               named Streetwear Designer of the Year in 2000. In his book "DPM -
               Disruptive Pattern Material," he philosophizes about the origins
               of camouflage in nature, its use in the military, and its use in
               the lifestyle areas of today's modern world.
            </Typography>
         </div>
         <div className="px-[10%] py-[5%]">
            <div className=" w-full flex justify-between items-center">
               <Typography
                  variant="h2"
                  color="black"
                  className="sm:text-4xl text-2xl"
               >
                  CURRENT CONTRIBUTIONS
               </Typography>
               <NavLink onClick={() => window.scrollTo(0, 0)} to="/pages/blog">
                  <Button
                     color="white"
                     className="border-[1px] border-black rounded-none"
                  >
                     DISCOVER
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

export default ContributionsSectionMaharishiPage;
