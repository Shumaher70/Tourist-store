import { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   addToCart,
   decreaseSingleProductQuantity,
   removeCart,
   totalCart,
   totalSingleCart,
   updateProductQuantity,
} from '../../../../store/redusers/cartReduser';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

type ShoppingCartPageProps = {
   id: string;
   img: string;
   title: string;
   price: number;
   quantityProduct: number;
   totalPriceProduct: number;
   src: string;
};

const SingleCartShopping = ({
   id,
   img,
   title,
   price,
   quantityProduct,
   totalPriceProduct,
   src,
}: ShoppingCartPageProps) => {
   const [valueInput, setValueInput] = useState(quantityProduct);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(totalCart());
      dispatch(
         updateProductQuantity({
            id,
            mainImg: img,
            title,
            price,
            quantity: quantityProduct,
            totalPriceProduct,
            src,
         })
      );
   }, [
      dispatch,
      id,
      img,
      price,
      quantityProduct,
      src,
      title,
      totalPriceProduct,
   ]);

   useEffect(() => {
      dispatch(
         totalSingleCart({
            id,
            mainImg: img,
            title,
            price,
            quantity: valueInput,
            totalPriceProduct,
            src,
         })
      );
   }, [
      dispatch,
      id,
      img,
      price,
      quantityProduct,
      src,
      title,
      totalPriceProduct,
      valueInput,
   ]);

   return (
      <div className="w-full sm:flex justify-between p-5 border-t-[1px] border-black">
         <div className="basis-3/5 flex items-center gap-2">
            <Link to={src}>
               <img
                  src={require(`../../../../dammyDB/${img}`)}
                  alt={title}
                  className="object-cover w-32 h-32"
               />
            </Link>
            <Typography className="text-black font-normal">{title}</Typography>
         </div>

         <div className="basis-2/5 flex justify-center items-center gap-[70px]">
            <div className="flex min-w-[80px] items-center flex-col gap-1">
               <div className="flex border-[1px] border-black/50 group">
                  <input
                     onChange={(e) => {
                        setValueInput(+e.target.value);
                     }}
                     type="number"
                     className="bg-white w-[30px] h-[30px] border-[1px outline-none text-center"
                     value={valueInput}
                  />
                  <div className="opacity-0 group-hover:opacity-[100] flex flex-col">
                     <AiOutlineArrowUp
                        onClick={() =>
                           dispatch(
                              addToCart({
                                 id,
                                 mainImg: img,
                                 title,
                                 price,
                                 quantity: quantityProduct,
                                 totalPriceProduct,
                                 src,
                              })
                           )
                        }
                        className="h-[14px] cursor-pointer"
                     />
                     <AiOutlineArrowDown
                        onClick={() => {
                           if (valueInput === 1) return;
                           dispatch(
                              decreaseSingleProductQuantity({
                                 id,
                                 mainImg: img,
                                 title,
                                 price,
                                 quantity: quantityProduct,
                                 totalPriceProduct,
                                 src,
                              })
                           );
                        }}
                        className="h-[14px] cursor-pointer"
                     />
                  </div>
               </div>
               <Typography
                  onClick={() => {
                     dispatch(
                        removeCart({
                           id,
                           mainImg: img,
                           title,
                           price,
                           quantity: quantityProduct,
                           totalPriceProduct,
                           src,
                        })
                     );
                     dispatch(totalCart());
                  }}
                  className="text-black text-[10px] cursor-pointer uppercase"
               >
                  remove
               </Typography>
            </div>
            <Typography className="min-w-[80px] flex justify-center text-md font-normal underline text-black uppercase">
               €{totalPriceProduct},00
            </Typography>
         </div>
      </div>
   );
};

export default SingleCartShopping;
