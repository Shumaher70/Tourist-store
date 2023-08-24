import TemplatePage from './TemplatePage';
import { dammyShipping } from '../dammyDB/dammyShipping';
import { nanoid } from '@reduxjs/toolkit';
import { Button, Typography } from '@material-tailwind/react';
import ContribuionsCardWrapper from './ContribuionsCardWrapper';
import ContributionsCard from './ContributionsCard';
import { NavLink } from 'react-router-dom';

const FootherShippingPage = () => {
  return (
    <>
      <TemplatePage
        title="SHIPPING"
        description="How long will my parcel be on the way? How much will it cost? You can find all the information about shipping here."
        buttonTitle="LEARN MORE"
        buttonStyle="bg-black text-white"
        img="footherShippingPageImg.webp"
      />
      <div className="wrapper">
        <table className="w-full">
          <thead>
            <tr className="flex flex-1 gap-[1px] justify-between">
              <td className="w-full text-center bg-gray-500 font-bold underline p-2">
                Shipper
              </td>
              <td className="w-full text-center bg-gray-500 font-normal underline p-2">
                Country
              </td>
              <td className="w-full text-center bg-gray-500 font-normal underline p-2">
                Shipping costs
              </td>
              <td className="w-full text-center bg-gray-500 font-normal underline p-2">
                Delivery time
              </td>
            </tr>
          </thead>
          <tbody>
            {dammyShipping.map((shipping) => (
              <tr
                key={nanoid()}
                className="flex flex-1 gap-[1px] justify-between even:bg-blue-gray-50/50"
              >
                <td className="w-full text-center font-bold p-2">
                  {shipping.Shipper}
                </td>
                <td className="w-full text-center p-2">{shipping.Country}</td>
                <td className="w-full text-center p-2">
                  {shipping.ShippingCosts}
                </td>
                <td className="w-full text-center p-2">
                  {shipping.DeliveryTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Typography className="mt-3">
          We ship all products from our German warehouse. Customers are
          responsible for paying any additional costs (customs, duties and
          taxes). Your country is not listed in the overview? No problem, just
          contact our customer service and we will be happy to help you!
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

export default FootherShippingPage;
