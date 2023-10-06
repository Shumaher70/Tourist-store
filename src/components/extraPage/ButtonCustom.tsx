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
   const [calculScrol, setcCalculScrol] = useState(0);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setcCalculScrol(window.scrollY / 3);
         setScroll(calculScrol < 100 ? calculScrol : 100);
      });
   }, [calculScrol]);

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
