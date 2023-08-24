import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button, Typography } from '@material-tailwind/react';
import Faq from '../components/Faq';
import Slider from 'infinite-react-carousel';

const FootherHelpFaqsPage = () => {
  const navHeight = useSelector((state: RootState) => state.size.heightNav);
  const [stateGeneral, setStateGeneral] = useState(true);
  const [stateReturn, setStateReturn] = useState(false);
  const [stateUseful, setStateUseful] = useState(false);
  const [slider, setSlider] = useState<boolean>(false);
  const [widthSLider, setWidthSLider] = useState<number>(3);
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 768 ? setSlider(true) : setSlider(false);
      window.innerWidth <= 768 && window.innerWidth >= 450
        ? setWidthSLider(3)
        : setWidthSLider(2);
    });
  }, []);

  const handleGeneralClick = () => {
    setStateGeneral(true);
    setStateReturn(false);
    setStateUseful(false);
  };

  const handleReturnClick = () => {
    setStateGeneral(false);
    setStateReturn(true);
    setStateUseful(false);
  };

  const handleUseFulClick = () => {
    setStateGeneral(false);
    setStateReturn(false);
    setStateUseful(true);
  };

  return (
    <div style={{ paddingTop: `${navHeight}px`, backgroundColor: '#f6f6f6' }}>
      <div className="py-[5%]">
        <Typography className="xl:text-7xl lg:text-5xl sm:text-4xl text-2xl font-normal text-center">
          HOW CAN WE HELP YOU?
        </Typography>

        <div className="flex md:px-[10%] md:flex-row flex-col gap-5 mt-10">
          {slider && (
            <Slider
              className="flex flex-col"
              slidesPerRow={1}
              adaptiveHeight={true}
              slidesToShow={widthSLider}
              duration={200}
              arrows={false}
            >
              <div>
                <Button
                  onClick={handleGeneralClick}
                  size="lg"
                  color="white"
                  className="flex items-center md:justify-start justify-center rounded-none md:border-t-[1px] border-black bg-transparent shadow-none focus:bg-white"
                >
                  <img
                    className="w-[25px]"
                    src={require('./img/faqPageIcon1.webp')}
                    alt="img"
                  />
                  <Typography className="ml-2 font-normal text-[1.4rem]">
                    GENERAL
                  </Typography>
                </Button>
              </div>

              <div>
                <Button
                  onClick={handleReturnClick}
                  size="lg"
                  color="white"
                  className="flex items-center md:justify-start justify-center rounded-none border-x-[1px] md:border-y-[1px] md:border-x-0 border-black  bg-transparent shadow-none focus:bg-white"
                >
                  <img
                    className="w-[25px]"
                    src={require('./img/faqPageIcon2.webp')}
                    alt="img"
                  />
                  <Typography className="ml-2 font-normal text-[1.4rem]">
                    RETURN
                  </Typography>
                </Button>
              </div>

              <div>
                <Button
                  onClick={handleUseFulClick}
                  size="lg"
                  color="white"
                  className="flex items-center md:justify-start justify-center rounded-none md:border-b-[1px] border-black  bg-transparent shadow-none focus:bg-white"
                >
                  <img
                    className="w-[25px]"
                    src={require('./img/faqPageIcon3.png')}
                    alt="img"
                  />
                  <Typography className="ml-2 font-normal text-[1.4rem]">
                    USEFUL
                  </Typography>
                </Button>
              </div>
            </Slider>
          )}

          {!slider && (
            <div className="flex flex-col">
              <Button
                onClick={handleGeneralClick}
                size="lg"
                color="white"
                className="flex items-center md:justify-start justify-center rounded-none md:border-t-[1px] border-black  w-[250px] bg-transparent shadow-none focus:bg-white"
              >
                <img
                  className="w-[25px]"
                  src={require('./img/faqPageIcon1.webp')}
                  alt="img"
                />
                <Typography className="ml-2 font-normal text-[1.4rem]">
                  GENERAL
                </Typography>
              </Button>

              <Button
                onClick={handleReturnClick}
                size="lg"
                color="white"
                className="flex items-center md:justify-start justify-center rounded-none border-x-[1px] md:border-y-[1px] md:border-x-0 border-black w-[250px] bg-transparent shadow-none focus:bg-white"
              >
                <img
                  className="w-[25px]"
                  src={require('./img/faqPageIcon2.webp')}
                  alt="img"
                />
                <Typography className="ml-2 font-normal text-[1.4rem]">
                  RETURN
                </Typography>
              </Button>

              <Button
                onClick={handleUseFulClick}
                size="lg"
                color="white"
                className="flex items-center md:justify-start justify-center rounded-none md:border-b-[1px] border-black w-[250px] bg-transparent shadow-none focus:bg-white"
              >
                <img
                  className="w-[25px]"
                  src={require('./img/faqPageIcon3.png')}
                  alt="img"
                />
                <Typography className="ml-2 font-normal text-[1.4rem]">
                  USEFUL
                </Typography>
              </Button>
            </div>
          )}

          {stateGeneral && (
            <div className="flex-col w-full border-y-[1px] border-black bg-white px-[5%] py-[2%]">
              <div>
                <Typography variant="h3" className="mb-5">
                  GENERAL
                </Typography>
                <Faq
                  titile="PAYMENT METHODS"
                  description="We offer the following payment options:
                Credit card
                A form will open where you can enter your credit card details. We will debit your account when we ship the ordered goods to you.    
                PayPal
                You will be redirected to PayPal and have to log in and follow the instructions from PayPal.
                Purchase on account (pay later with Klarna)
                Pay by invoice after you have received the goods. Payment by instalments is also possible via Klarna (available in many countries). 
                Instant bank transfer
                After completing the order process, you will be redirected to the corresponding homepage. Please log in and follow the instructions of the payment provider. 
                Amazon Pay
                Simply log in to Amazon, select the desired delivery address and pay using the payment method stored with Amazon.
                Google Pay
                Simply sign in with your Google account, select the payment method of your choice (in your Google account) and order conveniently.
                iDEAL
                Please select your bank from the drop-down menu. This service is only available to customers who have a bank account with one of the banks listed.
                Bank contact
                Bancontact is a Belgian payment system through which consumers can make online transfers."
                />
                <Faq
                  titile="STATUS OF MY ORDER"
                  description="We will send you an order confirmation email after your successful order. You will also receive an email from us when your package is shipped and leaves our warehouse. If you have a customer account, you can view the status of your order at any time. If you do not have an account, you will find a link to your order confirmation page in the order confirmation email, where you will find all the details of your order again and also the tracking link once your order is shipped."
                />
                <Faq
                  titile="SHIPPING"
                  description="Innerhalb der EU erreicht Dich Deine Bestellung innerhalb von 2-10 Tagen (Versand aus unserem Lager in Deutschland). Sendungen außerhalb der EU benötigen in der Regel 5-14 Tage. Detaillierte Informationen zu der Versandlaufzeit der einzelnen Länder findest Du > hier <."
                />
                <Faq
                  titile="CANCEL ORDER"
                  description="If you would like to cancel your order, please send an email as soon as possible to service[at]heimplanet.com with your order number. As long as the order has not been packed, we can cancel it. After the successful cancellation you will receive an infomail and we will refund your payment immediately. 

                  If your shipment has already been prepared for dispatch, we are unfortunately unable to cancel the order. You can exercise your right of cancellation within 14 days of receiving the goods and return them to us."
                />
                <Faq
                  titile="EXCHANGE"
                  description="Unfortunately, a direct exchange is not possible, as we cannot guarantee the availability of the desired product. If you would like to exchange an item, simply reorder your desired item and return your first order to us. We will refund the purchase amount within 14 days of receiving your return."
                />
                <Faq
                  titile="NEWSLETTER"
                  description="Don't miss any news and become part of the community! Subscribe to our newsletter and be the first to know about new products, limited editions, promotions & much more!
                  Our newsletter is available in two language versions: for the English version click here - if you prefer the German version, just click here. 
                  You don't want to receive our newsletter anymore? Unsubscribe from our English newsletter here or from our German newsletter here. You can also click on the UNSUBSCRIBE button at the end of the last newsletter you received from us."
                />
                <Faq
                  titile="DEFECTIVE PRODUCT"
                  description="If your product is defective, please contact our service team by e-mail: service[at]@heimplanet.com
                  In order to process your request quickly, we need the following information from you:
                  Please send us a copy/picture of your invoice for the defective product.
                  2. in order to process the defect quickly, we require a detailed description of the defect and a few pictures of the defect.
                  3. please also send us your complete address in case the item needs to be exchanged."
                />
                <Faq
                  titile="VOUCHERS"
                  description="If your product is defective, please contact our service team by e-mail: service[at]@heimplanet.com
                  In order to process your request quickly, we need the following information from you:
                  Please send us a copy/picture of your invoice for the defective product.
                  2. in order to process the defect quickly, we require a detailed description of the defect and a few pictures of the defect.
                  3. please also send us your complete address in case the item needs to be exchanged."
                />
              </div>
            </div>
          )}

          {stateReturn && (
            <div className="flex-col w-full border-y-[1px] border-black bg-white px-[5%] py-[2%]">
              <div>
                <Typography variant="h3" className="mb-5">
                  RETURN
                </Typography>
                <Faq
                  titile="RETURN"
                  description="We can only guarantee you a full refund if all items are returned in the condition they were in when they were delivered. Items must not be damaged, soiled, washed, altered or worn (except for fitting).
                  If items are returned, the purchase price will not be refunded and we will return the items to you. Please also note our return period of 14 days. Unfortunately, we cannot accept returns outside of this period.
                  If your ordered product(s) should have a defect, please contact our customer service immediately after you have received them. You can also send us photos of the defect directly so that we can find a solution for you as quickly as possible!
                  Here you can find our cancellation policy for consumers."
                />
                <Faq
                  titile="RETURN CONDITIONS"
                  description="We can only guarantee you a full refund if all items are returned in the condition they were in when they were delivered. Items must not be damaged, soiled, washed, altered or worn (except for fitting).
                  If items are returned, the purchase price will not be refunded and we will return the items to you. Please also note our return period of 14 days. Unfortunately, we cannot accept returns outside of this period.
                  If your ordered product(s) should have a defect, please contact our customer service immediately after you have received them. You can also send us photos of the defect directly so that we can find a solution for you as quickly as possible!
                  Here you can find our cancellation policy for consumers."
                />
              </div>
            </div>
          )}

          {stateUseful && (
            <div className="flex-col w-full border-y-[1px] border-black bg-white px-[5%] py-[2%]">
              <div>
                <Typography variant="h3" className="mb-5">
                  USEFUL
                </Typography>
                <Faq
                  titile="OPERATING INSTRUCTIONS"
                  description="We offer the following payment options:
                Credit card
                A form will open where you can enter your credit card details. We will debit your account when we ship the ordered goods to you.    
                PayPal
                You will be redirected to PayPal and have to log in and follow the instructions from PayPal.
                Purchase on account (pay later with Klarna)
                Pay by invoice after you have received the goods. Payment by instalments is also possible via Klarna (available in many countries). 
                Instant bank transfer"
                />
                <Faq
                  titile="INITIAL SETUP"
                  description="In this video you can see how the first assembly of your new tent is done."
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FootherHelpFaqsPage;
