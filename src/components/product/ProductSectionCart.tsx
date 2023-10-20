import React, { useEffect, useState, useRef, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Button, Typography } from '@material-tailwind/react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Carousel from 'react-multi-carousel';
import CustomButtonExit from '../CustomButtonExit';
import Faq from '../Faq';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/redusers/cartReduser';
import { toggleCart } from '../../store/redusers/sideBarReduser';

interface ProductSectionCartProps {
   product: { [key: string]: string | string[] };
   elementBotton?: (element: number) => void;
}

const ProductSectionCart = ({
   product,
   elementBotton,
}: ProductSectionCartProps) => {
   const productMainImg = (product.mainImg as string[]) || [];

   const mainNavHeight = useSelector(
      (state: RootState) => state.size.heightNav
   );

   const productCart = {
      mainImg: product.mainImg[0] as string,
      title: product.title as string,
      price: +product.price as number,
      quantity: 1,
      totalPriceProduct: +product.price as number,
      src: product.src as string,
      id: product.id as string,
   };

   const dispatch = useDispatch();

   const screenCardRef = useRef<HTMLDivElement>(null);
   const cardRef = useRef<HTMLDivElement>(null);

   const [showSlider, setShowSlider] = useState<boolean>(false);
   const [widthScreen, setWidthScreen] = useState<boolean>(false);
   const [bottomScreenCard, setBottomScreenCard] = useState<boolean>(false);
   const [topScreenCard, setTopScreenCard] = useState<boolean>(false);

   const [initialMainImg, setInitialMainImg] = useState<string[]>([]);
   const [initialMobailImg, setInitialMobailImg] = useState<string[]>([]);

   const widthHandler = useCallback(() => {
      window.innerWidth < 640 ? setWidthScreen(true) : setWidthScreen(false);
   }, []);

   const topHandler = useCallback(() => {
      if (screenCardRef.current?.getBoundingClientRect().bottom) {
         if (window.scrollY >= +mainNavHeight - 40) {
            setTopScreenCard(true);
         } else {
            setTopScreenCard(false);
         }
      }
   }, [mainNavHeight]);

   const bottomHandler = useCallback(() => {
      elementBotton?.(cardRef.current?.getBoundingClientRect().bottom ?? 0);
      if (screenCardRef.current?.getBoundingClientRect()) {
         if (cardRef.current?.getBoundingClientRect()) {
            if (
               screenCardRef.current?.getBoundingClientRect().bottom -
                  +mainNavHeight <=
               cardRef.current?.offsetHeight + 20
            ) {
               setBottomScreenCard(true);
               setTopScreenCard(false);
            } else {
               setBottomScreenCard(false);
            }
         }
      }
   }, [elementBotton, mainNavHeight]);

   useEffect(() => {
      widthHandler();
      window.addEventListener('resize', widthHandler);

      topHandler();
      window.addEventListener('scroll', topHandler);

      bottomHandler();
      window.addEventListener('scroll', bottomHandler);

      return () => {
         window.removeEventListener('resize', widthHandler);
         window.removeEventListener('scroll', topHandler);
         window.removeEventListener('scroll', bottomHandler);
      };
   }, [bottomHandler, topHandler, widthHandler]);

   const clickMainImgHandlerShowSlider = (
      event: React.MouseEvent<HTMLDivElement>
   ) => {
      const inititalSlide =
         event.currentTarget.getAttribute('data-initial_slide');

      const initialSlide: string[] = productMainImg;

      const index = initialSlide.indexOf(inititalSlide as string);

      const newArray = initialSlide
         .slice(index)
         .concat(initialSlide.slice(0, index));

      setInitialMainImg(Array.isArray(newArray) ? newArray : []);

      setShowSlider(true);
   };

   const clickMobailImgHandlerShowSlider = (
      event: React.MouseEvent<HTMLDivElement>
   ) => {
      const inititalSlide =
         event.currentTarget.getAttribute('data-initial_slide');

      const initialSlide: string[] = productMainImg;

      const index = initialSlide.indexOf(inititalSlide as string);

      const newArray = initialSlide
         .slice(index)
         .concat(initialSlide.slice(0, index));
      setInitialMobailImg(Array.isArray(newArray) ? newArray : []);
   };

   const CustomRightArrow = ({ ...rest }) => {
      const { onClick } = rest;
      return (
         <button
            className="absolute right-0 rounded-full transition linear  duration-250 hover:bg-black hover:text-white "
            onClick={() => onClick()}
         >
            <svg
               width="50"
               height="50"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="flex justify-center items-center"
            >
               <path
                  d="M6 3L11 8L6 13"
                  stroke="CurrentColor"
                  strokeWidth="1"
                  className="block"
               ></path>
            </svg>
         </button>
      );
   };
   const CustomLeftArrow = ({ ...rest }) => {
      const { onClick } = rest;
      return (
         <button
            className=" absolute left-0 rounded-full  rotate-180 transition linear  duration-250 hover:bg-black hover:text-white "
            onClick={() => onClick()}
         >
            <svg
               width="50"
               height="50"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M6 3L11 8L6 13"
                  stroke="CurrentColor"
                  strokeWidth="1"
               ></path>
            </svg>
         </button>
      );
   };

   return (
      <>
         {showSlider && (
            <div
               className={`w-full h-full flex justify-center top-0 fixed bg-white z-[99]`}
            >
               <div id="product" className="w-full h-full">
                  <CustomButtonExit
                     buttonStyle="top-5 right-5 cursor-pointer z-[999]"
                     onClick={() => setShowSlider(false)}
                  />
                  <Carousel
                     additionalTransfrom={0}
                     arrows={true}
                     className="w-full h-full"
                     draggable
                     focusOnSelect={true}
                     infinite
                     keyBoardControl
                     minimumTouchDrag={80}
                     pauseOnHover
                     customLeftArrow={<CustomLeftArrow />}
                     customRightArrow={<CustomRightArrow />}
                     responsive={{
                        desktop: {
                           breakpoint: { max: 3000, min: 0 },
                           items: 1,
                           slidesToSlide: 1, // optional, default to 1.
                        },
                     }}
                     sliderClass="h-full"
                     slidesToSlide={1}
                     swipeable
                  >
                     {initialMainImg.map((img) => {
                        return (
                           <div
                              key={nanoid()}
                              className="w-full h-full flex justify-center items-center"
                           >
                              <TransformWrapper>
                                 <TransformComponent>
                                    <img
                                       src={require(`../../dammyDB/${img}`)}
                                       alt={img}
                                       className="w-full h-full object-cover px-[10%]"
                                       draggable="false"
                                    />
                                 </TransformComponent>
                              </TransformWrapper>
                           </div>
                        );
                     })}
                  </Carousel>
               </div>
            </div>
         )}

         <div className="flex sm:flex-row flex-col gap-5 sm:pr-5 p-5">
            <div className=" lg:columns-2 columns-1 space-y-5 xl:basis-4/5 lg:basis-[70%] sm:basis-2/4">
               {!widthScreen ? (
                  productMainImg.map((img: string) => {
                     return (
                        <div
                           onClick={clickMainImgHandlerShowSlider}
                           key={nanoid()}
                           data-initial_slide={img}
                           draggable="false"
                           className="w-full h-[50vh]"
                        >
                           <img
                              src={require(`../../dammyDB/${img}`)}
                              alt={img}
                              className="brightness-[.95] 
                              cursor-pointer 
                              w-full 
                              h-full
                              object-cover
                           "
                           />
                        </div>
                     );
                  })
               ) : (
                  <div className="flex-col flex-1">
                     <>
                        <Carousel
                           additionalTransfrom={0}
                           draggable
                           infinite
                           keyBoardControl
                           minimumTouchDrag={80}
                           pauseOnHover
                           renderDotsOutside={true}
                           customLeftArrow={<CustomLeftArrow />}
                           customRightArrow={<CustomRightArrow />}
                           responsive={{
                              desktop: {
                                 breakpoint: {
                                    max: 3000,
                                    min: 0,
                                 },
                                 items: 1,
                                 partialVisibilityGutter: 40,
                              },
                           }}
                           slidesToSlide={1}
                           swipeable
                        >
                           {initialMobailImg.length === 0
                              ? productMainImg.map((img) => {
                                   return (
                                      <div
                                         onClick={clickMainImgHandlerShowSlider}
                                         key={nanoid()}
                                         data-initial_slide={img}
                                      >
                                         <img
                                            className="cursor-pointer brightness-95"
                                            src={require(`../../dammyDB/${img}`)}
                                            alt={img}
                                         />
                                      </div>
                                   );
                                })
                              : initialMobailImg.map((img) => {
                                   return (
                                      <div
                                         onClick={clickMainImgHandlerShowSlider}
                                         key={nanoid()}
                                         data-initial_slide={img}
                                      >
                                         <img
                                            className="cursor-pointer brightness-95"
                                            src={require(`../../dammyDB/${img}`)}
                                            alt={img}
                                         />
                                      </div>
                                   );
                                })}
                        </Carousel>
                        <Carousel
                           centerMode={true}
                           className="mt-1"
                           draggable
                           infinite
                           itemClass="mx-1"
                           keyBoardControl
                           minimumTouchDrag={80}
                           customLeftArrow={<CustomLeftArrow />}
                           customRightArrow={<CustomRightArrow />}
                           pauseOnHover
                           renderDotsOutside={true}
                           responsive={{
                              desktop: {
                                 breakpoint: {
                                    max: 3000,
                                    min: 0,
                                 },
                                 items: 4,
                                 partialVisibilityGutter: 40,
                              },
                           }}
                           slidesToSlide={1}
                           swipeable
                        >
                           {productMainImg.map((img) => {
                              return (
                                 <div
                                    onClick={clickMobailImgHandlerShowSlider}
                                    key={nanoid()}
                                    data-initial_slide={img}
                                 >
                                    <img
                                       className="cursor-pointer brightness-95"
                                       src={require(`../../dammyDB/${img}`)}
                                       alt={img}
                                       draggable="false"
                                    />
                                 </div>
                              );
                           })}
                        </Carousel>
                     </>
                  </div>
               )}
            </div>

            <div
               className={`flex flex-1 flex-col ${
                  bottomScreenCard ? 'justify-end' : 'justify-start'
               }`}
               ref={screenCardRef}
            >
               <div
                  style={{
                     position: `${
                        topScreenCard && !bottomScreenCard && !widthScreen
                           ? 'fixed'
                           : 'static'
                     }`,
                     top: `${
                        topScreenCard && !bottomScreenCard && !widthScreen
                           ? `${20 + +mainNavHeight}px`
                           : ''
                     }`,
                  }}
                  className={`${topScreenCard ? 'flex-1 pr-5' : 'w-full'} ${
                     window.innerWidth < 640 ? 'pr-0' : ''
                  }`}
                  ref={cardRef}
               >
                  {product.title && (
                     <Typography className="font-bold text-3xl sm:text-2xl uppercase">
                        {product.title}
                     </Typography>
                  )}

                  {product.price && (
                     <Typography className="font-normal text-2xl mt-2 font-['sans-serif']">
                        € {product.price},00
                     </Typography>
                  )}

                  {product.price && (
                     <Typography className="font-normal mt-2 ">
                        incl. 19% VAT (VAT will be re-calculated at the
                        checkout) plus.
                        <NavLink
                           className="ml-2 underline cursor-pointer"
                           to="/pages/faq"
                        >
                           Shipping
                        </NavLink>
                     </Typography>
                  )}

                  <div className="flex border-y-[1px] py-5 mt-2 border-[#f6f6f6]">
                     <NavLink
                        onClick={() => window.scrollTo(0, 0)}
                        to={String(product.src)}
                     >
                        <img
                           src={require(`../../dammyDB/${product.mainImg[0]}`)}
                           width={60}
                           alt={String(product.tile)}
                        />
                     </NavLink>
                  </div>

                  {product.description && (
                     <Faq
                        title="Show Description"
                        titleStyle="text-1xl"
                        description={product.description as string}
                     />
                  )}

                  {product.scope && (
                     <Faq title="Show scope of delivery" titleStyle="text-1xl">
                        {Array.isArray(product.scope)
                           ? product.scope.map((item: string) => (
                                <Typography
                                   className="flex items-center before:mr-2 before:content-[' '] before:w-2 before:h-2 before:bg-black before:rounded-full before:block"
                                   key={nanoid()}
                                >
                                   {item}
                                </Typography>
                             ))
                           : []}
                     </Faq>
                  )}
                  <Button
                     onClick={() => {
                        dispatch(addToCart(productCart));
                        dispatch(toggleCart());
                     }}
                     size="lg"
                     className="bg-black text-white rounded-none w-full mt-5"
                  >
                     <Typography className="w-full">add to cart</Typography>
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductSectionCart;
