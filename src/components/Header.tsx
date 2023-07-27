import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { RootState } from '../store/index';
import '../index.css';
import {
  Nav,
  SidebarStore,
  BgClose,
  BgCloseSearch,
  BgCloseCart,
  SideBarMagazine,
  SideBarCompany,
  SideBarSearch,
  SideBarCart,
} from './navbar/variablesHeader';

const Header = () => {
  const {
    toggleStore,
    toggleMagazine,
    toggleCompany,
    toggleSearch,
    toggleCart,
  } = useSelector((state: RootState) => state.sideBar);

  return (
    <header>
      {toggleCart && <BgCloseCart />}
      {toggleSearch && <BgCloseSearch />}
      {(toggleStore || toggleMagazine || toggleCompany) && <BgClose />}
      {toggleStore && <SidebarStore />}
      {toggleMagazine && <SideBarMagazine />}
      {toggleCompany && <SideBarCompany />}

      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
      {toggleCart && <SideBarCart />}
      {toggleSearch && <SideBarSearch />}
    </header>
  );
};

export default Header;
