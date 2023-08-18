import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button, Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';
import AnchorLink from '../components/AnchorLink';

const InspirationSectionAboutusPage = () => {
  const navHeightSlice = useSelector(
    (state: RootState) => state.size.heightNav
  );
  const navMissionRef = useRef<HTMLDivElement>(null);
  const navStoreRef = useRef<HTMLDivElement>(null);
  const navNewsRef = useRef<HTMLDivElement>(null);

  const [scrollTop, setScrollTop] = useState<number>(0);
  const [navFixed, setNavFixed] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const heightMission = Number('-' + navMissionRef.current?.offsetHeight);
    });
  }, []);

  useEffect(() => {
    if (scrollTop < 0) {
      return setNavFixed(true);
    }

    setNavFixed(false);
  }, [scrollTop, navFixed]);

  const HandlerOffsetBottom = (element: number) => {
    setScrollTop(element - +navHeightSlice);
  };

  return (
    <div>
      <TemplatePage
        scrollRefTop={HandlerOffsetBottom}
        title="ABOUT US"
        img="InspirationSectionAboutusPageMainImg.webp"
        buttonTitle="learn More"
        buttonStyle="bg-black text-white"
        extraButton={true}
        extraButtonStyle="border-[1px] border-black"
        extraButtonTitle="jobs"
      />
      <div
        style={
          navFixed ? { position: 'fixed', top: `${navHeightSlice}px` } : {}
        }
        className="flex justify-center items-center gap-5 w-full h-[60px] bg-white z-10 border-y-[1px] border-[rgba(133,133,133,.2)]"
      >
        <AnchorLink href="#mission" offset={+navHeightSlice + 60}>
          <Typography className="text-black font-normal cursor-pointer">
            MISSION
          </Typography>
        </AnchorLink>
        <AnchorLink href="#store" offset={+navHeightSlice + 60}>
          <Typography className="text-black font-normal cursor-pointer">
            STORE
          </Typography>
        </AnchorLink>
        <AnchorLink href="#news" offset={+navHeightSlice + 60}>
          <Typography className="text-black font-normal cursor-pointer">
            NEWS
          </Typography>
        </AnchorLink>
      </div>

      <div ref={navMissionRef} id="mission" className="px-[10%] py-[5%]">
        <div className="flex flex-col items-center text-center">
          <Typography className="font-normal text-black">MISSION</Typography>
          <Typography className="text-2xl font-normal mt-5">
            WE HAVE HEIMPLANET LAUNCHED BECAUSE WE SEE OPPORTUNITIES FOR
            IMPROVEMENT
          </Typography>
          <Typography className="mt-5">
            We have realised that our expertise can be used to find better
            fabrics, fairer working conditions, better trained manufacturers,
            cleaner production routes and more thoughtful designs. They say
            quality is about meeting expectations. Why just meet them when you
            can exceed them? We keep going until there is nothing left to
            improve. Is that an unrealistic goal?
          </Typography>
        </div>
        <div className="mt-20 flex gap-10 flex-wrap justify-between">
          <div className="w-full h-full lg:w-[30vw] lg:h-[100vh]">
            <img
              src={require('./img/InspirationSectionAboutusPageMissionImg1.webp')}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full lg:w-[40vw] lg:h-[70vh] lg:-translate-y-10">
            <img
              src={require('./img/InspirationSectionAboutusPageMissionImg2.webp')}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full lg:w-[34vw] lg:flex justify-center items-center">
            <Typography className="w-full h-full lg:w-[30vw] lg:h-[30vh]">
              "We make products that last a long time, are high quality and very
              timeless. For us, that's the best way to combat waste of
              resources."
            </Typography>
          </div>
          <div className="w-full h-full lg:w-[35vw] lg:h-[50vh] lg:-translate-y-60">
            <img
              src={require('./img/InspirationSectionAboutusPageMissionImg3.webp')}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="px-[10%] py-[5%] flex flex-col sm:flex-row gap-5 bg-[#f6f6f6] border-y-[1px] border-black ">
        <div className="flex flex-col sm:items-start items-center flex-1 gap-5 ">
          <img
            src="https://heimplanet.com/cdn/shop/files/time.svg?v=1684219039"
            alt="img"
            className="sm:w-[20%] w-[10%]"
          />
          <Typography className="font-normal text-2xl">
            LIFETIME WARRANTY
          </Typography>
          <Typography>
            All HEIMPLANET-products are built to withstand the harsh test of
            time. We use only durable materials that are crafted to ensure
            long-lasting performance in the toughest environments.
          </Typography>
        </div>

        <div className="flex flex-col sm:items-start items-center flex-1 gap-5">
          <img
            src="https://heimplanet.com/cdn/shop/files/Heimplanet-1-Percent-For-The-Planet-Badge-Ball.png?v=1684319273"
            alt="img"
            className="sm:w-[20%] w-[10%]"
          />
          <Typography className="font-normal text-2xl">
            1% FOR THE PLANET
          </Typography>
          <Typography>
            1% for the Planet is a global association of companies that
            recognize the need to protect the natural environment. They realize
            that profit and loss are directly linked to the health of the
            environment.
          </Typography>
        </div>

        <div className="flex flex-col sm:items-start items-center flex-1 gap-5">
          <img
            src="https://heimplanet.com/cdn/shop/files/23-05-11_Icon_Transit.png?v=1684160419"
            alt="img"
            className="sm:w-[20%] w-[10%]"
          />
          <Typography className="font-normal text-2xl">DYECOSHELL</Typography>
          <Typography>
            It quickly became clear to us that we couldn't just take an
            off-the-shelf fabric to achieve our goals. Instead, we invested more
            time and energy in the - fundamental - development of a fabric
            concept.
          </Typography>
        </div>
      </div>

      <div className="px-[10%] py-[5%] ">
        <Typography className="text-4xl font-normal">HIGHLIGHTS</Typography>
      </div>

      <div
        ref={navStoreRef}
        id="store"
        className="pl-[10%] bg-[#f6f6f6] flex md:flex-row flex-col"
      >
        <div></div>
        <div className="py-[5%] flex flex-col justify-center flex-1 gap-5">
          <Typography className="font-normal text-4xl">
            HPT STORE HAMBURG
          </Typography>

          <div className="flex gap-5 mt-10">
            <img
              src="https://heimplanet.com/cdn/shop/files/ort.svg?v=1684219026"
              alt="img"
              className="w-[5%]"
            />
            <div className="flex flex-col gap-2">
              <Typography className="font-normal text-balck">
                Address
              </Typography>
              <Typography>Shanghaiallee 21, 20457 Hamburg, Germany</Typography>
            </div>
          </div>

          <div className="flex gap-5">
            <img
              src="https://heimplanet.com/cdn/shop/files/time.svg?v=1684219039"
              alt="img"
              className="w-[5%]"
            />
            <div className="flex flex-col gap-2">
              <Typography className="font-normal text-balck">
                Opening hours
              </Typography>
              <Typography>Monday - Friday: 10:00 a.m. - 6:00 p.m.</Typography>
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <Button color="white" className="bg-black text-white rounded-none">
              Learn More
            </Button>
            <Button
              color="white"
              className="border-[1px] rounded-none border-black"
            >
              Storefinder
            </Button>
          </div>
        </div>
        <div className="flex flex-1 md:px-0 md:py-0 pr-[10%] md: pb-[5%]">
          <img
            src={require('./img/InspirationSectionAboutusPageHptStoreImg.webp')}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="px-[10%] py-[5%] w-full">
        <div className="flex justify-between">
          <Typography className="font-normal sm:text-4xl text-2xl">
            CAREER & JOBS
          </Typography>
          <Button
            color="white"
            className="hidden sm:block border-[1px] rounded-none border-black"
          >
            Discover
          </Button>
        </div>

        <div className="flex pt-[5%] sm:flex-row flex-col">
          <div className="xl:w-[15%] lg:w-[15%] md:w-[20%] w-[15%]">
            <Typography>JOBS</Typography>
          </div>

          <div className="flex flex-col gap-10 w-full sm:mt-0 mt-5">
            <div>
              <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                STUDENT ASSISTANT CUSTOMER SERVICE (M/F/D)
              </Typography>
              <Typography className="uppercase text-sm">
                PART-TIME - HAMBURG
              </Typography>
            </div>

            <div>
              <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                Student Assistant Finance (m/f/d)
              </Typography>
              <Typography className="uppercase text-sm">
                Part-time - Hamburg
              </Typography>
            </div>

            <div>
              <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                Public Relations & Social Media Manager (m/f/d)
              </Typography>
              <Typography className="uppercase text-sm">
                Full-time - Hamburg
              </Typography>
            </div>

            <div>
              <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                Sales Manager (m/f/d)
              </Typography>
              <Typography className="uppercase text-sm">
                Sales Manager (m/f/d)
              </Typography>

              <div className="flex sm:flex-row flex-col bg-[#f6f6f6] rounded-lg mt-10 p-5 justify-between items-center gap-5">
                <Typography className="font-normal xl:text-2xl lg:text-1xl uppercase">
                  NO SUITABLE JOB THERE? APPLY WITH PLEASURE INIATIV
                </Typography>
                <Button
                  color="white"
                  className="border-[1px] border-black rounded-none"
                >
                  unsolicited Application
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-[10%] py-[5%] relative">
        <Typography className="font-normal text-white text-2xl lg:w-[65%] w-full">
          HEIMPLANET IS INSPIRED BY THE EXCITEMENT OF TRAVEL.
        </Typography>
        <Typography className=" text-white lg:w-[65%] w-full">
          When you travel, you feel alive. All your senses are awake and you
          always expect something new. You are constantly adapting to new
          situations, new people, new cultures and new environments. You have to
          rely on less and you can discover more. When you get involved in the
          experience, you not only get to know new things, but also yourself.
        </Typography>
        <div className="flex gap-5">
          <Button color="white" className="bg-white rounded-none text-black">
            TENTS
          </Button>
          <Button
            color="white"
            className="bg-transparent rounded-none text-white border-[1px] border-whiter"
          >
            Bags
          </Button>
        </div>
        <img
          src={require('./img/InspirationSectionAboutusPageHeimplanetImg.webp')}
          alt="img"
          className="absolute w-full h-full object-cover top-0 left-0 -z-10"
        />
      </div>
      <div ref={navNewsRef} id="news" className="px-[10%] py-[5%]">
        <div className="flex justify-between">
          <Typography className="font-normal sm:text-4xl text-2xl">
            MORE CONTRIBUTIONS
          </Typography>
          <Button
            color="white"
            className="hidden sm:block border-[1px] rounded-none border-black"
          >
            Discover
          </Button>
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
    </div>
  );
};

export default InspirationSectionAboutusPage;
