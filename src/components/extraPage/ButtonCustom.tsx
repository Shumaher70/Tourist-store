import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

interface ButtonCustomProps {
   btnTitle?: string;
   btnStyle?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
   btnTitle = 'Discover now',
   btnStyle = 'bg-white text-black',
}) => {
   const [scroll, setScroll] = useState(0);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setScroll(window.scrollY < 100 ? window.scrollY : 100);
      });
   }, []);

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
