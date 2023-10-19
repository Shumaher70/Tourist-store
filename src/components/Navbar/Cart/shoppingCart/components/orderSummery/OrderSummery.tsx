import AnimateHeight from 'react-animate-height';
import ShowHideOrder from './components/ShowHideOrder';
import SingleCart from './components/SingleCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Discount from './components/Discount';
import Subtotal from './components/Subtotal';
import Shipping from './components/Shipping';
import TotalPrice from './components/TotalPrice';

const OrderSummery = () => {
   const productSlice = useSelector((state: RootState) => state.cart.products);
   const [show, setShow] = useState(false);
   const clickHandler = (e: boolean) => {
      setShow(e);
   };

   return (
      <div className="w-full bg-black/10 p-5">
         <AnimateHeight
            id="example-panel"
            duration={500}
            className="max-w-[600px] m-auto "
            height={show ? 'auto' : 30}
         >
            <ShowHideOrder clickHandler={clickHandler} />
            <div className="flex flex-col gap-3 border-t-[1px]  mt-5 border-black/20 py-5">
               {productSlice.map((product) => (
                  <SingleCart
                     key={nanoid()}
                     totalPrice={product.totalPriceProduct}
                     img={product.mainImg}
                     title={product.title}
                     quantity={product.quantity}
                  />
               ))}
            </div>
            <Discount />
            <Subtotal className="mt-5" />
            <Shipping />
            <TotalPrice />
         </AnimateHeight>
      </div>
   );
};

export default OrderSummery;
