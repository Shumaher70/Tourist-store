import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Typography, Button } from '@material-tailwind/react';
import { dammyDiscriptionMainCarousel } from './dammyDiscriptionMainCarousel';
import { nanoid } from 'nanoid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';

const MainCarousel = () => {
  const sizeSelector = useSelector((state: RootState) => state.size.heightNav);
  const [slider, setSider] = useState<Boolean | HTMLDivElement>(false);

  useEffect(() => {
    setSider(true);
  }, []);

  const CustomDot = ({ ...rest }) => {
    const { index, active, onClick } = rest;

    const carouselItems = dammyDiscriptionMainCarousel.map((item) => <div />);

    return (
      <button
        className={`w-[15px] h-[15px] mx-1 rounded-full border-2 ${
          active ? 'bg-white' : ''
        }`}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };

  return (
    slider && (
      <div
        id="carousel"
        style={{ paddingTop: `${sizeSelector}px`, position: 'relative' }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass="bottom-[5%] translate-y-[-55%] right-[10%] justify-end"
          customDot={<CustomDot />}
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {dammyDiscriptionMainCarousel.map((item) => {
            return (
              <div key={nanoid()}>
                <img
                  className="min-h-[600px] w-full object-cover object-center sm:max-h-[693px] brightness-[80%]"
                  src={require(`./img/${item.img}`)}
                  alt={`${item.img}`}
                />
                <div className="absolute flex flex-col items-start justify-between z-10 top-0 w-full h-full py-10 px-[10%]  ">
                  <div>
                    <Typography
                      variant="h1"
                      className="inline-block uppercase text-2xl text-white border-t-[1px] border-b-[1px] border-white sm:text-4xl"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="paragraph"
                      color="white"
                      className="mt-5 w-[90%] lg:text-lg md:text-base sm:text-sm sm:w-[50%]"
                    >
                      {item.discription}
                    </Typography>
                  </div>
                  <NavLink to={`${item.link}`}>
                    <Button
                      className="rounded-none sm:w-[124px] h-[48px]"
                      color="white"
                    >
                      Discover
                    </Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    )
  );
};

export default MainCarousel;
