import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hiddeAction } from '../store/redusers/mobailNavAccordionReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import '../index.css';
import {
   Nav,
   BgClose,
   BgCloseSearch,
   BgCloseCart,
   SideBarCompany,
   SidebarAboutUs,
   SidebarSustainAbility,
   SidebarDisignSpace,
   SideBarMagazine,
   SidebarStore,
   SidebarProduct,
   SidebarHptSelected,
   SidebarReStore,
   SideBarSearch,
   SideBarCart,
   ToggleNav,
   NavMobail,
} from './index';

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
         {toggleCart && <SideBarCart />}
         <SideBarSearch />
      </header>
   );
};

export default Header;
