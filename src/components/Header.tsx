import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
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
} from './navbar/variablesHeader';

const Header = () => {
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

  return (
    <header>
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
      {toggleCompany && sidebarleCompanyDisignSpace && <SidebarDisignSpace />}

      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
      {toggleCart && <SideBarCart />}
      {toggleSearch && <SideBarSearch />}
    </header>
  );
};

export default Header;
