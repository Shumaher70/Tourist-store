import { Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const CooleverTechnologyPage = () => {
   return (
      <>
         <TemplatePage
            title="COOLEVER TECHNOLOGY"
            description="Functional shirts are ideal for sports. Regular t-shirts & longsleeves are perfect for everyday wear. The HEIMPLANET COOLEVER shirts combine the best of both."
            buttonTitle="learn More"
            buttonStyle="bg-black text-white"
            img="CooleverTechnologyPageMainImg.webp"
            id="dis"
         />

         <div id="dis" className="wrapper w-screen flex flex-col items-center ">
            <div
               className="
               2xl:w-[40vw] 
               xl:w-[50vw] 
               lg:w-[60vw] 
               sm:w-[70vw]
            "
            >
               <Typography>
                  Thanks to the unique COOLEVER technology, moisture is
                  immediately absorbed by the material, transported away from
                  the body and thus ensures a pleasant feeling on the skin. Even
                  after a hearty hike to the next peak or a strenuous run or
                  workout, the T-shirts and longsleeves don't feel wet and cold
                  - even if you've sweated a lot.
               </Typography>

               <Typography className="mt-3">
                  All HEIMPLANET T-shirts & longsleeves use COOLEVER technology
                  with an improved fabric cross-section that absorbs sweat &
                  moisture. The surface area of COOLEVER yarn is over 30% larger
                  than yarn in conventional fabrics, allowing for faster
                  evaporation and leaving you feeling fresh.
               </Typography>

               <Typography className="mt-5 font-bold">
                  FAST ABSORBING
               </Typography>

               <img
                  src={require('../pages/img/CooleverTechnologyPage1.webp')}
                  alt="CooleverTechnologyPage1"
                  className="mt-3"
               />

               <Typography className="mt-3">
                  Within a short time, sweat and moisture are absorbed and
                  dried, regulating the moisture content of the skin and
                  relieving the skin.
               </Typography>

               <Typography className="mt-5 font-bold">
                  MOISTURE MANAGEMENT
               </Typography>

               <img
                  src={require('../pages/img/CooleverTechnologyPage2.webp')}
                  alt="CooleverTechnologyPage2"
                  className="mt-3"
               />

               <Typography className="mt-3">
                  It prevents wet fibres from raising or lowering body
                  temperature after intense exercise, and it continuously
                  regulates and keeps you comfortable.
               </Typography>

               <Typography className="mt-5 font-bold">
                  EASY TO CARE FOR
               </Typography>

               <img
                  src={require('../pages/img/CooleverTechnologyPage3.webp')}
                  alt="CooleverTechnologyPage3"
                  className="mt-3"
               />

               <Typography className="mt-3">
                  After washing, the fibre dries quickly, making the clothes
                  easy to care for. This remains reasonably durable even after
                  repeated washing.
               </Typography>

               <Typography className="mt-3 font-bold">
                  MAIN FEATURES:
               </Typography>

               <ul className="mt-3 list-disc">
                  <li>Mix of cotton, polyester and spandex</li>
                  <li>very pleasant feeling & high wearing comfort</li>
                  <li>
                     Quick-drying: protects your body from overheating or
                     cooling down
                  </li>
                  <li>Easy care: dries faster and creases visibly less </li>
               </ul>

               <Typography className="mt-5">
                  When travelling, you can wash your T-shirt / longsleeve
                  quickly and easily, and it will be dry and ready for use again
                  in no time. Thanks to the elastane, the fabric is super
                  dimensionally stable and stays in shape for a long time - even
                  after frequent wearing and washing. This also makes your shirt
                  very durable and sustainable.
               </Typography>

               <Typography className="mt-3 font-bold">
                  Discover all COOLEVER T-shirts & longsleeves!
               </Typography>
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

export default CooleverTechnologyPage;
