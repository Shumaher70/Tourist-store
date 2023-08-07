import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Button, Typography } from '@material-tailwind/react';

const Colections = () => {
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);

  return (
    <div className="flex flex-col">
      <div
        style={{ marginTop: `${sizeSlice}px` }}
        className="flex flex-wrap justify-between gap-5 px-[10%] py-[3%] bg-gray-100"
      >
        <div className="flex flex-col justify-between md:w-[47%] w-full">
          <div>
            <Typography className="text-black">
              HOME / CATEGORY / TENTS
            </Typography>
            <Typography className="text-black w-full 2xl:text-7xl xl:text-5xl text-3xl border-y-[1px] border-black font-medium">
              BAGS+BACKPACKS
            </Typography>
            <Typography className="text-black">
              HOME / CATEGORY / TENTS
            </Typography>
          </div>
          <div>
            <Button
              className="w-full md:w-auto  rounded-none bg-black text-white"
              color="white"
              size="lg"
            >
              Discover Products
            </Button>
          </div>
        </div>
        <div className="md:w-[47%]">
          <img src={require('./missed-img.webp')} alt="missed" />
        </div>
      </div>

      <div className="w-full h-full px-[10%] py-[5%] flex flex-wrap gap-5">
        <div className="relative flex-1 w-[33%] min-w-[250px] sm:min-w-[450px] cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src={require('./season-4.webp')}
            alt="season-4"
          />
          <Typography
            className="z-10 absolute bottom-10 left-10 text-2xl font-bold uppercase"
            color="white"
          >
            4-SEASON
          </Typography>
          <div className="top-0 absolute w-full h-full bg-gray-900 opacity-10" />
        </div>

        <div className="relative flex-1 w-[33%] min-w-[250px] sm:min-w-[450px] cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src={require('./all-products.webp')}
            alt="season-4"
          />
          <Typography
            className="z-10 absolute bottom-10 left-10 text-2xl font-bold uppercase"
            color="white"
          >
            All products
          </Typography>
          <div className="top-0 absolute w-full h-full bg-gray-900 opacity-10" />
        </div>

        <div className="relative flex-1 w-[33%] min-w-[250px] sm:min-w-[450px] cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src={require('./backdoor.webp')}
            alt="season-4"
          />
          <Typography
            className="z-10 absolute bottom-10 left-10 text-2xl font-bold uppercase"
            color="white"
          >
            backdoor
          </Typography>
          <div className="top-0 absolute w-full h-full bg-gray-900 opacity-10" />
        </div>

        <div className="relative flex-1 w-[33%] min-w-[250px] sm:min-w-[450px] cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src={require('./Beanies-caps.webp')}
            alt="season-4"
          />
          <Typography
            className="z-10 absolute bottom-10 left-10 text-2xl font-bold uppercase"
            color="white"
          >
            Beanies & Caps
          </Typography>
          <div className="top-0 absolute w-full h-full bg-gray-900 opacity-10" />
        </div>

        <div className="relative flex-1 w-[33%] min-w-[250px] sm:min-w-[450px] cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src={require('./apparel.webp')}
            alt="season-4"
          />
          <Typography
            className="z-10 absolute bottom-10 left-10 text-2xl font-bold uppercase"
            color="white"
          >
            Apparel
          </Typography>
          <div className="top-0 absolute w-full h-full bg-gray-900 opacity-10" />
        </div>

        <div className="relative flex-1 w-[33%] min-w-[250px] sm:min-w-[450px] cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src={require('./camping-furniture.jpg')}
            alt="season-4"
          />
          <Typography
            className="z-10 absolute bottom-10 left-10 text-2xl font-bold uppercase"
            color="white"
          >
            Camping furniture
          </Typography>
          <div className="top-0 absolute w-full h-full bg-gray-900 opacity-10" />
        </div>
      </div>
    </div>
  );
};

export default Colections;
