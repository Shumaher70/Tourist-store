import { Carousel, Typography, Button } from '@material-tailwind/react';
import { mainGaranteeTrigger } from './mainGaranteeTrigger';
import { NavLink } from 'react-router-dom';

const MainGarantee = () => {
  return (
    <Carousel
      className="max-h-[600px] overflow-y-hidden"
      prevArrow={() => false}
      nextArrow={() => false}
      navigation={({ setActiveIndex, activeIndex }) => (
        <div className="absolute w-full h-[25%] px-[10%] bottom-4 left-2/4 z-50 flex -translate-x-2/4 pt-10 sm:py-10 ">
          <div className=" flex w-full h-full justify-between items-center border-t-[1px] border-white">
            {mainGaranteeTrigger.map((_, i) => (
              <img
                key={i}
                src={require(`./${_}`)}
                alt="1"
                className={`block w-20 md:w-40 md:pt-10 cursor-pointer transition-all ${
                  activeIndex === i ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      )}
    >
      <div className="relative h-full w-full ">
        <img
          src={require('./garantee-bg-1.webp')}
          alt="garantee-bg-1"
          className="h-[600px] md:max-h-[600px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full  items-start pt-20 bg-black/20 sm:pt-0 sm:items-center">
          <div className="w-3/4 md:w-2/4 pl-[10%] pb-[10%]">
            <Typography
              variant="h2"
              color="white"
              className="mb-4 text-2xl sn:text-4xl lg:text-5xl border-y-[1px] border-white"
            >
              LIFETIME GUARANTEE
            </Typography>
            <Typography variant="paragraph" color="white" className="mt-5">
              All HEIMPLANET Products are built to withstand the harsh test of
              time. If any of our products do not perform as promised, just
              contact us!
            </Typography>
            <div className="flex gap-2">
              <NavLink to="/blogs/projekte/lebenslanger-support-garantie">
                <Button size="lg" color="white" className="rounded-none mt-5">
                  LEARN MORE
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full ">
        <img
          src={require('./garantee-bg-2.webp')}
          alt="garantee-bg-2"
          className="h-[600px] md:max-h-[600px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full  items-start pt-10 bg-black/20 sm:pt-0 sm:items-center">
          <div className="w-3/4 md:w-2/4 pl-[10%] pb-[10%]">
            <Typography
              variant="h2"
              color="white"
              className="mb-4 text-2xl sm:text-4xl border-y-[1px] border-white"
            >
              The Beauty of Nature
            </Typography>
            <Typography variant="paragraph" color="white" className="mt-5">
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts, as for that subtle something, that quality of
              air that emanation from old trees, that so wonderfully changes and
              renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white" className="rounded-none mt-5">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full ">
        <img
          src={require('./garantee-bg-3.webp')}
          alt="garantee-bg-3.webp"
          className="h-[600px] md:max-h-[600px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full  items-start pt-10 bg-black/20 sm:pt-0 sm:items-center">
          <div className="w-3/4 md:w-2/4 pl-[10%] pb-[10%]">
            <Typography
              variant="h2"
              color="white"
              className="mb-4 text-2xl sm:text-4xl border-y-[1px] border-white"
            >
              The Beauty of Nature
            </Typography>
            <Typography variant="paragraph" color="white" className="mt-5">
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts, as for that subtle something, that quality of
              air that emanation from old trees, that so wonderfully changes and
              renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white" className="rounded-none mt-5">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default MainGarantee;
