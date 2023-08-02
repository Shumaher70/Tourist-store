import {
  FooterGarantee,
  FooterInfo,
  FooterPayment,
  FooterCookies,
} from './footer/varivlesFooter';

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
