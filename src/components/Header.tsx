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
} from './variables';

const Header = () => {
  const {
    toggleStore,
    toggleMagazine,
    toggleCompany,
    toggleSearch,
    toggleCart,
  } = useSelector((state: RootState) => state.sideBar);

  return (
    <>
      {toggleCart && <BgCloseCart />}
      {toggleSearch && <BgCloseSearch />}
      {(toggleStore || toggleMagazine || toggleCompany) && <BgClose />}
      <SidebarStore />
      <SideBarMagazine />
      <SideBarCompany />
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
      <SideBarSearch />
      <SideBarCart />
    </>
  );
};

export default Header;
