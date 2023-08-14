import { Typography, Button, Card } from '@material-tailwind/react';
import { nanoid } from 'nanoid';

import { dammyTopSellerDiscription } from './dammyTopSellerDicription';
import { NavLink } from 'react-router-dom';

const TopSeller = () => {
  return (
    <div className="flex-col items-center py-10 px-[10%]">
      <div className="flex justify-between ">
        <Typography
          variant="h2"
          className="font-normal uppercase text-2xl sm:text-4xl"
        >
          top seller
        </Typography>
        <NavLink to="/collections/topseller">
          <Button
            color="white"
            className="rounded-none border-[1px] border-[#000000]"
          >
            DISCOVER
          </Button>
        </NavLink>
      </div>

      <div className="columns-1 pt-10 lg:columns-4 md:columns-2">
        {dammyTopSellerDiscription.map((item) => (
          <Card
            key={nanoid()}
            className="rounded-none shadow-none cursor-pointer"
          >
            <div className="relative">
              <div className="absolute w-full h-full bg-black opacity-5"></div>
              <img src={require(`./topSellerImg/${item.img}`)} alt={item.img} />
            </div>

            <Typography className="uppercase mt-3" variant="h5" color="black">
              {item.discription}
            </Typography>

            <div className="flex justify-between pb-10">
              <Typography variant="paragraph">{item.category}</Typography>

              <Typography
                className="border-b-[1px] border-black"
                variant="paragraph"
                color="black"
              >
                {`€${item.prise}`}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
