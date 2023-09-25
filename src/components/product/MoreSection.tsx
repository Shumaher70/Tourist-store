import { Typography } from '@material-tailwind/react';
import { BsFillBoxSeamFill, BsTruck } from 'react-icons/bs';
import { PiArrowBendUpLeftFill } from 'react-icons/pi';

const MoreSection = () => {
   return (
      <section className="wrapper grid md:grid-cols-2 grid-cols-1 bg-[#f2f2f2] gap-10">
         <div>
            <Typography className="sm:text-4xl text-3xl font-normal">
               MUCH MORE THAN JUST DETAILS. OUR BENEFITS:
            </Typography>
         </div>

         <div className="flex-col">
            <div className="flex justify-center">
               <div>
                  <BsFillBoxSeamFill className="h-5 w-5 mt-1" />
               </div>
               <div className="ml-3 xl:w-2/4">
                  <Typography className="text-2xl font-normal">
                     WORLDWIDE SHIPPING
                  </Typography>
                  <Typography className="text-1xl font-normal">
                     Wherever you are - we will send your parcel to your desired
                     destination, anywhere in the world!
                  </Typography>
               </div>
            </div>

            <div className="flex justify-center mt-10 ">
               <div>
                  <BsTruck className="h-5 w-5 mt-1" />
               </div>
               <div className="ml-3 xl:w-2/4">
                  <Typography className="text-2xl font-normal">
                     LIFETIME WARRANTY
                  </Typography>
                  <Typography className="text-1xl font-normal">
                     We use only durable materials that are crafted to ensure
                     long-lasting performance even in the toughest environments.
                  </Typography>
               </div>
            </div>

            <div className="flex justify-center mt-10">
               <div>
                  <PiArrowBendUpLeftFill className="h-5 w-5 mt-1" />
               </div>
               <div className="ml-3 xl:w-2/4">
                  <Typography className="text-2xl font-normal">
                     RE:STORE
                  </Typography>
                  <Typography className="text-1xl font-normal">
                     Our goal is to extend the life cycle of our products as
                     much as possible. Just send us your used product HEIMPLANET
                     product & in return you will get up to 20% back as a
                     voucher.
                  </Typography>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MoreSection;
