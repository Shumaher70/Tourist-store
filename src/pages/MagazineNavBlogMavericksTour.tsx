import { Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const MagazineNavBlogMavericksTour = () => {
   return (
      <div className="overflow-hidden">
         <TemplatePage
            title="MAVERICKS ICE HOCKEY TOUR"
            description="Before the start of spring we took advantage of the cold days & the snow to start the HEIMPLANET MAVERICKS Ice Hockey Tour ..."
            buttonTitle="LEARN MORE"
            buttonStyle="bg-black text-white"
            img="MagazineNavBlogMavericksTourMainImg.webp"
            id="mavericks"
         />
         <div
            id="mavericks"
            className="wrapper w-screen flex flex-col items-center "
         >
            <div
               className="
               2xl:w-[40vw] 
               xl:w-[50vw] 
               lg:w-[60vw] 
               sm:w-[70vw]
            "
            >
               <Typography>
                  We grabbed the MAVERICKS tent, a stove, food, drinks, hockey
                  sticks & skates and headed out. It was a feast to spend the
                  weekend out in the snow .... see for yourself!
               </Typography>

               <iframe
                  className="w-full h-[30vh] sm:h-[50vh] mt-5 relative"
                  src="https://www.youtube.com/embed/n-2z2jjbcnQ"
                  title="HEIMPLANET GoOut21: Mavericks Eishockey Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
               />

               <Typography className="mt-5">
                  Even if we all wish for a quicker way out of the pandemic,
                  there are still countless opportunities for adventure - it's
                  easy, you just have to be creative - it's up to us!
               </Typography>

               <img
                  src={require('../pages/img/MagazineNavBlogMavericksTourImg.webp')}
                  alt="MagazineNavBlogMavericksTourImg"
               />

               <Typography className="mt-5">
                  Especially during this special time, the GoOut21 Winter Camp
                  weekend was just the right thing to see & experience something
                  different!
               </Typography>

               <Typography className="mt-5">Stay creative!</Typography>
            </div>
         </div>
         <div className="wrapper">
            <ContribuionsCardWrapper
               hideButton
               title="MORE CONTRIBUTIONS"
               buttonTitle="DISCOVER"
            >
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
      </div>
   );
};

export default MagazineNavBlogMavericksTour;
