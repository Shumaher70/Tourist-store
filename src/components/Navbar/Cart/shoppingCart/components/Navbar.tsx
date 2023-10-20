import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="ring-1 ring-black/20">
         <nav className="max-w-[600px] m-auto p-6">
            <div className="flex justify-between items-center">
               <Link
                  className="flex justify-center items-center w-[150px] sm:w-[250px]"
                  to="/"
               >
                  <img src={require('../../../logo/logo.png')} alt="logo" />
               </Link>

               <Link to="/cart">
                  <BsBag className="h-5 w-5" />
               </Link>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
