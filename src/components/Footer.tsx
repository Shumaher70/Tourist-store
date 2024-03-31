import FooterCookies from './footer/FooterCookies';
import FooterGarantee from './footer/FooterGarantee';
import FooterInfo from './footer/FooterInfo';
import FooterPayment from './footer/footerPayment/FooterPayment';

const Footer = () => {
   return (
      <footer>
         <FooterGarantee />
         <FooterInfo />
         <FooterPayment />
         <FooterCookies />
      </footer>
   );
};

export default Footer;
