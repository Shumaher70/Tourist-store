import { Button, Typography } from '@material-tailwind/react';

import TemplatePage from './TemplatePage';
import { NavLink } from 'react-router-dom';
import ContributionsCard from './ContributionsCard';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';

const LifetimeGuaranteePage = () => {
  return (
    <>
      <TemplatePage
        title="LIFETIME SUPPORT & WARRANTY"
        description="OUR COMMITMENT TO QUALITY IS MORE THAN JUST WORDS, IT IS A LIFELONG PHILOSOPHY!"
        img="LifetimeGuaranteePageMainImg.webp"
        buttonTitle="learn more"
        buttonStyle="bg-black text-white"
      />
      <Typography className="px-[10%] py-[5%]">
        All HEIMPLANET products are built to withstand the harsh test of time.
        We use only durable materials that are crafted to ensure long-lasting
        performance even in the toughest environments. We take full
        responsibility for the high quality of our products. If you ever find
        that one of our products is not performing as promised, simply contact
        us here or contact one of our official dealers. If your product has any
        problems and does not meet our standards, we will repair or exchange it
        free of charge. In other cases, we will arrange for your product to be
        repaired for a reasonable fee. If repair is not possible, we will offer
        you the option of adding the product to our Re-Store/Recyclingprogram .
        Please understand that we cannot be held responsible for damage caused
        by improper use or the natural life of the product. If you have any
        questions, please contact us or one of our certified dealers. For
        international warranty claims, the customer is responsible for the cost
        of shipping to our warehouse, import fees, duties, levies and VAT. If
        you have any questions regarding returns, simply send an e-mail to:
        service[at]heimplanet.com
      </Typography>
      <div className="px-[10%] py-[5%] bg-gray-100 flex-col">
        <div className="flex justify-between">
          <Typography
            variant="h2"
            className="font-normal uppercase text-2xl sm:text-4xl"
          >
            MORE CONTRIBUTIONS
          </Typography>
          <NavLink to="">
            <Button
              color="white"
              className="rounded-none border-[1px] border-[#000000]"
            >
              DISCOVER
            </Button>
          </NavLink>
        </div>
        <ContribuionsCardWrapper>
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

export default LifetimeGuaranteePage;
