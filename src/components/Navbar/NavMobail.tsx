import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {
  shopAction,
  productsAction,
  hptSelectedAction,
  reStoreAction,
  magazineAction,
  companyAction,
  aboutUsAction,
  sustainabilityAction,
  disignSpaceAction,
} from '../../store/redusers/mobailNavAccordionReducer';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  ListItem,
} from '@material-tailwind/react';

interface IconProps {
  open: boolean;
}

function Icon({ open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const NavMobail = () => {
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
  const dispatch = useDispatch();
  const {
    shop,
    products,
    hptSelected,
    reStore,
    magazine,
    company,
    aboutUs,
    sustainability,
    disignSpace,
  } = useSelector((state: RootState) => state.acardion);

  const shopHandler = () => dispatch(shopAction());
  const productsHandler = () => dispatch(productsAction());
  const hptSelectedHandler = () => dispatch(hptSelectedAction());
  const reStoreHandler = () => dispatch(reStoreAction());
  const magazineHandler = () => dispatch(magazineAction());
  const companyHandler = () => dispatch(companyAction());
  const aboutUsHandler = () => dispatch(aboutUsAction());
  const sustainabilityHandler = () => dispatch(sustainabilityAction());
  const disignSpaceHandler = () => dispatch(disignSpaceAction());

  return (
    <div
      style={{
        position: 'fixed',
        top: `${sizeSlice}px`,
        width: '100%',
        height: '100%',
        zIndex: '30',
        overflowY: 'auto',
      }}
    >
      <div className="w-full h-full bg-white z-30">
        <Accordion open={shop} icon={<Icon open={shop} />}>
          <AccordionHeader
            className="px-[10%] bg-white text-black font-normal"
            onClick={() => shopHandler()}
          >
            Shop
          </AccordionHeader>
          <AccordionBody className="bg-[#f6f6f6] px-[10%]">
            <Accordion open={products} icon={<Icon open={products} />}>
              <AccordionHeader
                className="text-black font-normal uppercase"
                onClick={() => productsHandler()}
              >
                PRODUCTS
              </AccordionHeader>
              <AccordionBody className="text-black">
                <ListItem className="rounded-none">
                  Tents & Accessories
                </ListItem>
                <ListItem className="rounded-none">Tarps</ListItem>
                <ListItem className="rounded-none">Bags</ListItem>
                <ListItem className="rounded-none">Apparel</ListItem>
                <ListItem className="rounded-none">Gear</ListItem>
                <ListItem className="rounded-none">All products</ListItem>
              </AccordionBody>
            </Accordion>

            <Accordion open={hptSelected} icon={<Icon open={hptSelected} />}>
              <AccordionHeader
                className="text-black font-normal uppercase"
                onClick={() => hptSelectedHandler()}
              >
                HPT SELECTED
              </AccordionHeader>
              <AccordionBody>
                <ListItem className="rounded-none">Knives & Equipment</ListItem>
                <ListItem className="rounded-none">Camping furniture</ListItem>
                <ListItem className="rounded-none">Cooking</ListItem>
                <ListItem className="rounded-none">Sleeping</ListItem>
                <ListItem className="rounded-none">Hygiene</ListItem>
                <ListItem className="rounded-none">All products</ListItem>
              </AccordionBody>
            </Accordion>

            <Accordion open={reStore} icon={<Icon open={reStore} />}>
              <AccordionHeader
                className="text-black font-normal uppercase"
                onClick={() => reStoreHandler()}
              >
                RE:STORE
              </AccordionHeader>
              <AccordionBody>
                <ListItem className="rounded-none">Learn more</ListItem>
                <ListItem className="rounded-none">All products</ListItem>
              </AccordionBody>
            </Accordion>
          </AccordionBody>
        </Accordion>

        <Accordion open={magazine} icon={<Icon open={magazine} />}>
          <AccordionHeader
            className="px-[10%] bg-white text-black font-normal"
            onClick={() => magazineHandler()}
          >
            Magazine
          </AccordionHeader>
          <AccordionBody className="text-black bg-[#f6f6f6] px-[10%]">
            <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
              Overview
            </ListItem>
            <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
              Adventure
            </ListItem>
            <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
              Collaborations
            </ListItem>
            <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
              HPT Gourmet Camping
            </ListItem>
            <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
              Ambassadors
            </ListItem>
          </AccordionBody>
        </Accordion>

        <Accordion open={company} icon={<Icon open={company} />}>
          <AccordionHeader
            className="px-[10%] bg-white text-black font-normal"
            onClick={() => companyHandler()}
          >
            Company
          </AccordionHeader>
          <AccordionBody className="bg-[#f6f6f6] px-[10%]">
            <Accordion open={aboutUs} icon={<Icon open={aboutUs} />}>
              <AccordionHeader
                className="text-black font-normal uppercase"
                onClick={() => aboutUsHandler()}
              >
                ABOUT US
              </AccordionHeader>
              <AccordionBody className="text-black">
                <ListItem className="rounded-none">Our history</ListItem>
                <ListItem className="rounded-none">HPT - Hamburg</ListItem>
                <ListItem className="rounded-none">Career / Jobs</ListItem>
              </AccordionBody>
            </Accordion>

            <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
              Career
            </ListItem>

            <Accordion
              open={sustainability}
              icon={<Icon open={sustainability} />}
            >
              <AccordionHeader
                className="text-black font-normal uppercase"
                onClick={() => sustainabilityHandler()}
              >
                Sustainability
              </AccordionHeader>
              <AccordionBody>
                <ListItem className="rounded-none">1% for the Planet</ListItem>
                <ListItem className="rounded-none">Lifetime warranty</ListItem>
                <ListItem className="rounded-none">Re-Store Program</ListItem>
                <ListItem className="rounded-none">Dyecoshell</ListItem>
              </AccordionBody>
            </Accordion>

            <Accordion open={disignSpace} icon={<Icon open={disignSpace} />}>
              <AccordionHeader
                className="text-black font-normal uppercase"
                onClick={() => disignSpaceHandler()}
              >
                Design space
              </AccordionHeader>
              <AccordionBody>
                <ListItem className="rounded-none">Tent technology</ListItem>
                <ListItem className="rounded-none uppercase">
                  DYECOSHELL™
                </ListItem>
                <ListItem className="rounded-none uppercase">
                  COOLEVER TECHNOLOGY
                </ListItem>
                <ListItem className="rounded-none">All products</ListItem>
              </AccordionBody>
            </Accordion>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default NavMobail;
