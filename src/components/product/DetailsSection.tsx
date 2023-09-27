import { useCallback, useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { useInView } from 'react-intersection-observer';
import { nanoid } from '@reduxjs/toolkit';

interface detailsSectionProps {
   detailsSectionHandler: (element: boolean) => void;
   children?: React.ReactNode;
   product: {
      detailsDesctioption: {
         title: string;
         desctiption: string[] | JSX.Element[];
      }[];
      detailsImg1: string;
      detailsImg2: string;
   };
}

const DetailsSection: React.FC<detailsSectionProps> = ({
   detailsSectionHandler,
   children,
   product,
}) => {
   const [open, setOpen] = useState(false);
   const [trigger, setTrigger] = useState(true);
   const [isVisible, setIsVisible] = useState(false);
   const { ref, inView } = useInView({ threshold: 0.5 });

   useEffect(() => {
      if (inView) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
      detailsSectionHandler(isVisible);
   }, [detailsSectionHandler, inView, isVisible]);

   const clickHandler = useCallback(() => {
      setOpen((previous) => !previous);
   }, []);

   const clickOutsideHandler = useCallback(() => {
      setTrigger(true);
   }, []);

   const clickInsideHandler = useCallback(() => {
      setTrigger(false);
   }, []);

   const labelButton = useCallback(() => {
      return open ? 'WENIGER ANZEIGEN' : 'MEHR ANZEIGEN';
   }, [open]);

   return (
      <section id="details" className="wrapper bg-[#f2f2f2]">
         <Typography ref={ref} className="font-normal sm:text-4xl text-3xl">
            DETAILS
         </Typography>
         <div className="flex lg:flex-row flex-col">
            <div className="flex-1">
               <div
                  className={`
                     width-full 
                     p-5
                   bg-white
                     border-[1px]
                   border-black/10 py-5
                     mt-5
                     overflow-hidden
                  `}
               >
                  {children && children}

                  {product.detailsDesctioption.map((item, index) => {
                     return (
                        <div
                           key={nanoid()}
                           className={`w-full ${
                              index > 3 ? `${open ? 'flex' : 'hidden'}` : ''
                           } flex sm:flex-row flex-col border-b-[1px] border-black/10 py-5`}
                        >
                           <div className="flex-1 flex items-center">
                              <Typography className="font-bold">
                                 {item.title}
                              </Typography>
                           </div>
                           <div className="flex-1 flex items-center">
                              {item.desctiption.map((item) => (
                                 <Typography key={nanoid()}>{item}</Typography>
                              ))}
                           </div>
                        </div>
                     );
                  })}

                  <div
                     className="
                     w-full
                     bg-white
                     flex
                     justify-center
                     items-center
                     mt-5
                  "
                  >
                     {product.detailsDesctioption.length > 4 && (
                        <div>
                           <button
                              onClick={clickHandler}
                              className="
									border-[1px]
									border-black
									bg-transparent
									rounded-none
								text-black
								hover:bg-black
								hover:text-white
								hover:border-white
									py-4
									px-5
									text-sm
									transition
									"
                           >
                              {labelButton()}
                           </button>
                        </div>
                     )}
                  </div>
               </div>
            </div>
            <div
               className="
                  flex-1 
                  flex
                  flex-col
                  justify-center
                  items-center
                  mt-5
               "
            >
               {trigger && (
                  <img
                     className="brightness-95"
                     src={require(`../../dammyDB/${product.detailsImg1}`)}
                     alt="outside"
                  />
               )}

               {!trigger && (
                  <img
                     className=" brightness-95"
                     src={require(`../../dammyDB/${product.detailsImg2}`)}
                     alt="outside"
                  />
               )}
               {product.detailsImg2 && (
                  <div className="bg-white flex mt-5">
                     <button
                        onClick={clickOutsideHandler}
                        className={`${
                           trigger
                              ? 'bg-black text-white'
                              : 'bg-white text-black'
                        } m-2 py-3 px-5`}
                     >
                        OUTSIDE
                     </button>
                     <button
                        onClick={clickInsideHandler}
                        className={`${
                           trigger
                              ? 'bg-white text-black'
                              : 'bg-black text-white'
                        } m-2 py-3 px-5`}
                     >
                        GROUND
                     </button>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

export default DetailsSection;
