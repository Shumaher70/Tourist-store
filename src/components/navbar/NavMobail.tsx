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
   hiddeAction,
} from '../../store/redusers/mobailNavAccordionReducer';
import {
   Accordion,
   AccordionHeader,
   AccordionBody,
   ListItem,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

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
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/zelte"
                        >
                           <ListItem className="rounded-none">
                              Tents & Accessories
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/tarps"
                        >
                           <ListItem className="rounded-none">Tarps</ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/carry-essentials"
                        >
                           <ListItem className="rounded-none">Bags</ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/carry-essentials"
                        >
                           <ListItem className="rounded-none">Apparel</ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/gear"
                        >
                           <ListItem className="rounded-none">Gear</ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/all-products"
                        >
                           <ListItem className="rounded-none">
                              All products
                           </ListItem>
                        </Link>
                     </AccordionBody>
                  </Accordion>

                  <Accordion
                     open={hptSelected}
                     icon={<Icon open={hptSelected} />}
                  >
                     <AccordionHeader
                        className="text-black font-normal uppercase"
                        onClick={() => hptSelectedHandler()}
                     >
                        HPT SELECTED
                     </AccordionHeader>
                     <AccordionBody>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/knives"
                        >
                           <ListItem className="rounded-none">
                              Knives & Equipment
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/camping-furniture"
                        >
                           <ListItem className="rounded-none">
                              Camping furniture
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/cooking"
                        >
                           <ListItem className="rounded-none">Cooking</ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/sleeping"
                        >
                           <ListItem className="rounded-none">
                              Sleeping
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/hygiene"
                        >
                           <ListItem className="rounded-none">Hygiene</ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/hpt-selected"
                        >
                           <ListItem className="rounded-none">
                              All products
                           </ListItem>
                        </Link>
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
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/re-store"
                        >
                           <ListItem className="rounded-none">
                              Learn more
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/all-products"
                        >
                           <ListItem className="rounded-none">
                              All products
                           </ListItem>
                        </Link>
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
                  <Link
                     onClick={() => {
                        dispatch(hiddeAction());
                        window.scrollTo(0, 0);
                     }}
                     to="/pages/blog"
                  >
                     <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
                        Overview
                     </ListItem>
                  </Link>
                  <Link
                     onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(hiddeAction());
                     }}
                     to="/blogs/abenteuer"
                  >
                     <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
                        Adventure
                     </ListItem>
                  </Link>
                  <Link
                     onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(hiddeAction());
                     }}
                     to="/blogs/collabs"
                  >
                     <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
                        Collaborations
                     </ListItem>
                  </Link>
                  <Link
                     onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(hiddeAction());
                     }}
                     to="/blogs/projekte"
                  >
                     <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
                        Projects
                     </ListItem>
                  </Link>
                  <Link
                     onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(hiddeAction());
                     }}
                     to="/blogs/gourmet-camping"
                  >
                     <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
                        HPT Gourmet Camping
                     </ListItem>
                  </Link>
                  <Link
                     onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(hiddeAction());
                     }}
                     to="/pages/ambassador"
                  >
                     <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
                        Ambassadors
                     </ListItem>
                  </Link>
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
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/pages/unternehmen-store"
                        >
                           <ListItem className="rounded-none">
                              Our history
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/pages/unternehmen-store"
                        >
                           <ListItem className="rounded-none">
                              HPT - Hamburg
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/pages/karriere"
                        >
                           <ListItem className="rounded-none">
                              Career / Jobs
                           </ListItem>
                        </Link>
                     </AccordionBody>
                  </Accordion>

                  <Link
                     onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(hiddeAction());
                     }}
                     to="/pages/karriere"
                  >
                     <ListItem className="rounded-none pl-0 py-4 border-b border-b-blue-gray-100 text-xl text-black font-normal uppercase">
                        Career
                     </ListItem>
                  </Link>

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
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/blogs/projekte/1-for-the-planet"
                        >
                           <ListItem className="rounded-none">
                              1% for the Planet
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/blogs/projekte/lebenslanger-support-garantie"
                        >
                           <ListItem className="rounded-none">
                              Lifetime warranty
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/collections/re-store"
                        >
                           <ListItem className="rounded-none">
                              Re-Store Program
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/blogs/designraum/dyecoshell™"
                        >
                           <ListItem className="rounded-none">
                              Dyecoshell
                           </ListItem>
                        </Link>
                     </AccordionBody>
                  </Accordion>

                  <Accordion
                     open={disignSpace}
                     icon={<Icon open={disignSpace} />}
                  >
                     <AccordionHeader
                        className="text-black font-normal uppercase"
                        onClick={() => disignSpaceHandler()}
                     >
                        Design space
                     </AccordionHeader>
                     <AccordionBody>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/blogs/designraum/zelttechnik"
                        >
                           <ListItem className="rounded-none">
                              Tent technology
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/blogs/designraum/dyecoshell™"
                        >
                           <ListItem className="rounded-none uppercase">
                              DYECOSHELL™
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/blogs/designraum/coolever-technologie"
                        >
                           <ListItem className="rounded-none uppercase">
                              COOLEVER TECHNOLOGY
                           </ListItem>
                        </Link>
                        <Link
                           onClick={() => {
                              window.scrollTo(0, 0);
                              dispatch(hiddeAction());
                           }}
                           to="/blogs/designraum"
                        >
                           <ListItem className="rounded-none">
                              All products
                           </ListItem>
                        </Link>
                     </AccordionBody>
                  </Accordion>
               </AccordionBody>
            </Accordion>
         </div>
      </div>
   );
};

export default NavMobail;
