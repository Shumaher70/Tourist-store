import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const FooterGarantee = () => {
   return (
      <div className="bg-[#111] w-full px-[10%] py-[5%] border-b-[1px] border-gray-600 flex flex-wrap justify-center sm:justify-between">
         <a href="/#carousel">
            <div className="flex items-center cursor-pointer m-1">
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" />
                  <circle
                     cx="12"
                     cy="12"
                     r="11"
                     stroke="white"
                     strokeWidth="2"
                  />
               </svg>
               <Link to="/blogs/projekte/1-for-the-planet">
                  <Typography
                     variant="h5"
                     color="white"
                     className="ml-2 text-xl"
                  >
                     1% FOR THE PLANET
                  </Typography>
               </Link>
            </div>
         </a>

         <a href="/#carousel">
            <div className="flex items-center cursor-pointer m-1">
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" />
                  <circle
                     cx="12"
                     cy="12"
                     r="11"
                     stroke="white"
                     strokeWidth="2"
                  />
               </svg>
               <Typography variant="h5" color="white" className="ml-2 text-xl">
                  LIFETIME WARRANTY
               </Typography>
            </div>
         </a>

         <a href="/#carousel">
            <div className="flex items-center cursor-pointer m-1">
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" />
                  <circle
                     cx="12"
                     cy="12"
                     r="11"
                     stroke="white"
                     strokeWidth="2"
                  />
               </svg>
               <Link to="/collections/all-products">
                  <Typography
                     variant="h5"
                     color="white"
                     className="ml-2 text-xl"
                  >
                     RE-STORE-PROGRAM
                  </Typography>
               </Link>
            </div>
         </a>
      </div>
   );
};

export default FooterGarantee;
