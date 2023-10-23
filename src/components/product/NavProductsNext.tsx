import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { Button, Typography } from '@material-tailwind/react';

import { addToCart } from '../../store/redusers/cartReduser';
import { toggleCart } from '../../store/redusers/sideBarReduser';

import AnchorLink from '../../components/AnchorLink';
import { useDispatch } from 'react-redux';

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

   const dispatch = useDispatch();
   const [changer, setChanger] = useState({
      highLight: highLight,
      videos: videos,
      details: details,
      review: review,
   });
   const [navHeight, setNavHeight] = useState(0);
   const [navFixed, setNavFixed] = useState<boolean>(false);
   const scroll = useRef<HTMLDivElement>(null);
   const heightHandler = useCallback(() => {
      return setNavHeight(scroll.current?.clientHeight!);
   }, []);

   const productCart = useMemo(
      () => ({
         mainImg: product.mainImg[0] as string,
         title: product.title as string,
         price: +product.price as number,
         quantity: 1,
         totalPriceProduct: +product.price as number,
         src: product.src as string,
         id: product.id as string,
      }),
      [product]
   );

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

      heightHandler();
      window.addEventListener('resize', heightHandler);

      return () => {
         window.removeEventListener('resize', heightHandler);
      };
   }, [details, heightHandler, highLight, review, videos]);

   useEffect(() => {
      return setNavFixed(beforeBottmElement < 0);
   }, [beforeBottmElement]);

   return (
      <div className="relative w-full">
         <div
            ref={scroll}
            style={
               navFixed
                  ? {
                       position: 'fixed',
                       top: `${navHeightSlice}px`,
                    }
                  : { position: 'absolute', top: '0', right: '0' }
            }
            className="
               px-[10%] 
               py-5
               flex 
               justify-between 
               items-center 
               w-full 
               min-h-[60px] 
               bg-white 
               z-10 
               border-y-[1px] 
               border-[rgba(133,133,133,.2)]"
         >
            <div className="lg:gap-10 sm:gap-5 lg:flex hidden items-center mr-5">
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
                        <Typography className="w-max text-black font-normal cursor-pointer uppercase">
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

            <div className="flex gap-5 lg:justify-start lg:w-auto w-full justify-between items-center ">
               <div className="w-full">
                  <Typography className="uppercase sm:text-1xl text-sm">
                     {product.title}
                  </Typography>
                  <Typography>€ {product.price},00</Typography>
               </div>
               <div>
                  <Button
                     onClick={() => {
                        dispatch(addToCart(productCart));
                        dispatch(toggleCart());
                     }}
                     color="gray"
                     className="rounded-none bg-black w-max"
                  >
                     add to cart
                  </Button>
               </div>
            </div>
         </div>

         <div style={{ height: `${navHeight}px` }} className="w-full" />
      </div>
   );
};

export default NavProductsNext;
