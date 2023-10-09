import { Button, Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import { NavLink } from 'react-router-dom';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';

const ContributionsCampingPage = () => {
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

         <div id="dis" className="wrapper">
            <Typography>
               Campsites increasingly resemble grassy car parks, wild camping is
               prohibited almost everywhere, even non-motorised, and bivouacking
               is a grey area that requires a good dose of courage and
               self-confidence.
            </Typography>
            <img
               src={require('./img/ContributionsCampingPageImg1.webp')}
               alt="img1"
               className="mt-5"
            />
            <Typography className="mt-5">
               Most people with a love of air and nature will understand that in
               a densely populated country like Germany, natural areas need
               special protection. Animals and plants urgently need the little
               space we still allow them. Nature reserves and national parks are
               therefore absolutely taboo for any overnight adventure.
            </Typography>
            <img
               src={require('./img/ContributionsCampingPageImg2.webp')}
               alt="img2"
               className="mt-5"
            />
            <Typography className="mt-5">
               About Wildcamping in Germany
            </Typography>
            <Typography className="mt-5">
               Wild camping is relatively confusing in Germany. The laws and
               guidelines vary depending on the federal state. Section 59 of the
               Federal Nature Conservation Act states that anyone is allowed to
               "enter the open countryside on roads and paths and on unused land
               for the purpose of recreation". This includes private roads,
               field margins, heathland, wasteland and fallow land as well as
               agricultural land outside the period of use. The period of use is
               the time between sowing and tillage. The right of access also
               includes the use of wheelchairs or bicycles on paths
            </Typography>
            <Typography className="mt-5">
               Access to the forest, on the other hand, is regulated by the
               Federal Forest Act. It is uniformly regulated that according to
               paragraph 14 "entering the forest for recreational purposes" is
               allowed - the federal states regulate the details. This also
               includes camping and spending the night outside designated
               campsites.
            </Typography>
            <Typography className="mt-5">
               Nature conservation areas, nature reserves, national parks and
               landscape conservation areas occupy a special position. In these
               areas, wild camping is usually strictly prohibited. Violations,
               especially other offences such as littering, can result in heavy
               fines. As a general rule, abide by local laws and treat nature
               with respect. It is also advisable to ask the owner for
               permission before spending the night on their property - a
               friendly request is usually well received!
            </Typography>
            <img
               src={require('./img/ContributionsCampingPageImg3.webp')}
               alt="img3"
               className="mt-5"
            />
            <Typography className="mt-5">
               If you want to play it safe in Germany and still spend the night
               as close to nature as possible, you can head for a campsite or
               ask the local forestry authority, but also the respective
               landowner. An emergency bivouac is usually allowed everywhere and
               planned bivouacking (spending the night outdoors without a tent)
               is usually tolerated for one night - with the exception of
               protected areas where overnight camping is expressly prohibited.
            </Typography>
            <Typography className="mt-5">
               As we want to promote climate-friendly travel, we have put
               together a selection for everyone who travels by bike, on foot,
               by canoe or kayak. Some require registration or application. Some
               are free, others require a membership fee. What they all have in
               common is that you are invited and welcome to pitch your tent
               car-free!
            </Typography>
            <Typography className="mt-5">
               popupcamps.de offers exceptional camping experiences on temporary
               sites. A PUC should be a feel-good place for you where you can
               really relax. And legally and without fear of being caught "wild
               camping". They also value cleanliness and the avoidance of
               rubbish.
            </Typography>
            <Typography className="mt-5">
               coolcamping.com: Camping is about finding the very special
               places. The team has been searching for the very best campsites
               for years. You'll also find guest reviews for each campsite.
            </Typography>
            <Typography className="mt-5">
               trekkingtrails.de is a great service: Thomas Weingärtner from
               TrekkingTrails has marked all trekking sites in Germany on a map.
               Different rules apply to the trekking sites: Some have a compost
               toilet, are chargeable and must be reserved in advance, elsewhere
               there is only a free meadow.
            </Typography>
            <Typography className="mt-5">
               1nitetent.com works like Couchsurfing - only outside. Someone
               gives you their garden or property for free so you can camp there
               for a night.
            </Typography>
            <Typography className="mt-5">
               dachgeber.de offers sleeping places by cyclists for cyclists!
               Dachgeber is based on the principle of reciprocity: you sleep at
               my place and I sleep at yours. Sympathetically old-fashioned:
               every year, either a printed booklet or a pdf file is published
               with a directory of over 3,000 places to stay in your house or as
               a campsite in your garden. Not a cool app, but a great,
               non-commercial and ADFC-affiliated project. Membership costs 15
               euros a year, 10 euros for ADFC members. Those arriving on foot
               or by train are also welcome by prior arrangement.
            </Typography>
            <Typography className="mt-5">
               warmshowers.org works similarly to Dachgeber, but is aimed
               exclusively at cyclists and collects sleeping places all over the
               world. Meanwhile, 160,000 cycling enthusiasts use this platform
               based in Colorado, USA. Warmshowers is non-commercial and
               finances itself through donations and a one-time admission fee of
               30 dollars.
            </Typography>
            <Typography className="mt-5">
               campspace.com a unique outdoor adventure. Discover beautiful and
               sustainable places in a tent, tree house or cabin. Breathe fresh
               air, feel small among huge trees or have a conversation around a
               warm campfire. Spending time outdoors connects you with yourself,
               with nature and with the people around you.
            </Typography>
            <Typography className="mt-5">
               trekking-eifel.de can be used for a fee of 10 euros. You get
               something more than just a place to camp - seating, sanitary
               facilities and wooden platforms invite you to enjoy the fresh
               air, even with one foot in the comfort zone.
            </Typography>
            <Typography className="mt-5">
               wildes-sh.de In Schleswig-Holstein there are also designated
               nature campsites, which are not only provided by the state but
               also partly by private individuals. The Wildes Schleswig-Holstein
               page offers all cyclists and hikers location, coordinates and
               brief information on the sites.
            </Typography>
            <Typography className="mt-5">
               zeltzuhause.de and mycabin.eu offer tent sites on private
               property at reasonable prices. Not exclusively for car-free
               travellers, but especially with Campspace and MyCabin I like that
               sustainable travel is also a topic there on the blog and that
               low-carbon travel is promoted.
            </Typography>
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

export default ContributionsCampingPage;
