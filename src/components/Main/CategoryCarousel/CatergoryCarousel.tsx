import { useLayoutEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { dammyCategoryDiscription } from './dammyCategoryDiscription';
import { nanoid } from 'nanoid';
import Slider from 'infinite-react-carousel';

const CatrgoryCarousel = () => {
  const [screenLg, getScreenLg] = useState(false);
  const [screenMd, getScreenMd] = useState(false);
  const [screenMind, getScreenMind] = useState(true);

  useLayoutEffect(() => {
    if (window.innerWidth >= 1024) {
      getScreenMind(false);
      getScreenMd(false);
      getScreenLg(true);
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      getScreenMind(false);
      getScreenLg(false);
      getScreenMd(true);
    } else if (window.innerWidth <= 768) {
      getScreenMind(true);
      getScreenLg(false);
      getScreenMd(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        getScreenMind(false);
        getScreenMd(false);
        getScreenLg(true);
      } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        getScreenMind(false);
        getScreenLg(false);
        getScreenMd(true);
      } else if (window.innerWidth <= 768) {
        getScreenMind(true);
        getScreenLg(false);
        getScreenMd(false);
      }
    });
  }, []);

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
                <div className="flex justify-center">
                  <Typography
                    variant="h2"
                    className="uppercase font-normal text-2xl sm:text-3xl"
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
                <div className="flex justify-center items-center">
                  <Typography
                    variant="h4"
                    className="uppercase font-normal text-2xl sm:text-2xl"
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
                    className="uppercase font-normal text-2xl sm:text-3xl"
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
