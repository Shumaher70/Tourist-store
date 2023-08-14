import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button, Typography } from '@material-tailwind/react';

interface TamplatePageProps {
  title?: string;
  description?: string;
  buttonTitle?: string;
  img?: string;
  titleStyle?: string;
  descriptionStyle?: string;
  buttonStyle?: string;
  imgStyle?: string;
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
}: TamplatePageProps) => {
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
  return (
    <div className="flex flex-col">
      <div
        style={{
          marginTop: `${sizeSlice}px`,
        }}
        className="flex flex-wrap justify-between gap-5 px-[10%] py-[3%] bg-gray-100"
      >
        <div className="flex flex-col justify-between md:w-[47%] w-full">
          <div>
            <Typography
              className={`text-black w-full 2xl:text-7xl text-7xl border-y-[1px] border-black font-medium ${titleStyle}`}
            >
              {title}
            </Typography>
            <Typography className={`text-black mt-2 ${descriptionStyle}`}>
              {description}
            </Typography>
          </div>
          <div>
            <Button
              className={`w-full md:w-auto  rounded-none ${buttonStyle}`}
              color="white"
              size="lg"
            >
              {buttonTitle}
            </Button>
          </div>
        </div>
        <div className="md:w-[47%] md:h-[70vh]">
          <img
            className={`h-full w-full object-cover brightness-10 ${imgStyle}`}
            src={`${img ? require(`./img/${img}`) : require('./error.jpg')}`}
            alt="missed"
          />
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
