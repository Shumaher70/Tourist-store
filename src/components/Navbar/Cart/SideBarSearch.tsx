import { useDispatch } from 'react-redux';
import { toggleSearch } from '../../../store/redusers/sideBarReduser';

import { Card, Typography, Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SideBarSearch() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleSearch());
  };

  return (
    <Card
      className={`z-40 fixed w-[100%] rounded-none right-0 h-full $ sm:w-[40%]`}
    >
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
      <div className="p-2">
        <Input
          className="text-black"
          color="black"
          icon={<MagnifyingGlassIcon className="h-5 w-5 cursor-pointer" />}
          label="Search"
        />
      </div>
    </Card>
  );
}
