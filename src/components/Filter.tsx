import { useSelector } from 'react-redux';
import { RootState } from '../store';
import React from 'react';
import {
  Typography,
  Checkbox,
  Select,
  Option,
  Card,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { nanoid } from '@reduxjs/toolkit';

interface IconProps {
  open: boolean;
}

interface FilterProps {
  activityProps?: boolean;
  typeProps?: boolean;
  sizeProps?: boolean;
  collectionProps?: boolean;
  brandProps?: boolean;
  checkboxActivity?: {
    label: string;
    checked: boolean;
  }[];
  checkboxType?: {
    label: string;
    checked: boolean;
  }[];
  checkboxSize?: {
    label: string;
    checked: boolean;
  }[];
  checkboxCollection?: {
    label: string;
    checked: boolean;
  }[];
  checkboxBrend?: {
    label: string;
    checked: boolean;
  }[];
  checkedHandler: (event: string) => any;
  products?: {
    tentsAccessories?: {
      [name: string]: any;
    };
  };
}

function Icon({ open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={` ${open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Filter = ({
  activityProps,
  typeProps,
  sizeProps,
  collectionProps,
  brandProps,
  checkboxActivity,
  checkboxType,
  checkboxSize,
  checkboxCollection,
  checkboxBrend,
  checkedHandler,
  products,
}: FilterProps) => {
  const [activity, setActivity] = React.useState<boolean>(false);
  const [type, setType] = React.useState<boolean>(false);
  const [size, setSize] = React.useState<boolean>(false);
  const [collection, setCollection] = React.useState<boolean>(false);
  const [brand, setBrand] = React.useState<boolean>(false);
  const [width, setWidth] = React.useState(false);
  const sizeSlice = useSelector((state: RootState) => state.size.widthNav);

  React.useEffect(() => {
    Number(sizeSlice) > 768 ? setWidth(true) : setWidth(false);
  }, [sizeSlice]);

  const handleActivity = (_value: React.MouseEvent) => {
    setActivity((priv) => !priv);
    setType(false);
    setSize(false);
    setCollection(false);
    setBrand(false);
  };
  const handleType = (_value: React.MouseEvent) => {
    setType((priv) => !priv);
    setActivity(false);
    setSize(false);
    setCollection(false);
    setBrand(false);
  };
  const handleSize = (_value: React.MouseEvent) => {
    setSize((priv) => !priv);
    setActivity(false);
    setType(false);
    setCollection(false);
    setBrand(false);
  };
  const handleCollection = (_value: React.MouseEvent) => {
    setCollection((priv) => !priv);
    setActivity(false);
    setType(false);
    setSize(false);
    setBrand(false);
  };
  const handleBrand = (_value: React.MouseEvent) => {
    setBrand((priv) => !priv);
    setActivity(false);
    setType(false);
    setSize(false);
    setCollection(false);
  };

  return (
    <div className="px-[10%] py-[1%] border-y-[1px] border-[rgba(133,133,133,.2)] overflow-hidden">
      {width && (
        <div className="flex justify-between items-center border-b-[1px]">
          <div className="flex">
            <Typography className=" text-black uppercase">Filtres:</Typography>

            <div className="flex items-center">
              {activityProps && (
                <>
                  <Typography
                    onClick={handleActivity}
                    className="cursor-pointer uppercase ml-10"
                  >
                    activity
                  </Typography>
                  <Icon open={activity} />
                </>
              )}

              {typeProps && (
                <>
                  <Typography
                    onClick={handleType}
                    className="cursor-pointer uppercase ml-10"
                  >
                    type
                  </Typography>
                  <Icon open={type} />
                </>
              )}

              {sizeProps && (
                <>
                  <Typography
                    onClick={handleSize}
                    className="cursor-pointer uppercase ml-10"
                  >
                    size
                  </Typography>
                  <Icon open={size} />
                </>
              )}

              {collectionProps && (
                <>
                  <Typography
                    onClick={handleCollection}
                    className="cursor-pointer uppercase ml-10"
                  >
                    collection
                  </Typography>
                  <Icon open={collection} />
                </>
              )}
              {brandProps && (
                <>
                  <Typography
                    onClick={handleBrand}
                    className="cursor-pointer uppercase ml-10"
                  >
                    brand
                  </Typography>
                  <Icon open={brand} />
                </>
              )}
            </div>
          </div>
          <div>
            <Select
              className="border-none text-black"
              label="SORT BY"
              menuProps={{
                className: 'rounded-none',
              }}
              labelProps={{
                className: 'text-black after:border-none',
              }}
              arrow={false}
              variant="standard"
            >
              <Option className="rounded-none">ALL</Option>
              <Option className="rounded-none">NAME (A-Z)</Option>
              <Option className="rounded-none">NAME (Z-A)</Option>
              <Option className="rounded-none">LATEST</Option>
              <Option className="rounded-none">OLDEST</Option>
              <Option className="rounded-none">HIGHEST PRICE</Option>
              <Option className="rounded-none">LOWEST PRICE</Option>
            </Select>
          </div>
        </div>
      )}
      {activity && (
        <div className="pt-3 flex flex-wrap gap-5 border-t-[1px] border-[rgba(133,133,133,.2)]">
          {checkboxActivity?.map((activity) => (
            <div key={nanoid()}>
              <Checkbox
                className="h-5 w-5 rounded-none checked:bg-black border-black checked:border-black transition-all hover: hover:before:opacity-0 text-black"
                containerProps={{ className: 'rounded-none p-0 mr-2' }}
                labelProps={{
                  className: 'text-black font-normal',
                }}
                ripple={false}
                checked={activity.checked}
                label={activity.label}
                onChange={() => checkedHandler(activity.label)}
              />
            </div>
          ))}
        </div>
      )}
      {type && (
        <div className="pt-3 flex flex-wrap gap-5 border-t-[1px] border-[rgba(133,133,133,.2)]">
          {checkboxType?.map((type) => (
            <div key={nanoid()}>
              <Checkbox
                className=" h-5 w-5 rounded-none checked:bg-black border-black checked:border-black transition-all hover: hover:before:opacity-0 text-black"
                containerProps={{ className: 'rounded-none p-0 mr-2' }}
                labelProps={{
                  className: 'text-black font-normal',
                }}
                ripple={false}
                checked={type.checked}
                label={type.label}
                onChange={() => checkedHandler(type.label)}
              />
            </div>
          ))}
        </div>
      )}
      {size && (
        <div className="pt-3 flex flex-wrap gap-5 border-t-[1px] border-[rgba(133,133,133,.2)]">
          {checkboxSize?.map((size) => (
            <div key={nanoid()}>
              <Checkbox
                className=" h-5 w-5 rounded-none checked:bg-black border-black checked:border-black transition-all hover: hover:before:opacity-0 text-black"
                containerProps={{ className: 'rounded-none p-0 mr-2' }}
                labelProps={{
                  className: 'text-black font-normal',
                }}
                ripple={false}
                checked={size.checked}
                label={size.label}
                onChange={() => checkedHandler(size.label)}
              />
            </div>
          ))}
        </div>
      )}

      {collection && (
        <div className="pt-3 flex flex-wrap gap-5 border-t-[1px] border-[rgba(133,133,133,.2)]">
          {checkboxCollection?.map((collection) => (
            <div key={nanoid()}>
              <Checkbox
                className="h-5 w-5 rounded-none checked:bg-black border-black checked:border-black transition-all hover: hover:before:opacity-0 text-black"
                containerProps={{ className: 'rounded-none p-0 mr-2' }}
                labelProps={{
                  className: 'text-black font-normal',
                }}
                ripple={false}
                checked={collection.checked}
                label={collection.label}
                onChange={() => checkedHandler(collection.label)}
              />
            </div>
          ))}
        </div>
      )}

      {brand && (
        <div className="pt-3 flex flex-wrap gap-5 border-t-[1px] border-[rgba(133,133,133,.2)]">
          {checkboxBrend?.map((brend) => (
            <div key={nanoid()}>
              <Checkbox
                className="h-5 w-5 rounded-none checked:bg-black border-black checked:border-black transition-all hover: hover:before:opacity-0 text-black"
                containerProps={{ className: 'rounded-none p-0 mr-2' }}
                labelProps={{
                  className: 'text-black font-normal',
                }}
                ripple={false}
                checked={brend.checked}
                label={brend.label}
                onChange={() => checkedHandler(brend.label)}
              />
            </div>
          ))}
        </div>
      )}
      {Object.entries({ ...products }).length > 0 ? (
        <div className="flex flex-wrap md:justify-between justify-center gap-5 my-5">
          {products?.tentsAccessories?.map((product: any) => {
            return (
              <Card key={nanoid()} className="rounded-none cursor-pointer">
                <div className="md:max-w-[350px] w-full ">
                  <img
                    src={require(`../dammyDB/${product.mainImg[2]}`)}
                    alt="tent"
                    className="brightness-[95%]"
                  />
                  <img
                    className="absolute top-0 opacity-0 hover:opacity-100 transition-all brightness-[95%]"
                    src={require(`../dammyDB/${product.mainImg[3]}`)}
                    alt="tent"
                  />
                </div>
                <CardBody>
                  <Typography variant="h5" className="uppercase text-black">
                    {product.name}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-between capitalize  py-2">
                  <Typography>{product.type}</Typography>
                  <Typography className="text-black border-b-[1px] border-black">
                    € {product.price}, 00
                  </Typography>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="w-full flex justify-center py-[5%]">
          <Typography className="italic sm:text-2xl text-1xl">
            Sorry but the products is over
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Filter;