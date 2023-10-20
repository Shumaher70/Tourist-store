import { Button, Input, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';

interface DiscountProps {
   className?: string;
}

const Discount = ({ className }: DiscountProps) => {
   const [show, setShow] = useState(false);
   const [inputValue, setInputValue] = useState('');
   const [error, setError] = useState(false);

   const clickHandler = () => {
      setShow(true);
      setTimeout(() => {
         setShow(false);
         setError(true);
         setInputValue('');
      }, 1000);
   };

   return (
      <div className={`flex flex-col gap-1 ${className}`}>
         <div className="flex gap-2 w-full">
            <Input
               error={error ? true : false}
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               color="black"
               label="Discount code or gift card"
               className="text-black"
            />
            <div>
               <Button
                  disabled={inputValue.length === 0 ? true : false}
                  onClick={clickHandler}
                  color="gray"
                  size="sm"
                  className="bg-black flex justify-center items-center rounded-none capitalize font-normal h-[40px] w-[90px] text-1xl"
               >
                  {show ? (
                     <ImSpinner8 className="text-white w-4 h-4 animate-spin" />
                  ) : (
                     'apply'
                  )}
               </Button>
            </div>
         </div>
         {error && (
            <Typography className="text-sm text-red-500">
               Gib einen gültigen Rabattcode oder Geschenkgutschein ein
            </Typography>
         )}
      </div>
   );
};

export default Discount;
