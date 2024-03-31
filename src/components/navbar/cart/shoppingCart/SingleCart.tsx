import { Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {
   addToCart,
   decreaseSingleProductQuantity,
   removeCart,
   totalCart,
   updateProductQuantity,
} from '../../../../store/redusers/cartReduser';
import { Link } from 'react-router-dom';

interface singleCartProps {
   id: string;
   img: string;
   title: string;
   price: number;
   quantityProduct: number;
   totalPriceProduct: number;
   src: string;
}

const SingleCart: React.FC<singleCartProps> = ({
   id,
   img,
   title,
   price,
   quantityProduct,
   totalPriceProduct,
   src,
}) => {
   const [quantity, setQuantity] = useState(quantityProduct);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(totalCart());
      dispatch(
         updateProductQuantity({
            mainImg: img,
            title,
            price,
            quantity,
            totalPriceProduct: totalPriceProduct,
            src,
            id,
         })
      );
   }, [dispatch, id, img, price, quantity, src, title, totalPriceProduct]);

   return (
      <div key={id} className="px-5">
         <div className="w-full flex justify-between border-b-[1px] py-5 border-[#d3d2d2] gap-5">
            <div className="basis-2/6">
               <Link to={src}>
                  <img
                     src={require(`../../../../dammyDB/${img}`)}
                     alt={img}
                     className="brightness-90"
                  />
               </Link>
            </div>

            <div className="flex flex-col flex-1 gap-5">
               <div className="flex flex-col flex-1">
                  <Typography className="text-black font-normal">
                     {title}
                  </Typography>
                  <Typography className="text-black underline">
                     €{price},00
                  </Typography>
               </div>

               <div className="flex justify-between items-center">
                  <div className="flex items-center border-[1px] border-black p-1 gap-1">
                     <AiOutlinePlus
                        onClick={() => {
                           setQuantity((priv) => priv + 1);
                           dispatch(
                              addToCart({
                                 mainImg: img,
                                 title,
                                 price,
                                 quantity: quantity,
                                 totalPriceProduct,
                                 src,
                                 id,
                              })
                           );
                        }}
                        className="h-5 w-5 text-black cursor-pointer"
                     />
                     <input
                        min="1"
                        className="bg-white text-center text-black flex w-[20px]"
                        type="number"
                        onChange={(e) => {
                           setQuantity(+e.target.value);
                        }}
                        value={quantity}
                     />
                     <AiOutlineMinus
                        onClick={() => {
                           if (quantity > 1) {
                              setQuantity((priv) => priv - 1);
                              dispatch(
                                 decreaseSingleProductQuantity({
                                    mainImg: img,
                                    title,
                                    price,
                                    quantity: quantity,
                                    totalPriceProduct,
                                    src,
                                    id,
                                 })
                              );
                           }
                        }}
                        className="h-5 w-5 text-black cursor-pointer"
                     />
                  </div>

                  <button
                     onClick={() => {
                        dispatch(
                           removeCart({
                              mainImg: img,
                              title: title,
                              price: price,
                              quantity,
                              totalPriceProduct: totalPriceProduct,
                              src,
                              id,
                           })
                        );
                        dispatch(totalCart());
                     }}
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
};

export default SingleCart;
