import { Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../store';

const TotalPrice = ({ className }: { className?: string }) => {
   const totalPriceSlice = useSelector(
      (state: RootState) => state.cart.totalPrice
   );
   return (
      <div className={`flex justify-between items-center ${className}`}>
         <Typography className="text-black">Subtotal</Typography>
         <div className="flex items-center gap-1">
            <Typography className="text-sm text-black font-thin">
               EUR
            </Typography>
            <Typography className="text-black text-lg font-bold">
               €{totalPriceSlice}.00
            </Typography>
         </div>
      </div>
   );
};

export default TotalPrice;
