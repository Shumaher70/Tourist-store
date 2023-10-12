import { useDispatch, useSelector } from 'react-redux';
import { Card, Typography } from '@material-tailwind/react';

import { toggleCart } from '../../../store/redusers/sideBarReduser';
import { RootState } from '../../../store';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

const SideBarCart = () => {
   const [quantity, setQuantity] = useState(1);
   const dispatch = useDispatch();
   const toggleCartSelector = useSelector(
      (state: RootState) => state.sideBar.toggleCart
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

         <div className="w-full h-full flex flex-col gap-5 border-t-[1px] border-[#d3d2d2]">
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
               product.map((product, index) => {
                  return (
                     <div key={index} className="px-5">
                        <div className="w-full flex justify-between border-b-[1px] py-5 border-[#d3d2d2] gap-5">
                           <div className="basis-2/6">
                              <img
                                 src={require(`../../../dammyDB/${product.mainImg}`)}
                                 alt={product.mainImg}
                                 className="brightness-90"
                              />
                           </div>

                           <div className="flex flex-col flex-1 gap-5">
                              <div className="flex flex-col flex-1">
                                 <Typography className="text-black font-normal">
                                    {product.title}
                                 </Typography>
                                 <Typography className="text-black underline">
                                    €{product.price},00
                                 </Typography>
                              </div>

                              <div className="flex justify-between items-center">
                                 <div className="flex items-center border-[1px] border-black p-1 gap-1">
                                    <AiOutlinePlus
                                       onClick={() =>
                                          setQuantity((priv) => priv + 1)
                                       }
                                       className="h-5 w-5 text-black"
                                    />
                                    <input
                                       min="1"
                                       max="10"
                                       step="1"
                                       className="bg-white text-center text-black flex w-auto"
                                       type="number"
                                       onChange={(e) =>
                                          setQuantity(+e.target.value)
                                       }
                                       value={quantity}
                                    />
                                    <AiOutlineMinus
                                       onClick={() => {
                                          if (quantity > 1)
                                             setQuantity((priv) => priv - 1);
                                       }}
                                       className="h-5 w-5 text-black"
                                    />
                                 </div>

                                 <button
                                    type="button"
                                    className="uppercase text-gray-400 text-[14px] cursor-pointer"
                                 >
                                    ENTFERNEN
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
         </div>
      </Card>
   );
};

export default SideBarCart;
