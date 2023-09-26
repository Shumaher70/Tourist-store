import { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { Button, Typography } from '@material-tailwind/react';
import AnchorLink from '../../components/AnchorLink';

interface NavProductsNextProps {
   product: { [key: string]: string | string[] };
   beforeBottmElement: number;
   highLight?: boolean;
   videos?: boolean;
   details?: boolean;
   review?: boolean;
}

const NavProductsNext = ({
   product,
   beforeBottmElement,
   highLight,
   videos,
   details,
   review,
}: NavProductsNextProps) => {
   const navHeightSlice = useSelector(
      (state: RootState) => state.size.heightNav
   );

   const [changer, setChanger] = useState({
      highLight: highLight,
      videos: videos,
      details: details,
      review: review,
   });

   useEffect(() => {
      if (highLight) {
         setChanger({
            highLight: true,
            videos: false,
            details: false,
            review: false,
         });
      } else if (videos) {
         setChanger({
            highLight: false,
            videos: true,
            details: false,
            review: false,
         });
      } else if (details) {
         setChanger({
            highLight: false,
            videos: false,
            details: true,
            review: false,
         });
      } else if (review) {
         setChanger({
            highLight: false,
            videos: false,
            details: false,
            review: true,
         });
      } else {
         setChanger({
            highLight: false,
            videos: false,
            details: false,
            review: false,
         });
      }
   }, [details, highLight, review, videos]);

   const scroll = useRef<HTMLDivElement>(null);

   const [navFixed, setNavFixed] = useState<boolean>(false);

   useEffect(() => {
      if (beforeBottmElement < 0) {
         return setNavFixed(true);
      } else {
         setNavFixed(false);
      }
   }, [beforeBottmElement]);

   return (
      <div className="relative w-full h-[60px]">
         <div
            ref={scroll}
            style={
               navFixed
                  ? {
                       position: 'fixed',
                       top: `${navHeightSlice}px`,
                    }
                  : { position: 'absolute' }
            }
            className="
               px-[10%] 
               flex 
               justify-between 
               items-center 
               w-full 
               h-[60px] 
               bg-white 
               z-10 
               border-y-[1px] 
               border-[rgba(133,133,133,.2)]"
         >
            <div className="lg:gap-10 sm:gap-5 md:flex hidden items-center">
               {highLight !== undefined && (
                  <AnchorLink href="#highlights" offset={+navHeightSlice + 60}>
                     <div
                        style={
                           changer.highLight
                              ? { borderBottom: '2px solid black' }
                              : { border: 'none' }
                        }
                     >
                        <Typography className="text-black font-normal cursor-pointer uppercase">
                           Highlights
                        </Typography>
                     </div>
                  </AnchorLink>
               )}

               {videos !== undefined && (
                  <AnchorLink href="#videos" offset={+navHeightSlice + 60}>
                     <div
                        style={
                           changer.videos
                              ? { borderBottom: '2px solid black' }
                              : { border: 'none' }
                        }
                     >
                        <Typography className="text-black font-normal cursor-pointer uppercase">
                           Videos
                        </Typography>
                     </div>
                  </AnchorLink>
               )}

               {details !== undefined && (
                  <AnchorLink href="#details" offset={+navHeightSlice + 60}>
                     <div
                        style={
                           changer.details
                              ? { borderBottom: '2px solid black' }
                              : { border: 'none' }
                        }
                     >
                        <Typography className="text-black font-normal cursor-pointer uppercase">
                           Detailed information
                        </Typography>
                     </div>
                  </AnchorLink>
               )}

               {review !== undefined && (
                  <AnchorLink href="#reviews" offset={+navHeightSlice + 60}>
                     <div
                        style={
                           changer.review
                              ? { borderBottom: '2px solid black' }
                              : { border: 'none' }
                        }
                     >
                        <Typography className="text-black font-normal cursor-pointer uppercase">
                           Reviews
                        </Typography>
                     </div>
                  </AnchorLink>
               )}
            </div>
            <div className="flex gap-5 md:justify-start justify-between w-full md:w-auto">
               <div>
                  <Typography className="uppercase sm:text-1xl text-sm">
                     {product.title}
                  </Typography>
                  <Typography>€ {product.price},00</Typography>
               </div>
               <Button className="rounded-none bg-black">add to cart</Button>
            </div>
         </div>
      </div>
   );
};

export default NavProductsNext;
