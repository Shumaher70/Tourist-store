import { Button, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const FooterInfo = () => {
   return (
      <div className="bg-[#111] w-full px-[10%] py-[5%] border-b-[1px] border-gray-600 flex lg:flex-row flex-col gap-5">
         <div className="w-full sm:grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 flex flex-col sm:items-start items-center gap-5">
            <div className="sm:w-full w-[200px]">
               <Typography variant="h4" color="white">
                  HELP & CONTACT
               </Typography>
               <div>
                  <NavLink
                     onClick={() => window.scrollTo(0, 0)}
                     to="/pages/faq"
                  >
                     <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                        FAQs
                     </Typography>
                  </NavLink>
                  <NavLink
                     onClick={() => window.scrollTo(0, 0)}
                     to="/pages/contact"
                  >
                     <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                        Contact
                     </Typography>
                  </NavLink>
                  <NavLink
                     onClick={() => window.scrollTo(0, 0)}
                     to="/blogs/versand/versand"
                  >
                     <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                        Shipping
                     </Typography>
                  </NavLink>
                  <NavLink
                     onClick={() => window.scrollTo(0, 0)}
                     to="/blogs/zelte/zeltgrossen"
                  >
                     <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                        Tent sizes
                     </Typography>
                  </NavLink>
               </div>
            </div>

            <div className="sm:w-full w-[200px] lg:ml-5">
               <Typography variant="h4" color="white">
                  PRODUCTS
               </Typography>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/collections/zelte"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Tents & Accessories
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/collections/tarps"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Tarps
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/collections/carry-essentials"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Backpacks & Bags
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/collections/gear"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Gear
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/collections/hpt-selected"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     HPT Selected
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/collections/re-store"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Re:Store
                  </Typography>
               </NavLink>
            </div>

            <div className="sm:w-full w-[200px]">
               <Typography variant="h4" color="white">
                  COMPANY
               </Typography>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/pages/unternehmen-store"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     About Us
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/pages/karriere"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Career & Jobs
                  </Typography>
               </NavLink>
               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/blogs/unternehmen/pressekontakt"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Press contact
                  </Typography>
               </NavLink>

               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/pages/unternehmen-store"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Store
                  </Typography>
               </NavLink>

               <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/blogs/unternehmen/affiliate-partner-programm"
               >
                  <Typography className="text-white px-0 py-0 mt-2 rounded-none">
                     Affiliateprogram
                  </Typography>
               </NavLink>
            </div>
         </div>

         <div className="bg-[#ffffff1a] w-full sm:p-10 p-3 flex flex-col justify-between">
            <div className="">
               <Typography
                  variant="h2"
                  color="white"
                  className="sm:text-3xl text-2xl"
               >
                  BECOME PART OF THE COMMUNITY
               </Typography>

               <div className="flex items-center cursor-pointer m-1">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M7 12L10 15L17 8"
                        stroke="white"
                        strokeWidth="2"
                     />
                     <circle
                        cx="12"
                        cy="12"
                        r="11"
                        stroke="white"
                        strokeWidth="2"
                     />
                  </svg>
                  <Typography
                     variant="h5"
                     color="white"
                     className="ml-2 text-xl w-full"
                  >
                     10% COUPON FOR NEWSLETTER REGISTRATION
                  </Typography>
               </div>
            </div>
            <NavLink
               onClick={() => window.scrollTo(0, 0)}
               to="/pages/newsletter"
            >
               <Button color="white" size="lg" className="rounded-none mt-5">
                  REGISTER NOW
               </Button>
            </NavLink>
         </div>
      </div>
   );
};

export default FooterInfo;
