import { Typography } from '@material-tailwind/react';

const FooterPayment = () => {
  return (
    <div className="bg-[#111] w-full px-[10%] py-[3%] border-b-[1px] border-gray-600 flex flex-wrap gap-5 justify-between">
      <div className="flex-col">
        <Typography variant="paragraph" color="white">
          Delivery
        </Typography>
        <div className="w-[40%]">
          <img src={require('./deliveryImg/dhl.webp')} alt="dhl" />
        </div>
      </div>

      <div className="flex-col flex-wrap">
        <Typography variant="paragraph" color="white">
          Payment methods
        </Typography>
        <div className="flex">
          <div className="w-[10%] cursor-pointer">
            <img
              src={require('./paymentMethodImg/master-card.webp')}
              alt="master-card"
            />
          </div>
          <div className="w-[10%] ml-2 cursor-pointer">
            <img src={require('./paymentMethodImg/visa.webp')} alt="visa" />
          </div>
          <div className="w-[10%] ml-2 cursor-pointer">
            <img
              src={require('./paymentMethodImg/pay-pal.webp')}
              alt="pay-pal"
            />
          </div>
          <div className="w-[10%] ml-2 cursor-pointer">
            <img src={require('./paymentMethodImg/klarna.webp')} alt="klarna" />
          </div>
        </div>
      </div>

      <div className="flex-col">
        <Typography variant="paragraph" color="white">
          Social media
        </Typography>
        <div className="flex">
          <div className="w-[15%] cursor-pointer ">
            <img src={require('./socialImg/instagram.webp')} alt="instagram" />
          </div>
          <div className="w-[15%] cursor-pointer ml-2">
            <img src={require('./socialImg/pinterest.webp')} alt="pinterest" />
          </div>
          <div className="w-[15%] cursor-pointer ml-2">
            <img src={require('./socialImg/faceBook.webp')} alt="faceBook" />
          </div>
          <div className="w-[15%] cursor-pointer ml-2">
            <img src={require('./socialImg/youtube.webp')} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPayment;
