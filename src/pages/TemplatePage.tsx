import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button, Typography } from '@material-tailwind/react';

import AnchorLink from '../components/AnchorLink';

interface TamplatePageProps {
   title?: string;
   description?: string;
   buttonTitle?: string;
   buttonStyle?: string;
   img?: string;
   titleStyle?: string;
   descriptionStyle?: string;
   imgStyle?: string;
   extraButton?: boolean;
   extraButtonTitle?: string;
   extraButtonStyle?: string;
   scrollRefTop?: (element: number) => void;
   id?: string;
}

const TemplatePage = ({
   title,
   description,
   buttonTitle,
   img,
   imgStyle,
   titleStyle,
   descriptionStyle,
   buttonStyle,
   extraButton,
   extraButtonTitle,
   extraButtonStyle,
   scrollRefTop,
   id,
}: TamplatePageProps) => {
   const scrollRef = useRef<HTMLDivElement>(null);

   const sizeSlice = useSelector((state: RootState) => state.size.heightNav);

   const [extraBtn, setExtraBtn] = useState<boolean>(false);

   useEffect(() => {
      setExtraBtn(() => (extraButton ? extraButton : false));
   }, [extraButton]);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (scrollRefTop)
            scrollRefTop(
               scrollRef.current?.getBoundingClientRect().bottom ?? 0
            );
      });
   }, [scrollRefTop]);

   return (
      <div ref={scrollRef} className="flex flex-col">
         <div
            style={{
               marginTop: `${sizeSlice}px`,
            }}
            className="flex flex-col sm:flex-row justify-between gap-5 px-[10%] py-[3%] bg-gray-100"
         >
            <div className="flex flex-col justify-between flex-1 w-full">
               <div>
                  <Typography
                     className={`text-black w-full 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl text-2xl border-y-[1px] border-black font-medium ${
                        titleStyle ? titleStyle : ''
                     }`}
                  >
                     {title}
                  </Typography>
                  <Typography className={`text-black mt-2 ${descriptionStyle}`}>
                     {description ? description : ''}
                  </Typography>
               </div>
               <div className="flex mt-5">
                  {id ? (
                     <AnchorLink href={`#${id}`}>
                        <Button
                           className={`sm:w-auto  rounded-none w-full ${
                              buttonStyle ? buttonStyle : ''
                           }`}
                        >
                           <Typography> {buttonTitle}</Typography>
                        </Button>
                     </AnchorLink>
                  ) : (
                     <Button
                        className={`sm:w-auto  rounded-none w-full ${
                           buttonStyle ? buttonStyle : ''
                        }`}
                     >
                        <Typography> {buttonTitle}</Typography>
                     </Button>
                  )}
                  {extraBtn && (
                     <Button
                        className={`sm:w-auto rounded-none w-full ml-2 ${extraButtonStyle}`}
                     >
                        <Typography>{extraButtonTitle}</Typography>
                     </Button>
                  )}
               </div>
            </div>
            <div className="flex flex-1 sm:min-h-[80vh]">
               <img
                  className={`h-full w-full object-cover brightness-10 ${imgStyle}`}
                  src={`${
                     img ? require(`./img/${img}`) : require('./img/error.jpg')
                  }`}
                  alt="missed"
               />
            </div>
         </div>
      </div>
   );
};

export default TemplatePage;
