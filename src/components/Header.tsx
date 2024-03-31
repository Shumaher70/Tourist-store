import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hiddeAction } from '../store/redusers/mobailNavAccordionReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import '../index.css';
import ToggleNav from './ToggleNav';
import BgCloseCart from './navbar/cart/BgCloseCart';
import BgCloseSearch from './navbar/cart/BgCloseSearch';
import BgClose from './navbar/info/BgCloseInfo';
import SidebarStore from './navbar/info/sideBarStore/SidebarStore';
import SidebarProduct from './navbar/info/sideBarStore/SidebarProduct';
import SidebarHptSelected from './navbar/info/sideBarStore/SidebarHptSelected';
import SidebarReStore from './navbar/info/sideBarStore/SidebarReStore';
import SideBarMagazine from './navbar/info/sideBarMagazine/SideBarMagazine';
import SideBarCompany from './navbar/info/sideBarCompany/SideBarCompany';
import SidebarAboutUs from './navbar/info/sideBarCompany/SidebarAboutUs';
import SidebarSustainAbility from './navbar/info/sideBarCompany/SidebarSustainAbility';
import SidebarDisignSpace from './navbar/info/sideBarCompany/SidebarDisignSpace';
import NavMobail from './navbar/NavMobail';
import SideBarCart from './navbar/cart/SideBarCart';
import SideBarSearch from './navbar/cart/SideBarSearch';
import Nav from './navbar/Nav';

const Header = () => {
   const dispatch = useDispatch();
   const toggleSlice = useSelector((state: RootState) => state.acardion.toggle);
   const widthSlice = useSelector((state: RootState) => state.size.widthNav);
   const [InititalWidth, setInititalWidth] = useState(false);
   const {
      toggleStore,
      sidebarStoreProduct,
      sidebarStoreHptSelected,
      sidebarStoreReStore,
      toggleMagazine,
      toggleCompany,
      sidebarleCompanyAboutUs,
      sidebarleCompanySustainAbility,
      sidebarleCompanyDisignSpace,
      toggleSearch,
      toggleCart,
   } = useSelector((state: RootState) => state.sideBar);

   useEffect(() => {
      if (+widthSlice < 768) {
         setInititalWidth(true);
      } else {
         setInititalWidth(false);
         dispatch(hiddeAction());
      }
   }, [widthSlice, dispatch, toggleSlice]);

   return (
      <header>
         {InititalWidth && <ToggleNav />}
         {toggleCart && <BgCloseCart />}
         {toggleSearch && <BgCloseSearch />}
         {(toggleStore || toggleMagazine || toggleCompany) && <BgClose />}
         {toggleStore && <SidebarStore />}
         {toggleStore && sidebarStoreProduct && <SidebarProduct />}
         {toggleStore && sidebarStoreHptSelected && <SidebarHptSelected />}
         {toggleStore && sidebarStoreReStore && <SidebarReStore />}
         {toggleMagazine && <SideBarMagazine />}
         {toggleCompany && <SideBarCompany />}
         {toggleCompany && sidebarleCompanyAboutUs && <SidebarAboutUs />}
         {toggleCompany && sidebarleCompanySustainAbility && (
            <SidebarSustainAbility />
         )}
         {toggleCompany && sidebarleCompanyDisignSpace && (
            <SidebarDisignSpace />
         )}
         <Nav />
         {InititalWidth && toggleSlice && <NavMobail />}
         <SideBarCart />
         <SideBarSearch />
      </header>
   );
};

export default Header;
