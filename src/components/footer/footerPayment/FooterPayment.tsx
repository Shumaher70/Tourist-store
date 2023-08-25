import { NavLink } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
const FooterPayment = () => {
  return (
    <div className="bg-[#111] w-full px-[10%] py-[3%] border-b-[1px] border-gray-600 flex flex-wrap gap-5 justify-between">
      <div className="flex-col">
        <Typography variant="paragraph" color="white">
          Delivery
        </Typography>
        <div className="w-[40%]">
          <NavLink to="/pages/newsletter">
            <img src={require('./deliveryImg/dhl.webp')} alt="dhl" />
          </NavLink>
        </div>
      </div>

      <div className="flex-col flex-wrap">
        <Typography variant="paragraph" color="white">
          Payment methods
        </Typography>
        <div className="flex">
          <div className="w-[10%] cursor-pointer">
            <NavLink to="/pages/newsletter">
              <img
                src={require('./paymentMethodImg/master-card.webp')}
                alt="master-card"
              />
            </NavLink>
          </div>

          <div className="w-[10%] ml-2 cursor-pointer">
            <NavLink to="/pages/newsletter">
              <img src={require('./paymentMethodImg/visa.webp')} alt="visa" />
            </NavLink>
          </div>
          <div className="w-[10%] ml-2 cursor-pointer">
            <NavLink to="/pages/newsletter">
              <img
                src={require('./paymentMethodImg/pay-pal.webp')}
                alt="pay-pal"
              />
            </NavLink>
          </div>
          <div className="w-[10%] ml-2 cursor-pointer">
            <NavLink to="/pages/newsletter">
              <img
                src={require('./paymentMethodImg/klarna.webp')}
                alt="klarna"
              />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <Typography variant="paragraph" color="white">
          Social media
        </Typography>
        <div className="flex">
          <div className="w-[15%] cursor-pointer ">
            <NavLink to="https://www.instagram.com/heimplanet/">
              <img
                src={require('./socialImg/instagram.webp')}
                alt="instagram"
              />
            </NavLink>
          </div>
          <div className="w-[15%] cursor-pointer ml-2">
            <NavLink to="https://www.pinterest.de/heimplanet/">
              <img
                src={require('./socialImg/pinterest.webp')}
                alt="pinterest"
              />
            </NavLink>
          </div>
          <div className="w-[15%] cursor-pointer ml-2">
            <NavLink to="https://www.facebook.com/heimplanet/">
              <img src={require('./socialImg/faceBook.webp')} alt="faceBook" />
            </NavLink>
          </div>
          <div className="w-[15%] cursor-pointer ml-2">
            <NavLink to="https://www.youtube.com/channel/UCxPmJJM8vkH4GDqhaK1HFag">
              <img src={require('./socialImg/youtube.webp')} alt="youtube" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPayment;
