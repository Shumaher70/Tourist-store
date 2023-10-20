import { Button } from '@material-tailwind/react';
import { useEffect, useState, useCallback } from 'react';

interface ButtonCustomProps {
   btnTitle?: string;
   btnStyle?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
   btnTitle = 'Discover now',
   btnStyle = 'bg-white text-black',
}) => {
   const [scroll, setScroll] = useState(0);

   const scrollHandler = useCallback(() => {
      const scrollPercentage = window.scrollY / 3;
      setScroll(scrollPercentage < 100 ? scrollPercentage : 100);
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', scrollHandler);

      return () => {
         window.removeEventListener('scroll', scrollHandler);
      };
   }, [scrollHandler]);

   return (
      <Button
         style={{ filter: `invert(${scroll}%)` }}
         color="gray"
         className={`rounded-none font-normal ${btnStyle}`}
      >
         {btnTitle}
      </Button>
   );
};

export default ButtonCustom;
