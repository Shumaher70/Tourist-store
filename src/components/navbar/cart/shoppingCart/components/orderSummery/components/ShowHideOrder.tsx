import { Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../store';
import { IoIosArrowUp } from 'react-icons/io';
import { useEffect, useState } from 'react';

interface ShowHideOrderProps {
   clickHandler: (e: boolean) => void;
}

const ShowHideOrder = ({ clickHandler }: ShowHideOrderProps) => {
   const totalPriceSlice = useSelector(
      (state: RootState) => state.cart.totalPrice
   );
   const [show, setShow] = useState(false);

   useEffect(() => {
      clickHandler(show);
   }, [clickHandler, show]);

   return (
      <div
         className="flex justify-between cursor-pointer "
         onClick={() => {
            setShow((previous) => !previous);
            clickHandler(show);
         }}
      >
         <div className="flex gap-1 items-center">
            <Typography className="text-black">Show order summary</Typography>
            <IoIosArrowUp
               className={`${show && 'rotate-180'} transition-all`}
            />
         </div>
         <Typography className="font-bold">€{totalPriceSlice},00</Typography>
      </div>
   );
};

export default ShowHideOrder;
