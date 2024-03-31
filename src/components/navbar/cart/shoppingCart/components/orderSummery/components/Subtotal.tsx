import { Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../store';

const Subtotal = ({ className }: { className?: string }) => {
   const totalPriceSlice = useSelector(
      (state: RootState) => state.cart.totalPrice
   );
   return (
      <div className={`flex justify-between items-center ${className}`}>
         <Typography className="text-black">Subtotal</Typography>
         <Typography className="text-black font-bold">
            €{totalPriceSlice}.00
         </Typography>
      </div>
   );
};

export default Subtotal;
