import { useDispatch } from 'react-redux';
import { toggleSearch } from '../../../store/redusers/sideBarReduser';

import { Card, Typography, Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { productCard } from '../../../dammyDB/dammyProducts';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';

export default function SideBarSearch() {
   const dispatch = useDispatch();

   const [filter, setFilter] = useState([
      { mainImg1: '', mainImg2: '', title: '', type: '', price: '', src: '' },
   ]);
   const [inputValue, setInputValue] = useState('');

   useEffect(() => {
      const filter =
         inputValue.length > 0
            ? productCard.filter(
                 (item) =>
                    item.title.includes(inputValue.toLowerCase()) ||
                    item.type.includes(inputValue.toLowerCase())
              )
            : [];

      setFilter(filter);
   }, [inputValue]);

   const clickHandler = () => {
      dispatch(toggleSearch());
   };

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   return (
      <Card
         className={`z-40 fixed w-[100%] rounded-none right-0 h-full xl:w-[30%] lg:w-[40%] md:w-[50%] overflow-y-auto`}
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
               onChange={changeHandler}
               label="Search"
               value={inputValue}
            />
         </div>

         {inputValue.length > 0 && (
            <div className="flex flex-col px-[10%]">
               {filter.map((product) => (
                  <Link
                     key={nanoid()}
                     to={`${product.src}`}
                     className="flex gap-5 mt-5"
                  >
                     <div className="basis-[60%]">
                        <img
                           src={require(`../../../dammyDB/${product.mainImg2}`)}
                           alt={`${product.mainImg2}`}
                           className="w-full h-full object-cover brightness-95"
                        />
                     </div>
                     <div className="w-full">
                        <Typography className="text-lg text-black font-bold">
                           {product.title}
                        </Typography>
                        <Typography className="underline">
                           €{product.price},00
                        </Typography>
                     </div>
                  </Link>
               ))}
            </div>
         )}
      </Card>
   );
}
