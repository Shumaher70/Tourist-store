import { useDispatch } from 'react-redux';
import { Card, Typography } from '@material-tailwind/react';

import { toggleCart } from '../../../store/redusers/sideBarReduser';

const SideBarCart = () => {
  const dispatch = useDispatch();

  const clickHandler = () => dispatch(toggleCart());

  return (
    <Card className="z-20 fixed right-0 h-full rounded-none w-[100%] sm:w-[40%]">
      <div className="mb-2 flex justify-between items-center gap-4 p-4">
        <Typography variant="h5" color="blue-gray">
          Search
        </Typography>
        <svg
          onClick={clickHandler}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <Typography colorl="black" variant="paragraph">
        No items in shopping cart
      </Typography>
    </Card>
  );
};

export default SideBarCart;
