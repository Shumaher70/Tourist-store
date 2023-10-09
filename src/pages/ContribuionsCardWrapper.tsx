import { useEffect, useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

interface ContribuionsCardWrapperProps {
   children?: React.ReactNode;
   path?: string;
   buttonTitle?: string;
   buttonStyle?: string;
   title?: string;
   hideButton?: boolean;
}

const ContribuionsCardWrapper = ({
   children,
   path,
   buttonTitle,
   buttonStyle,
   title,
   hideButton,
}: ContribuionsCardWrapperProps) => {
   const [showButton, setShowButton] = useState<boolean>(false);

   useEffect(
      () => setShowButton(() => (hideButton ? hideButton : false)),
      [hideButton]
   );

   const topScreen = () => window.scrollTo(0, 0);

   return (
      <>
         <div className="flex justify-between w-full">
            <Typography
               variant="h2"
               className="font-normal uppercase text-2xl sm:text-4xl"
            >
               {title ? title : ''}
            </Typography>
            {showButton && (
               <NavLink to={path ? path : ''} onClick={() => topScreen()}>
                  <Button
                     color="white"
                     className={`rounded-none border-[1px] border-[#000000] ${
                        buttonStyle ? buttonStyle : ''
                     }`}
                  >
                     {buttonTitle}
                  </Button>
               </NavLink>
            )}
         </div>
         <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-[5%]">
            {children}
         </div>
      </>
   );
};

export default ContribuionsCardWrapper;
