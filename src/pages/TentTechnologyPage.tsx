import { Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const TentTechnologyPage = () => {
   return (
      <>
         <TemplatePage
            title="TENT TECHNOLOGY"
            description="Our patented multi-chamber safety system allows you to youto inflate the entire Airframe (IDG) in a single step."
            buttonTitle="learn more"
            buttonStyle="bg-black text-white"
            img="TentTechnologyPageMainImg.webp"
            id="dis"
         />
         <div id="dis" className="wrapper w-full flex flex-col items-center">
            <div
               className="
               2xl:w-[40vw] 
               xl:w-[50vw] 
               lg:w-[60vw] 
               sm:w-[70vw]
            "
            >
               <Typography className="text-[18px] underline font-bold">
                  THE GEODESIC PRINCIPLE
               </Typography>

               <Typography className="mt-3">
                  In addition to their great stability, geodesic domes offer a
                  very efficient structure due to their excellent
                  material-to-volume ratio. In geodesic tents, three bladder
                  cross each other several times. This divides the outer tent
                  surface into smaller sections, resulting in greater inherent
                  and wind stability. The geodesic tent is therefore the first
                  choice for very strong winds that frequently change direction.
                  Snow loads are also no problem for most geodesics. This type
                  of tent has proven itself especially in bad weather areas.
                  Geodesics require few or no pegs in calm conditions. This is
                  an important aspect when the ground is predominantly hard,
                  e.g. in the mountains.
               </Typography>

               <Typography className="mt-3">
                  We have implemented this principle in our Inflatable Diamond
                  Grid (IDG) in our inflatable tents. The inflatable geodesic
                  structure is built from modular double-layered struts. This
                  provides excellent stability and guarantees that our tents are
                  easy to pitch - so you can get the most out of your trip.
               </Typography>

               <img
                  src={require('../pages/img/TentTechnologyPage.webp')}
                  alt="TentTechnologyPage"
                  className="mt-5"
               />

               <Typography className="text-[18px] underline font-bold mt-3">
                  KEY COMPONENTS
               </Typography>

               <Typography className="mt-3 font-bold">
                  Patented multi-chamber safety system
               </Typography>

               <Typography className="mt-3">
                  Our patented multi-chamber safety system allows you to inflate
                  the entire Airframe (IDG) in a single step. After inflation,
                  the Airframe can be divided into individual chambers, which
                  ensures sufficient emergency stability in case one part is
                  damaged, as all other struts remain stable. In addition, it is
                  very easy to locate the defective part in order to repair or
                  replace it.
               </Typography>

               <Typography className="mt-3 font-bold">
                  Double layer construction
               </Typography>

               <Typography className="mt-3">
                  The Airframe feature a durable two-layer construction: an
                  extra airtight TPU (thermoplastic polyurethane) bladder keeps
                  the air inside for an extended period of time and the outer
                  jacket provides support and durability. The outer shell is
                  made of a high-strength polyester fabric for extra strength
                  and durability.
               </Typography>

               <Typography className="mt-3 font-bold">
                  2-in-1 valves for quick inflation and deflation
               </Typography>

               <Typography className="mt-3">
                  Each chamber of the IDG has at least one 2-in-1 valve, each
                  with two closures: a non-return valve for easy inflation of
                  the Airframe and a large opening for easy deflation. This
                  allows the tent to be set up and taken down quickly and
                  efficiently.
               </Typography>

               <Typography className="mt-3 font-bold">Set up</Typography>

               <Typography className="mt-3">
                  Inflating our tents works intuitively and follows a simple
                  principle: Unroll, inflate & done! The special feature:
                  Inflatable frame, inner and Flysheet function as a unit and do
                  not need to be assembled. And this is how it works: Unroll the
                  tent, close all valves, take one of the valves (whichever one
                  you prefer) and inflate it with one of the Heimplanet-pumps or
                  with any commercially available pump. Welcome home!
               </Typography>

               <iframe
                  src="https://player.vimeo.com/video/289853334?h=f932b9fe9etitle=0byline=0portrait=0"
                  title="hello"
                  className="lg:h-[60vh] md:h-[50vh] sm:h-[40vh] h-[25vh] w-full mt-5"
               />

               <Typography className="mt-5">
                  Want to learn more about our technologies? See also:
               </Typography>

               <Typography className="mt-5">COOLEVER technology</Typography>

               <Typography className="mt-5">DYECOSHELL technology</Typography>
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
      </>
   );
};

export default TentTechnologyPage;
