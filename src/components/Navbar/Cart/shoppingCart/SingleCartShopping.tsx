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
      <div className="flex items-center sm:px-5 sm:pb-5 p-5 gap-2 border-t-[1px] border-black">
         <Link to={src} className="sm:basis-1/5 basis-2/5">
            <img
               src={require(`../../../../dammyDB/${img}`)}
               alt={title}
               className="object-cover"
            />
         </Link>

         <div className="flex sm:flex-row gap-2 flex-col basis-4/5">
            <Typography className="text-black font-normal basis-2/4">
               {title}
            </Typography>
            <div className="basis-1/4 flex-col gap-1">
               <div className="w-min flex flex-col items-center">
                  <div className="flex border-[1px] border-black/50 p-2">
                     <input
                        onChange={(e) => {
                           setValueInput(+e.target.value);
                        }}
                        type="number"
                        className="bg-white flex w-[30px] h-[30px] outline-none"
                        value={valueInput}
                     />
                     <div className="flex flex-col">
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
                     className="text-black text-[12px] mt-1 cursor-pointer uppercase"
                  >
                     remove
                  </Typography>
               </div>
            </div>
            <Typography className="flex basis-1/4 text-md font-normal underline text-black uppercase">
               €{totalPriceProduct},00
            </Typography>
         </div>
      </div>
   );
};

export default SingleCartShopping;
