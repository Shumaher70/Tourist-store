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
      <ToggleNav />
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
      <Nav />
      {toggleCart && <SideBarCart />}
      {toggleSearch && <SideBarSearch />}
    </header>
  );
};

export default Header;
