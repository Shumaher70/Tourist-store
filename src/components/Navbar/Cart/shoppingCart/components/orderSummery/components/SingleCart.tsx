import { Typography } from '@material-tailwind/react';

interface SingleCartProps {
   totalPrice: number;
   img: string;
   title: string;
   quantity: number;
}

const SingleCart = ({ totalPrice, quantity, img, title }: SingleCartProps) => {
   return (
      <div className="flex justify-between items-center">
         <div className="flex gap-2 items-center">
            <div className="relative ">
               <img
                  src={require(`../../../../../../../dammyDB/${img}`)}
                  alt={title}
                  className="min-h-20 min-w-20 max-h-[81px] max-w-[81px] object-cover rounded-lg border-[1px] border-black"
               />
               <div className="absolute -right-2 -top-2 flex justify-center items-center bg-black/50 rounded-full w-5 h-5">
                  <Typography className="text-white text-[12px]">
                     {quantity}
                  </Typography>
               </div>
            </div>

            <Typography className="capitalize">{title}</Typography>
         </div>

         <Typography className="text-black">€{totalPrice},00</Typography>
      </div>
   );
};

export default SingleCart;
