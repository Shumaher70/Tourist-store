import { Button, Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';
import ContributionsCard from './ContributionsCard';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import { NavLink } from 'react-router-dom';

const FootherTentSizePage = () => {
  return (
    <>
      <TemplatePage
        title="TENT SIZES"
        description="Discover our overview of all tent sizes to find the perfect tent for your adventure."
        buttonTitle="LEARN MORE"
        buttonStyle="bg-black text-white"
        img="footherTentSizePageImg.webp"
      />
      <div className="px-[10%] py-[5%]">
        <Typography>
          We have compiled the dimensions below so that you can be sure that all
          your equipment will fit. If you have any further questions, please
          don't hesitate to contact us!
        </Typography>

        <div className="mt-20 flex flex-col flex-1">
          <Typography>
            <b>FISTRAL:</b> Inflatable tent for 1-2 people
            <img
              src={require('./img/footherTentSizePageSizeImg1.webp')}
              alt="size"
              className="mt-5"
            />
          </Typography>
        </div>

        <div className="mt-20 flex flex-col flex-1">
          <Typography>
            <b>KIRRA:</b> Inflatable tent for 2 people + a lot of equipment
            <img
              src={require('./img/footherTentSizePageSizeImg2.webp')}
              alt="size"
              className="mt-5"
            />
          </Typography>
        </div>

        <div className="mt-20 flex flex-col flex-1">
          <Typography>
            <b>THE CAVE:</b>Inflatable tent for 2-3 people
            <img
              src={require('./img/footherTentSizePageSizeImg3.webp')}
              alt="size"
              className="mt-5"
            />
          </Typography>
        </div>

        <div className="mt-20 flex flex-col flex-1">
          <Typography>
            <b>BACKDOOR:</b>Inflatable tent for 4 people
            <img
              src={require('./img/footherTentSizePageSizeImg4.webp')}
              alt="size"
              className="mt-5"
            />
          </Typography>
        </div>

        <div className="mt-20 flex flex-col flex-1">
          <Typography>
            <b>NIAS:</b>Inflatable tent for 4-6 people
            <img
              src={require('./img/footherTentSizePageSizeImg5.webp')}
              alt="size"
              className="mt-5"
            />
          </Typography>
        </div>

        <div className="mt-20 flex flex-col flex-1">
          <Typography>
            <b>MAVERICKS:</b> Event/Expedition Tent
            <img
              src={require('./img/footherTentSizePageSizeImg6.webp')}
              alt="size"
              className="mt-5"
            />
          </Typography>
        </div>
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
              className="bg-black text-white rounded-none mt-5"
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

export default FootherTentSizePage;
