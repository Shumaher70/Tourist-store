import { useEffect, useState } from 'react';

import { Typography } from '@material-tailwind/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { nanoid } from '@reduxjs/toolkit';

interface HighLightSectionProps {
  product: { [key: string]: string | string[] };
  maketProduct?: {
    maket: {
      [key: string]: string;
    }[];
  };
}

const HighLightSection = ({ product, maketProduct }: HighLightSectionProps) => {
  const [showCarousel, setShowCarousel] = useState<{ [key: string]: boolean }>({
    index1: false,
    index2: false,
    index3: false,
    index4: false,
    index5: false,
    index6: false,
  });
  const maket = maketProduct?.maket;

  const PingElement = () => {
    const [ping, setPing] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        setPing((prevPing) => !prevPing);
      }, 2000);
      return () => clearInterval(timer);
    }, []);

    return (
      <div
        className={`${
          ping ? 'animate-pulse' : ''
        } absolute rounded-full md:w-3 md:h-3 w-2 h-2 bg-[#ffffffa8]`}
      />
    );
  };

  const handleCarouselClick = (index: number) => {
    setShowCarousel({
      index1: index === 1,
      index2: index === 2,
      index3: index === 3,
      index4: index === 4,
      index5: index === 5,
      index6: index === 6,
    });
  };

  const CustomRightArrow = ({ ...rest }) => {
    const { onClick } = rest;
    return (
      <button
        className=" absolute right-0 rounded-full bg-white  mr-[10%] transition linear  duration-250 hover:bg-black hover:text-white"
        onClick={() => onClick()}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex justify-center items-center"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="CurrentColor"
            strokeWidth="1"
            className="block"
          ></path>
        </svg>
      </button>
    );
  };
  const CustomLeftArrow = ({ ...rest }) => {
    const { onClick } = rest;
    return (
      <button
        className=" absolute top-[-20px] z-[99] left-0 rounded-full  ml-[10%] rotate-180 transition linear  duration-250 hover:bg-black hover:text-white"
        onClick={() => onClick()}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1"></path>
        </svg>
      </button>
    );
  };

  return (
    <section className="flex flex-col lg:flex-row gap-5 items-center px-[10%] mt-2 py-[2%] bg-[#f2f2f2]">
      <div className="flex basis-3/5 flex-col">
        <div className="xl:w-2/4">
          {product.maketMainTitle && (
            <Typography className="text-4xl font-normal">
              {product.maketMainTitle}
            </Typography>
          )}

          <Typography className="flex gap-5 items-center border-t-[1px] border-black py-2 font-normal mt-10">
            <img
              src={require(`../../dammyDB/${product.maketMainImg1}`)}
              alt={product.maketMainImg1 as string}
              className="w-[26px] h-[26px]"
            />
            {product.maketMainShortDescription1}
          </Typography>

          <Typography className="flex gap-5 items-center border-t-[1px] border-black py-2 font-normal">
            <img
              src={require(`../../dammyDB/${product.maketMainImg2}`)}
              alt={product.maketMainImg2 as string}
              className="w-[26px] h-[26px]"
            />
            {product.maketMainShortDescription2}
          </Typography>

          <Typography className="flex gap-5 items-center border-y-[1px] border-black py-2 font-normal">
            <img
              src={require(`../../dammyDB/${product.maketMainImg3}`)}
              alt={product.maketMainImg3 as string}
              className="w-[26px] h-[26px]"
            />
            {product.maketMainShortDescription3}
          </Typography>
        </div>
      </div>

      <div className="relative lg:w-[600px] md:w-[400px] w-[256px]">
        <img
          src={require(`../../dammyDB/${product.mainImg[0]}`)}
          alt="tent"
          className="brightness-95"
        />

        <div
          onClick={() => handleCarouselClick(1)}
          className="cursor-pointer absolute bsolute flex justify-center items-center md:w-10 md:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full md:top-[138px] md:left-[62px] lg:top-[213px] lg:left-[124px] top-[89px] left-[42px]"
          data-index="1"
        >
          <PingElement />
          <div
            className={`absolute md:w-3 md:h-3 w-1.5 h-1.5 rounded-full ${
              showCarousel.index1 ? 'bg-white' : 'bg-black'
            }`}
          />
        </div>

        <div
          onClick={() => handleCarouselClick(2)}
          className={`cursor-pointer absolute flex justify-center items-center md:w-10 md:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full  md:top-[243px] md:left-[10px] lg:top-[381px] lg:left-[60px] top-[158px] left-[19px]`}
          data-index="2"
        >
          <PingElement />
          <div
            className={`absolute md:w-3 md:h-3 w-1.5 h-1.5 rounded-full ${
              showCarousel.index2 ? 'bg-white' : 'bg-black'
            }`}
          />
        </div>

        <div
          onClick={() => handleCarouselClick(3)}
          className={`cursor-pointer absolute flex justify-center items-center md:w-10 md:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full  md:top-[195px] md:left-[202px] lg:top-[317px] lg:left-[316px] top-[122px] left-[116px]`}
          data-index="3"
        >
          <PingElement />
          <div
            className={`absolute md:w-3 md:h-3 w-1.5 h-1.5 rounded-full ${
              showCarousel.index3 ? 'bg-white' : 'bg-black'
            }`}
          />
        </div>

        <div
          onClick={() => handleCarouselClick(4)}
          className={`cursor-pointer absolute flex justify-center items-center md:w-10 md:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full  md:top-[247px] md:left-[261px] lg:top-[368px] lg:left-[396px] top-[152px] left-[151px]`}
          data-index="4"
        >
          <PingElement />
          <div
            className={`absolute md:w-3 md:h-3 w-1.5 h-1.5 rounded-full ${
              showCarousel.index4 ? 'bg-white' : 'bg-black'
            }`}
          />
        </div>

        <div
          onClick={() => handleCarouselClick(5)}
          className={`cursor-pointer absolute flex justify-center items-center md:w-10 md:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full  md:top-[238px] md:left-[353px] lg:top-[360px] lg:left-[507px] top-[152px] left-[224px]`}
          data-index="5"
        >
          <PingElement />
          <div
            className={`absolute md:w-3 md:h-3 w-1.5 h-1.5 rounded-full ${
              showCarousel.index5 ? 'bg-white' : 'bg-black'
            }`}
          />
        </div>

        <div
          onClick={() => handleCarouselClick(6)}
          className={`cursor-pointer absolute flex justify-center items-center md:w-10 md:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full  md:top-[105px] md:left-[257px] lg:top-[159px] lg:left-[376px] top-[59px] left-[148px]`}
          data-index="6"
        >
          <PingElement />
          <div
            className={`absolute md:w-3 md:h-3 w-1.5 h-1.5 rounded-full ${
              showCarousel.index6 ? 'bg-white' : 'bg-black'
            }`}
          />
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-[#1111115e] z-50" />
      <Carousel
        className="fixed w-full left-0 bottom-0 h-auto bg-white z-50 "
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        sliderClass="h-full py-10"
        itemClass="h-full"
      >
        {maket &&
          maket?.map((item) => {
            return (
              <div key={nanoid()} className="w-full h-full flex flex-col">
                <div className="w-full h-full flex justify-center">
                  <div className="w-[500px] h-[400px]">
                    <img
                      src={require(`../../dammyDB/${item.img}`)}
                      alt={item.img}
                      className="object-cover w-full h-full"
                      draggable={false}
                    />
                  </div>
                </div>
                <div className="w-full h-[20vh] px-[40px]">
                  <Typography className="mt-5 text-2xl font-normal border-b-[1px] border-black">
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </div>
              </div>
            );
          })}
      </Carousel>
    </section>
  );
};

export default HighLightSection;
