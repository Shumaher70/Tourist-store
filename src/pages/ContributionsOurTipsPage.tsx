import React from 'react';
import TemplatePage from './TemplatePage';
import { Button, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const ContributionsOurTipsPage = () => {
   return (
      <>
         <TemplatePage
            title="SUP ADVENTURES - DOORSTEP TO OCEAN IN ONE DAY"
            description="It was a sunny day when we decided to explore the pristine nature right outside our doorstep."
            buttonTitle="LEARN MORE"
            buttonStyle="bg-black text-white"
            img="contributions-3.jpg"
            id="supAdventures"
         />

         <div id="supAdventures" className="wrapper">
            <Typography>
               Space-saving packing is a basic skill that every traveler should
               have. Luggage that is light and well thought out allows you to
               face the chaos of travel calmly and well equipped. With small
               luggage, you can still catch the connecting train despite delays
               or squeeze yourself and your luggage into the tiny bus that runs
               only once a day.
            </Typography>
            <img
               src={require('./img/ContributionsOurTipsPageImg1.webp')}
               alt="img1"
               className="mt-2"
            />
            <Typography className="mt-2">
               Of course, the luggage also reflects personal ideas of comfort
               and style. But if you follow a few principles, light luggage will
               not only save your back, but also your nerves. Because in all
               likelihood, your trip will not be without one or two unplanned
               incidents.
            </Typography>
            <Typography variant="h5" className="mt-5">
               MINIMUM PACKING - MAXIMUM TRAVEL
            </Typography>
            <img
               src={require('./img/ContributionsOurTipsPageImg2.webp')}
               alt="img2"
               className="mt-2"
            />
            <Typography className="mt-2">
               The best start for light luggage is the right bag. So the best
               way to start is to think about what bag you want to take with
               you. If you first gather everything that you want to take with
               you and then look in which bag everything fits, it will certainly
               turn out larger. Ideally, you take abag that can be taken on the
               plane as hand luggage, for example our TRAVEL PACK 34L. Then you
               can fill the bag - no stuffing! It's best to start with
               everything on our packing list. If there is still some space
               left, you can choose the items that seem indispensable to you.
               Everything else you can safely leave at home.
            </Typography>
            <Typography variant="h5" className="mt-5">
               AS TIGHT AS POSSIBLE
            </Typography>
            <img
               src={require('./img/ContributionsOurTipsPageImg3.webp')}
               alt="img3"
               className="mt-5"
            />
            <Typography className="mt-2">
               The following applies: Folded is smaller than crumpled. Folded
               becomes even smaller when rolled up. So fold your clothes neatly
               first and then roll them up. This way you can fill the space in
               the best possible way.
            </Typography>
            <Typography variant="h5" className="mt-5">
               DO I REALLY NEED IT?
            </Typography>
            <Typography className="mt-5">
               This should be your mantra while packing. Try not to think about
               every eventuality, but do not forget that traveling also means
               the unknown and new - you should also celebrate this while
               packing. If you find out on the way that you are missing
               something, you can usually buy it on the spot or borrow it.
            </Typography>
            <Typography variant="h5" className="mt-5">
               ALL GOOD THINGS COME IN THREES
            </Typography>
            <img
               src={require('./img/ContributionsOurTipsPageImg4.webp')}
               alt="img4"
               className="mt-5"
            />
            <img
               src={require('./img/ContributionsOurTipsPageImg5.webp')}
               alt="img5"
            />
            <Typography className="mt-5">
               This is also the perfect basic rule for the clothes you need on
               the road. Number 1 you wear, number 2 you wash, and number 3 you
               just dry. You usually don't have to change pants as often as
               shirts. Therefore, two pairs of long pants and one pair of shorts
               are usually enough.
            </Typography>
            <Typography variant="h5" className="mt-5">
               MINIMALIST & CLEAN
            </Typography>
            <img
               src={require('./img/ContributionsOurTipsPageImg6.webp')}
               alt="img6"
               className="mt-5"
            />
            <Typography className="mt-2">
               For your travel wardrobe, opt for simple pieces with sensible and
               functional details. Clothes that work everywhere. It's best to
               choose neutral-colored and matching garments so that you can
               combine them in the best possible way.
            </Typography>
            <Typography variant="h5" className="mt-5">
               LOOK FOR FUNCTIONAL & QUICK-DRYING MATERIALS
            </Typography>
            <img
               src={require('./img/ContributionsOurTipsPageImg7.jpg')}
               alt="img7"
               className="mt-5"
            />
            <Typography className="mt-2">
               This doesn't just apply to your towel, but your clothes as well.
               A merino or cotton blend is perfect for your travel wardrobe for
               several reasons.
            </Typography>
            <Typography className="mt-2">
               1. the pieces are also suitable for sports activities due to
               their functional properties, so they can be used for several
               situations. You do not need to take separate sportswear in doubt.
            </Typography>
            <Typography className="mt-2">
               2. they dry faster than garments made of pure natural fibers. So
               you can also wash them optimally by hand and wear them again the
               next day.
            </Typography>
            <Typography className="mt-2">
               3. merino has a natural anti-odor effect and can be worn several
               times without washing after drying and airing.
            </Typography>
            <Typography variant="h5" className="mt-5">
               WASHING CLOTHES IS ALWAYS AN OPTION
            </Typography>
            <img
               src={require('./img/ContributionsOurTipsPageImg8.webp')}
               alt="img8"
               className="mt-5"
            />
            <Typography className="mt-2">
               When packing, it is sometimes easy to forget that other countries
               also have washing machines. In most accommodations you can easily
               have your laundry washed. And in case of need, every
               accommodation has a sink and running water, so you can wash your
               clothes yourself with a few drops of your all-purpose liquid
               soap. By the way, this should be an essential part of your
               luggage.
            </Typography>
            <Typography variant="h5" className="mt-5">
               WASHING CLOTHES IS ALWAYS AN OPTION
            </Typography>
            <Typography className="mt-5">
               Perfect for a longer trip. Depending on the weather/climate, you
               may need to adjust the list.
            </Typography>
            <ul className="mt-5 list-disc	">
               <li>Backpack 34L</li>
               <li>
                  3-4x Packing Cubes - to protect from moisture & dirt and to
                  organize smaller items.
               </li>
               <li>
                  3x shirts - depending on the weather combination of t-shirt,
                  tank top and longsleeve
               </li>
               <li>2x long pants</li>
               <li>1x shorts</li>
               <li>3x pair of socks</li>
               <li>3x underwear</li>
               <li>Hoodie or crewneck</li>
               <li>Rain jacket and light down jacket if necessary</li>
               <li>Cap or hat</li>
               <li>Cloth</li>
               <li>comfortable running/trekking shoes</li>
               <li>comfortable mules</li>
               <li>Headlamp</li>
               <li>
                  Toothbrush, toothpaste, deodorant, small bottle of all-purpose
                  liquid soap.
               </li>
               <li>quick drying microfiber towel</li>
               <li>Camping Mug & Cutlery</li>
               <li>Camera + Battery & Cable</li>
               <li>Notebook + waterproof cover if necessary</li>
               <li>Smartphone & Headphones</li>
               <li>Frisbee</li>
               <li>First aid kit</li>
               <li>
                  Tear-resistant rope - ideal as a clothesline and carabiner to
                  attach smaller items to the outside of your backpack
               </li>
               <li>Passport and other documents</li>
               <li>Drinking bottle</li>
            </ul>
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

export default ContributionsOurTipsPage;
