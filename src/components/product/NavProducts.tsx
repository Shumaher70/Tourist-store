import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

interface NavProductsProps {
   className?: string;
   content?: {
      [key: string]: string;
   }[];
}

const NavProducts = ({ className, content }: NavProductsProps) => {
   const navHeight = useSelector((state: RootState) => state.size.heightNav);

   return (
      <div
         style={{
            paddingTop: `${navHeight}px`,
            borderBottom: '1px solid #f6f6f6',
         }}
      >
         <div className={`flex gap-2 pl-[10%] py-2 ${className}`}>
            {content?.map((item) => {
               return (
                  <div
                     key={nanoid()}
                     className="flex text-gray-600 last:text-gray-900 hover:text-gray-900 after:content-link last:after:content-[''] after:pl-2 after:opacity-100 "
                  >
                     <NavLink
                        onClick={() => window.scrollTo(0, 0)}
                        to={item.link}
                     >
                        {item.title}
                     </NavLink>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default NavProducts;
