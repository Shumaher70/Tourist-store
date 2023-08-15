import { useEffect, useState } from 'react';

import { Typography } from '@material-tailwind/react';
import Slider from 'infinite-react-carousel';

const TemplateMagazineCarousel = (): JSX.Element => {
  const [screen, getScreen] = useState(4);
  const [isSlider, setisSlider] = useState(false);
  useEffect(() => {
    setisSlider(true);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      getScreen(4);
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      getScreen(3);
    } else if (window.innerWidth < 768 && window.innerWidth >= 480) {
      getScreen(2);
    } else if (window.innerWidth < 480) {
      getScreen(1);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        getScreen(4);
      } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        getScreen(3);
      } else if (window.innerWidth < 768 && window.innerWidth >= 480) {
        getScreen(2);
      } else if (window.innerWidth < 480) {
        getScreen(1);
      }
    });
  }, []);

  return (
    <div className="py-[5%]">
      {isSlider && (
        <div className="border-t-[1px] border-black">
          <Slider
            className="pt-10"
            adaptiveHeight={true}
            slidesToShow={screen}
            slidesPerRow={1}
            duration={200}
            centerMode={true}
          >
            <div>
              <img
                className="cursor-pointer relative brightness-50 2xl:h-[280px] 2xl:w-[280px] xl:w-[230px] xl:h-[230px] lg:w-[175px] lg:h-[175px] h-[150px] w-[150px] ovject-cover"
                src={require('./img/TemplateMagazineCarouselImg1.jpg')}
                alt="TemplateMagazineCarouselImg1"
              />
              <div className="flex justify-center absolute bottom-5 left-5">
                <Typography
                  variant="h2"
                  className="uppercase font-normal text-lg sm:text-1xl text-white"
                >
                  Adventure
                </Typography>
              </div>
            </div>
            <div>
              <img
                className="cursor-pointer relative brightness-50 2xl:h-[280px] 2xl:w-[280px] xl:w-[230px] xl:h-[230px] lg:w-[175px] lg:h-[175px] h-[150px] w-[150px] object-cover"
                src={require('./img/TemplateMagazineCarouselImg2.webp')}
                alt="TemplateMagazineCarouselImg1"
              />
              <div className="flex justify-center absolute bottom-5 left-5">
                <Typography
                  variant="h2"
                  className="uppercase font-normal text-lg sm:text-1xl text-white"
                >
                  Collaboration
                </Typography>
              </div>
            </div>
            <div>
              <img
                className="cursor-pointer relative brightness-50 2xl:h-[280px] 2xl:w-[280px] xl:w-[230px] xl:h-[230px] lg:w-[175px] lg:h-[175px] h-[150px] w-[150px]"
                src={require('./img/TemplateMagazineCarouselImg3.jpg')}
                alt="TemplateMagazineCarouselImg1"
              />
              <div className="flex justify-center absolute bottom-5 left-5">
                <Typography
                  variant="h2"
                  className="uppercase font-normal text-lg sm:text-1xl text-white"
                >
                  Projects
                </Typography>
              </div>
            </div>
            <div>
              <img
                className="cursor-pointer relative brightness-50 2xl:h-[280px] 2xl:w-[280px] xl:w-[230px] xl:h-[230px] lg:w-[175px] lg:h-[175px] h-[150px] w-[150px]"
                src={require('./img/TemplateMagazineCarouselImg4.webp')}
                alt="TemplateMagazineCarouselImg1"
              />
              <div className="flex justify-center absolute bottom-5 left-5">
                <Typography
                  variant="h2"
                  className="uppercase font-normal text-lg sm:text-1xl text-white"
                >
                  HPT GOURMET CAMPING
                </Typography>
              </div>
            </div>
          </Slider>
        </div>
      )}
    </div>
  );
};

export default TemplateMagazineCarousel;
