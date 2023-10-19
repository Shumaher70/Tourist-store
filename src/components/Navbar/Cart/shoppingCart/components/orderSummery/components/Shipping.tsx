import { Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle, AiOutlineClose } from 'react-icons/ai';
const Shipping = ({ className }: { className?: string }) => {
   const [show, setShow] = useState(true);
   const [init, setInit] = useState(true);
   useEffect(() => {
      if (init) {
         setTimeout(() => setInit(false), 1);
      }
   }, [init]);

   return (
      <div className={`flex justify-between items-center ${className}`}>
         <div className="flex gap-1 items-center">
            <Typography className="text-black">Shipping</Typography>
            <AiOutlineQuestionCircle
               className="cursor-pointer"
               onClick={() => setShow(true)}
            />
         </div>
         <Typography className="text-sm text-gray">
            Enter shipping address'
         </Typography>

         <div
            className={`absolute top-0 right-0 w-full h-full z-10 bg-black/40 backdrop-blur cursor-pointer ${
               show
                  ? 'opacity-1 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
            } transition duration-500`}
            onClick={() => setShow(false)}
         />

         <div
            className={`max-w-[800px] z-20 bg-white p-5 rounded-xl absolute top-2/4 right-2/4  translate-x-2/4 ${
               show
                  ? '-translate-y-2/4 opacity-1 pointer-events-auto'
                  : 'translate-y-[200px] opacity-0 pointer-events-none'
            } transition duration-500`}
         >
            <div className="flex justify-between items-center sm:gap-5 gap-2 w-full">
               <Typography className="sm:text-3xl text-2xl font-normal">
                  Shipping Policy
               </Typography>
               <AiOutlineClose
                  onClick={() => setShow(false)}
                  className="w-[30px] text-black/50 h-full cursor-pointer"
               />
            </div>

            <Typography className="text-md text-black mt-5 max-h-[150px] overflow-y-auto">
               Für Lieferungen außerhalb der EU können je nach Bestellwert
               Kosten für Zoll und Steuern erhoben werden. Diese werden vom
               Zielland festgelegt. Für den Fall, dass derartige zusätzliche
               Abgaben anfallen, müssen sie bezahlt werden, damit Dein Paket
               zugestellt werden kann. Dabei trägt der Kunde die anfallenden
               Kosten selbst. Kontaktiere bitte Dein Zollamt vor Ort, um weitere
               Informationen zu den Richtlinien Deines Landes zu erhalten.
            </Typography>
         </div>
      </div>
   );
};

export default Shipping;
