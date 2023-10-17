import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import SingleCartShopping from './SingleCartShopping';
import { nanoid } from '@reduxjs/toolkit';

const ShoppingCartPage = () => {
   const heightSlice = useSelector((state: RootState) => state.size.heightNav);
   const product = useSelector((state: RootState) => state.cart.products);
   const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

   return (
      <form
         style={{ marginTop: `${heightSlice}px` }}
         className="wrapper min-w-screen overflow-hidden"
      >
         <div className="w-full flex justify-between items-center">
            <Typography className="text-4xl font-normal text-black uppercase">
               Your shopping cart
            </Typography>
            <Link to="/" className="text-sm font-thin text-black/50 underline">
               Continue shopping
            </Link>
         </div>

         {product.length > 0 && (
            <div className="w-full overflow-auto border-[1px] border-black mt-10">
               <div className="w-full sm:flex justify-between p-5 hidden">
                  <div className="basis-3/5">
                     <Typography className="text-xl font-normal text-black uppercase">
                        product
                     </Typography>
                  </div>

                  <div className="basis-2/5 flex justify-center gap-[70px]">
                     <Typography className="min-w-[80px] flex justify-center text-xl font-normal text-black uppercase">
                        number
                     </Typography>
                     <Typography className="min-w-[80px] flex justify-center text-xl font-normal text-black uppercase">
                        price
                     </Typography>
                  </div>
               </div>
               {product.map((product) => (
                  <SingleCartShopping
                     key={nanoid()}
                     id={product.id}
                     img={product.mainImg}
                     title={product.title}
                     price={product.price}
                     quantityProduct={product.quantity}
                     totalPriceProduct={product.totalPriceProduct}
                     src={product.src}
                  />
               ))}
            </div>
         )}

         {product.length > 0 && (
            <div className="w-full border-[1px] border-black mt-5">
               <div className="w-full sm:flex justify-between p-5 hidden border-b-[1px] border-black">
                  <div className="w-full">
                     <Typography className="text-xl font-normal text-black uppercase">
                        Cost
                     </Typography>
                  </div>
               </div>

               <div className="w-full flex flex-col p-5">
                  <div className="w-full flex justify-between">
                     <div className="flex items-center gap-1">
                        <Typography className="text-sm font-normal text-black">
                           Total
                        </Typography>
                        <Typography className="text-[10px] font-normal text-black/50">
                           (incl. VAT)
                        </Typography>
                     </div>

                     <div className="flex items-center gap-1">
                        <Typography className="text-xl font-bold text-black">
                           €{totalPrice},00
                        </Typography>
                     </div>
                  </div>

                  <div className="w-full flex justify-between border-b-[1px] border-black/20 pb-3">
                     <div className="flex items-center gap-1">
                        <Typography className="text-sm font-normal text-black">
                           Discount
                        </Typography>
                     </div>

                     <div className="flex items-center gap-1">
                        <Typography className="text-lg font-normal text-black">
                           €0,00
                        </Typography>
                     </div>
                  </div>
               </div>

               <div className="w-full px-5 pb-5 py-2">
                  <Button
                     size="lg"
                     color="gray"
                     className="w-full rounded-none bg-black font-normal"
                  >
                     to the checkout
                  </Button>

                  <Button
                     type="submit"
                     size="lg"
                     color="gray"
                     className="w-full rounded-none bg-white border-[1px] border-black mt-3 text-black font-normal hover:bg-black hover:text-white transition-all"
                  >
                     refresh
                  </Button>
               </div>
            </div>
         )}
      </form>
   );
};

export default ShoppingCartPage;
