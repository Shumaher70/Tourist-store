import { Button, Typography } from '@material-tailwind/react';
import { useState } from 'react';

interface FaqProps {
  description?: string;
  title: string;
  titleStyle?: string;
  children?: React.ReactNode;
}

const Faq = ({ description, title, titleStyle, children }: FaqProps) => {
  const [trigger, setTrigger] = useState<boolean>(false);

  const handlerClick = () => {
    setTrigger((priv) => !priv);
  };

  return (
    <div className=" flex flex-col border-b-[1px] border-[#f6f6f6] py-5">
      <div className="relative">
        <Typography
          onClick={handlerClick}
          className={`font-normal ${titleStyle ? titleStyle : 'text-[1.4rem]'}`}
        >
          {title}
        </Typography>
        <div
          className="w-[26px] h-[26px]"
          style={
            trigger
              ? {
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  transform: 'rotate(1.37turn)',

                  transition: 'transform 0.25s linear',
                }
              : {
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  transform: 'rotate(0.5turn)',
                  transition: 'transform 0.25s linear',
                }
          }
        >
          <Button
            onClick={handlerClick}
            color="white"
            className="relative rounded-full p-[13px] bg-gray-200"
          >
            <div className="bg-black h-[1px] w-[13px] absolute top-2/4 right-2/4 translate-x-2/4 " />
            <div className="bg-black h-[1px] w-[13px] absolute top-2/4 right-2/4 translate-x-2/4 rotate-90" />
          </Button>
        </div>

        {trigger && (
          <div className="mt-5">
            <Typography>{description || ''}</Typography>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
