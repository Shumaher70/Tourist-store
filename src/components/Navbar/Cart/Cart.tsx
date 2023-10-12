import { useDispatch } from 'react-redux';
import { toggleCart } from '../../../store/redusers/sideBarReduser';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const Cart = () => {
   const dispatch = useDispatch();
   const productSelector = useSelector(
      (state: RootState) => state.cart.totalQuantity
   );

   const clickHanlder = () => dispatch(toggleCart());

   return (
      <div onClick={clickHanlder} className="relative cursor-pointer ">
         <span className="flex justify-center items-center rounded-[50%]  w-[20px] h-[20px] text-center text-white bg-black absolute text-xs top-3.5 right-2 ">
            {productSelector}
         </span>
         <svg
            height="26"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M9.48326 18.9648H17.7046L17.0784 6.93713H9.48326H1.87915L1.25293 18.9648H9.48326Z"
               stroke="#1D1D1B"
               strokeWidth="1.3419"
               strokeMiterlimit="10"
            />
            <path
               d="M5.36873 6.93718V5.73171C5.34279 5.17264 5.4299 4.6141 5.62477 4.08985C5.81965 3.56561 6.11824 3.08656 6.50251 2.6817C6.88677 2.27683 7.34871 1.95455 7.86038 1.73436C8.37206 1.51417 8.92284 1.40063 9.47939 1.40063C10.036 1.40063 10.5867 1.51417 11.0984 1.73436C11.6101 1.95455 12.072 2.27683 12.4563 2.6817C12.8405 3.08656 13.1391 3.56561 13.334 4.08985C13.5289 4.6141 13.616 5.17264 13.5901 5.73171V6.93718"
               stroke="#1D1D1B"
               strokeWidth="1.3419"
               strokeMiterlimit="10"
            />
         </svg>
      </div>
   );
};

export default Cart;
