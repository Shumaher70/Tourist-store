import Navbar from './components/Navbar';
import OrderSummery from './components/orderSummery/OrderSummery';

const ShoppingPaymentPage = () => {
   return (
      <div className="w-screen">
         <Navbar />
         <OrderSummery />
      </div>
   );
};

export default ShoppingPaymentPage;
