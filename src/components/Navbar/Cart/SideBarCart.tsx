import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Typography } from '@material-tailwind/react';

import { toggleCart } from '../../../store/redusers/sideBarReduser';
import { RootState } from '../../../store';
import SingleCart from './shoppingCart/SingleCart';
import { nanoid } from '@reduxjs/toolkit';
import { BsBoxSeam } from 'react-icons/bs';
import { BiMedal } from 'react-icons/bi';

const SideBarCart = () => {
   const dispatch = useDispatch();
   const toggleCartSelector = useSelector(
      (state: RootState) => state.sideBar.toggleCart
   );

   const totalPriceSelector = useSelector(
      (state: RootState) => state.cart.totalPrice
   );

   const product = useSelector((state: RootState) => state.cart.products);

   const clickHandler = () => dispatch(toggleCart());

   return (
      <Card
         style={{
            transform: `${
               toggleCartSelector ? 'translateX(0)' : 'translateX(105%)'
            }`,
         }}
         className="z-40 fixed right-0 h-full rounded-none w-[100%] xl:w-[30%] lg:w-[40%] md:w-[50%] transition"
      >
         <div className="flex justify-between items-center p-5">
            <Typography className="text-black font-bold text-4xl">
               Shopping Cart
            </Typography>
            <svg
               onClick={clickHandler}
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="w-7 h-7 cursor-pointer text-black"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
               />
            </svg>
         </div>

         <div className="w-full h-full flex flex-col gap-5 border-t-[1px] border-[#d3d2d2] overflow-y-auto">
            {product.length === 0 && (
               <Typography
                  color="black"
                  variant="paragraph"
                  className="flex w-full h-full items-center justify-center"
               >
                  No items in shopping cart
               </Typography>
            )}

            {product &&
               product.map((product) => {
                  return (
                     <SingleCart
                        key={nanoid()}
                        id={product.id}
                        img={product.mainImg}
                        title={product.title}
                        price={product.price}
                        quantityProduct={product.quantity!}
                        totalPriceProduct={product.totalPriceProduct}
                        src={product.src}
                     />
                  );
               })}
         </div>

         {product.length !== 0 && (
            <div className="w-full min-h-auto">
               <div className="p-5 border-[1px] border-t-[1px] border-[#d3d2d2] flex justify-between items-center sm:gap-5">
                  <div className="flex items-center gap-3">
                     <BsBoxSeam className="text-4xl text-black" />
                     <Typography className="text-sm sm:text-lg text-black font-bold">
                        FREE SHIPPING FROM 50€
                     </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                     <BiMedal className="text-4xl text-black" />
                     <Typography className="text-sm sm:text-lg text-black font-bold">
                        LIFETIME WARRANTY
                     </Typography>
                  </div>
               </div>

               <div className="p-5">
                  <div className="flex justify-between items-center">
                     <Typography className="uppercase font-bold text-2xl text-black">
                        total
                     </Typography>
                     <Typography className="uppercase font-normal text-2xl text-black">
                        €{totalPriceSelector},00
                     </Typography>
                  </div>
               </div>

               <div className="p-5 flex flex-col gap-5">
                  <Button
                     size="lg"
                     color="gray"
                     className="rounded-none bg-black text-white"
                  >
                     to the checkout
                  </Button>
                  <Button
                     size="lg"
                     color="gray"
                     className="rounded-none bg-white text-black border-[1px] border-black"
                  >
                     to shopping cart
                  </Button>
               </div>
            </div>
         )}
      </Card>
   );
};

export default SideBarCart;
