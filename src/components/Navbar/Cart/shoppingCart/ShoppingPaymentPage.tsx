import Navbar from './components/Navbar';
import Payment from './components/Payment';
import OrderSummery from './components/orderSummery/OrderSummery';

const ShoppingPaymentPage = () => {
   return (
      <div className="w-screen">
         <Navbar />
         <OrderSummery className="bg-black/10" />
         <Payment />
      </div>
   );
};

export default ShoppingPaymentPage;
