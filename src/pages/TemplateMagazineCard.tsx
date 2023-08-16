import { Button, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

interface TemplateMagazineCardProps {
  title?: string;
  description?: string;
  buttonDescription?: string;
  img?: string;
  path?: string;
}

const TemplateMagazineCard = ({
  title,
  description,
  buttonDescription,
  img,
  path,
}: TemplateMagazineCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 border-b-[1px] border-black py-10">
      <div className="flex-1 sm:min-h-[380px] w-full h-full ">
        <img
          src={`${img ? require(`./img/${img}`) : require('./img/error.jpg')}`}
          alt="img"
          className="h-full w-full object-cover min-h-[320px]"
        />
      </div>
      <div className="flex flex-col justify-center items-start flex-1 gap-3 sm:min-w-[370px] ">
        <Typography className="text-black font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-2xl text-1xl">
          {title}
        </Typography>

        <Typography className="2xl:text-lg">{description}</Typography>

        <NavLink to={path ? path : '/'}>
          <Button
            color="white"
            size="lg"
            className="rounded-none text-black border-[1px] border-black w-auto font-normal"
          >
            {buttonDescription}
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default TemplateMagazineCard;
