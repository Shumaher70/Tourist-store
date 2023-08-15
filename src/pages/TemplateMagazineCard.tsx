import { Button, Typography } from '@material-tailwind/react';

interface TemplateMagazineCardProps {
  title?: string;
  description?: string;
  buttonDescription?: string;
  img?: string;
}

const TemplateMagazineCard = ({
  title,
  description,
  buttonDescription,
  img,
}: TemplateMagazineCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 border-b-[1px] border-black py-10 mb-10">
      <div className="flex-1 sm:min-h-[380px] ">
        <img
          src={`${img ? require(`./img/${img}`) : require('./img/error.jpg')}`}
          alt="img"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-start flex-1 gap-3 sm:min-w-[370px] ">
        <Typography className="text-black font-bold">{title}</Typography>

        <Typography>{description}</Typography>

        <Button
          color="white"
          size="lg"
          className="rounded-none text-black border-[1px] border-black w-auto"
        >
          {buttonDescription}
        </Button>
      </div>
    </div>
  );
};

export default TemplateMagazineCard;
