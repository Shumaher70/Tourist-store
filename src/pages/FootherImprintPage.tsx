import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@material-tailwind/react';

const FootherImprintPage = () => {
  const heightNav = useSelector((state: RootState) => state.size.heightNav);
  return (
    <div style={{ paddingTop: `${heightNav}px` }}>
      <div className="px-[20%] py-[5%]">
        <Typography variant="h1">IMPRINT</Typography>
        <Typography className="font-bold mt-10">
          Legal identification of the website operator:
        </Typography>
        <div className="mt-5">
          <Typography>Heimplanet Entwicklungs GmbH</Typography>
          <Typography>
            Represented by the Managing Director Stefan Schulze Dieckhoff,
            Stefan Clauss
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>Shanghaiallee 21</Typography>
          <Typography>20457 Hamburg</Typography>
          <Typography>Germany</Typography>
        </div>

        <div className="mt-5">
          <Typography>Phone: 040 9999955 00</Typography>
          <Typography>E-mail: info@heimplanet.com</Typography>
        </div>

        <div className="mt-5">
          <Typography>Sales tax no.: DE271336439</Typography>
          <Typography>
            Registered in the Commercial Register of the Hamburg District Court
          </Typography>
          <Typography>
            Commercial register number - Part B of the Commercial Register - B
            113000
          </Typography>
        </div>

        <div className="mt-5">
          <Typography>Alternative Dispute Resolution:</Typography>
        </div>

        <div className="mt-5">
          <Typography>
            The European Commission provides a platform for the out-of-court
            settlement of disputes (ODR platform), which can be accessed at
            https://ec.europa.eu/odr.
          </Typography>
        </div>
        <div className="mt-5">
          <Typography>
            We have been a member of the "FairCommerce" initiative since
            26.10.2016.
          </Typography>
        </div>
        <div className="mt-5">
          <Typography>Further information at: www.fair-commerce.de</Typography>
        </div>
        <div className="mt-5">
          <Typography>Design + implementation of the website:</Typography>
          <Typography>Halbstark GmbH - www.halbstark.de</Typography>
        </div>
      </div>
    </div>
  );
};

export default FootherImprintPage;
