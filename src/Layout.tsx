import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

interface LyaoutProps {
   children?: React.ReactNode;
}

const Layout: React.FC<LyaoutProps> = ({ children }) => {
   return (
      <>
         <Header />
         <div className="pt-[1px]">{children}</div>
         <Outlet />
         <Footer />
      </>
   );
};

export default Layout;
