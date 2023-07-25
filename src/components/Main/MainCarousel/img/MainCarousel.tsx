import { Typography, Button } from '@material-tailwind/react';
const carousel = require('infinite-react-carousel');
const { Slider } = carousel;

const MainCarousel = () => {
  return (
    <Slider
      className="relative top-[60px] sm:top-[78px]"
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
      <div>
        <img
          className="min-h-[600px] w-full object-cover object-center sm:max-h-[693px]"
          src={require('./slide-1.jpg')}
          alt={'slide-1.jpg'}
        />
        <div className="absolute flex flex-col items-start justify-between z-10 top-0 w-full h-full py-10 px-3 lg:px-[10%] md:px-5 ">
          <div>
            <Typography
              variant="h1"
              className="inline-block uppercase text-4xl text-white border-t-[1px] border-b-[1px] border-white lg:text-7xl sm:text-6xl"
            >
              Our tents
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mt-5 w-[90%] lg:text-lg md:text-base sm:text-sm sm:w-[50%]"
            >
              Wherever you are: just unroll, inflate and welcome home! For those
              who love travel and simplicity!
            </Typography>
          </div>
          <Button className="rounded-none sm:w-[124px] h-[48px]" color="white">
            Discover
          </Button>
        </div>
      </div>

      <div>
        <img
          className="min-h-[600px] w-full object-cover object-center sm:max-h-[693px]"
          src={require('./slide-2.jpg')}
          alt={'slide-2.jpg'}
        />
        <div className="absolute flex flex-col items-start justify-between z-10 top-0 w-full h-full py-10 px-3 lg:px-[10%] md:px-5 ">
          <div>
            <Typography
              variant="h1"
              className="inline-block uppercase text-4xl text-white border-t-[1px] border-b-[1px] border-white lg:text-7xl sm:text-6xl"
            >
              Carry Essentials
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mt-5 w-[90%] lg:text-lg md:text-base sm:text-sm sm:w-[50%]"
            >
              Perfect for keeping everything organized & compactly stored. From
              backpacks to wash bags and everything in between.
            </Typography>
          </div>
          <Button className="rounded-none sm:w-[124px] h-[48px]" color="white">
            Discover
          </Button>
        </div>
      </div>

      <div>
        <img
          className="min-h-[600px] w-full object-cover object-center sm:max-h-[693px]"
          src={require('./slide-3.jpg')}
          alt={'slide-3.jpg'}
        />
        <div className="absolute flex flex-col items-start justify-between z-10 top-0 w-full h-full py-10 px-3 lg:px-[10%] md:px-5 ">
          <div>
            <Typography
              variant="h1"
              className="inline-block uppercase text-4xl text-white border-t-[1px] border-b-[1px] border-white lg:text-7xl sm:text-6xl"
            >
              LIMITED EDITION
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mt-5 w-[90%] lg:text-lg md:text-base sm:text-sm sm:w-[50%]"
            >
              Together with the London streetwear label Maharishi we celebrate
              patterns & textures of nature. Get your hands on one of the
              limited HEIMPLANET x MAHARISHI - THE CAVE Golden Tigerstripe.
            </Typography>
          </div>
          <Button className="rounded-none sm:w-[124px] h-[48px]" color="white">
            Discover
          </Button>
        </div>
      </div>

      <div>
        <img
          className="min-h-[600px] w-full object-cover object-center sm:max-h-[693px]"
          src={require('./slide-4.jpg')}
          alt={'slide-4.jpg'}
        />
        <div className="absolute flex flex-col items-start justify-between z-10 top-0 w-full h-full py-10 px-3 lg:px-[10%] md:px-5 ">
          <div>
            <Typography
              variant="h1"
              className="inline-block uppercase text-4xl text-white border-t-[1px] border-b-[1px] border-white lg:text-7xl sm:text-6xl"
            >
              HPT Selected
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mt-5 w-[90%] lg:text-lg md:text-base sm:text-sm sm:w-[50%]"
            >
              To make your choice a little easier, we have put together our
              personal camping equipment in cooperation with selected brands.
            </Typography>
          </div>
          <Button className="rounded-none sm:w-[124px] h-[48px]" color="white">
            Discover
          </Button>
        </div>
      </div>

      <div>
        <img
          className="min-h-[600px] w-full object-cover object-center sm:max-h-[693px]"
          src={require('./slide-5.jpg')}
          alt={'slide-5.jpg'}
        />
        <div className="absolute flex flex-col items-start justify-between z-10 top-0 w-full h-full py-10 px-3 lg:px-[10%] md:px-5 ">
          <div>
            <Typography
              variant="h1"
              className="inline-block uppercase text-4xl text-white border-t-[1px] border-b-[1px] border-white lg:text-7xl sm:text-6xl"
            >
              Transit Line
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mt-5 w-[90%] lg:text-lg md:text-base sm:text-sm sm:w-[50%]"
            >
              Perfect for every trip & every day: our Travel & Daypacks. The
              clear design & thoughtful organization make our backpacks the
              perfect companion.
            </Typography>
          </div>
          <Button className="rounded-none sm:w-[124px] h-[48px]" color="white">
            Discover
          </Button>
        </div>
      </div>
    </Slider>
  );
};

export default MainCarousel;
