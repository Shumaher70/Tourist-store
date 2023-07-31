import { useLayoutEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { dammyCategoryDiscription } from './dammyCategoryDiscription';
import { nanoid } from 'nanoid';

const carousel = require('infinite-react-carousel');
const { Slider } = carousel;

const CatrgoryCarousel = () => {
  const [screenLg, getScreenLg] = useState(false);
  const [screenMd, getScreenMd] = useState(false);
  const [screenMind, getScreenMind] = useState(true);

  const { innerWidth: width } = window;
  useLayoutEffect(() => {
    if (width >= 1024) {
      getScreenMind(false);
      getScreenMd(false);
      getScreenLg(true);
    } else if (width < 1024 && width >= 768) {
      getScreenMind(false);
      getScreenLg(false);
      getScreenMd(true);
    }
  }, [width]);

  return (
    <div className="border-b-[1px] border-black">
      {screenLg && (
        <Slider
          className="py-10"
          slidesPerRow={1}
          adaptiveHeight={true}
          slidesToShow={7}
          duration={200}
        >
          {dammyCategoryDiscription.map((item) => {
            return (
              <div key={nanoid()}>
                <img
                  className="cursor-pointer"
                  src={require(`./categoryImg/${item.img}`)}
                  alt={item.img}
                />
                <div className="flex justify-center ">
                  <Typography
                    variant="h2"
                    className="uppercase font-normal text-2xl sm:text-4xl"
                  >
                    {item.discription}
                  </Typography>
                </div>
              </div>
            );
          })}
        </Slider>
      )}

      {screenMd && (
        <Slider
          className="py-10"
          slidesPerRow={1}
          adaptiveHeight={true}
          arrows={true}
          slidesToShow={3}
          duration={200}
        >
          {dammyCategoryDiscription.map((item) => {
            return (
              <div key={nanoid()}>
                <img
                  src={require(`./categoryImg/${item.img}`)}
                  alt={item.img}
                />
                <div className="flex justify-center">
                  <Typography
                    variant="h4"
                    className="uppercase font-normal text-2xl sm:text-4xl"
                  >
                    {item.discription}
                  </Typography>
                </div>
              </div>
            );
          })}
        </Slider>
      )}

      {screenMind && (
        <Slider
          className="py-10 "
          slidesPerRow={1}
          adaptiveHeight={true}
          arrows={true}
          slidesToShow={1}
          duration={200}
        >
          {dammyCategoryDiscription.map((item) => {
            return (
              <div key={nanoid()}>
                <img
                  className="cursor-pointer"
                  src={require(`./categoryImg/${item.img}`)}
                  alt={item.img}
                />
                <div className="flex justify-center">
                  <Typography
                    variant="h2"
                    className="uppercase font-normal text-2xl sm:text-4xl"
                  >
                    {item.discription}
                  </Typography>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default CatrgoryCarousel;
