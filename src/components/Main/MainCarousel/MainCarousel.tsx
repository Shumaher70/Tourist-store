import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Typography, Button } from '@material-tailwind/react';
import { dammyDiscriptionMainCarousel } from './dammyDiscriptionMainCarousel';
import { nanoid } from 'nanoid';
import Slider from 'infinite-react-carousel';

const MainCarousel = () => {
  const sizeSelector = useSelector((state: RootState) => state.size.hightNav);
  const [slider, setSider] = useState<Boolean | HTMLDivElement>(false);

  useEffect(() => {
    setSider(true);
  }, []);

  return (
    slider && (
      <div style={{ paddingTop: `${sizeSelector}px`, position: 'relative' }}>
        <Slider
          dots
          adaptiveHeight={true}
          arrows={false}
          appendDots={(dots: any) => {
            return (
              <ul
                style={{
                  position: 'absolute',
                  bottom: '50px',
                  right: '50px',
                  zIndex: '1',
                  width: 'auto',
                }}
              >
                {dots}
              </ul>
            );
          }}
        >
          {dammyDiscriptionMainCarousel.map((item) => {
            return (
              <div key={nanoid()}>
                <img
                  className="min-h-[600px] w-full object-cover object-center sm:max-h-[693px]"
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
                  <Button
                    className="rounded-none sm:w-[124px] h-[48px]"
                    color="white"
                  >
                    Discover
                  </Button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    )
  );
};

export default MainCarousel;
