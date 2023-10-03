import TemplatePage from './TemplatePage';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';
import { Typography } from '@material-tailwind/react';

const OnePercentPage = () => {
   return (
      <>
         <TemplatePage
            title="1% FOR THE PLANET"
            description="1% FOR THE PLANET is a global coalition of companies that recognise the need to protect the natural environment."
            img="onePercentPageImg.jpg"
            buttonTitle="learn more"
            buttonStyle="bg-black text-white"
            id="dis"
         />
         <Typography id="dis" className="px-[10%] lg:px-[30%] py-[5%]">
            They understand that profit and loss are directly linked to
            environmental health and address the social and environmental
            impacts of the industry. We have been part of the 1% FOR THE PLANET
            community for a number of years and will donate 1% of our sales to
            the preservation and restoration of the natural environment. Instead
            of giving this money to 1% FOR THE PLAN ET, we will donate the money
            directly to recognised non-profit organisations of our choice and in
            return we will receive a certification from 1% FOR THE PLANET.
            Direct contact with the non-profit organisations is more efficient
            and faster, 1% FOR THE PLANET helps with expert advice. Our planet
            can't wait!
            <br />
            <div className="h-[250px] w-full sm:w-full sm:h-[350px] lg:w-[70%] lg:h-[400px] my-5">
               <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/rZ0Stj6MWNU"
                  title="About 1% for the Planet"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
               ></iframe>
            </div>
            The evidence is overwhelming: climate change is an imminent threat,
            our soils, waters and species are under threat as never before. If
            we do not act now, the viability of our planet and our quality of
            life - not to mention the health of our economy - are at existential
            risk.
            <br />
            <br />
            If you are a business owner (or have influence over your boss),
            consider becoming a member of this socially and environmentally
            progressive group. By contributing 1% of our total annual turnover
            to organisations, we, the members of 1% FOR THE PLANET, are making
            real change. And members receive other benefits: The satisfaction of
            paving the way for greater corporate responsibility in the business
            world, and the recognition, support and patronage of conscientious
            consumers who appreciate a serious commitment to the environment.
            <div className="h-[250px] w-full sm:w-full sm:h-[350px] lg:w-[70%] lg:h-[400px] my-5">
               <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3jLYaTLzI58"
                  title="About 1% for the Planet"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
               ></iframe>
            </div>
            More info: onepercentfortheplanet.org
         </Typography>
         <div className="px-[10%] py-[5%] bg-gray-100 flex-col">
            <ContribuionsCardWrapper
               title="MORE CONTRIBUTIONS"
               hideButton
               buttonTitle="DISCOVER"
            >
               <ContributionsCard
                  img="LifetimeGuaranteePageCardImg-1.webp"
                  title="SUP ADVENTURES - DOORSTEP TO OCEAN IN ONE DAY"
                  description="It was a sunny day when we decided to explore the pristine nature right outside our doorstep."
               />
               <ContributionsCard
                  img="LifetimeGuaranteePageCardImg-2.jpg"
                  title="OUR TIPS FOR TRAVELING LIGHT"
                  description="Space-saving and lightweight packing is a fundamental skill for any globetrotter."
               />
               <ContributionsCard
                  img="LifetimeGuaranteePageCardImg-3.webp"
                  title="CAMPING IN GERMANY"
                  description="More openings are in sight and it's time to plan the first trips outdoors. If you want to spend a night at a campsite in beautiful surroundings in Germany without being woken up by slamming car doors or motorhome generators, only to find that the first thing you see is a wall of caravans, it's not so easy."
               />
            </ContribuionsCardWrapper>
         </div>
      </>
   );
};

export default OnePercentPage;
