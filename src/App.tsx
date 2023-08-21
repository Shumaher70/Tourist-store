import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Colections from './pages/Collections';
import PageMissed from './pages/pageMissed/PageMissed';
import Zelte from './pages/Zelte';
import CollabMaharishi from './pages/CollabMaharishi';
import CarryeEssentials from './pages/CarryeEssentials';
import TransitLine from './pages/TransitLine';
import HptSelected from './pages/HptSelected';
import './index.css';
import TopSellerPage from './pages/TopSellerPage';
import LifetimeGuaranteePage from './pages/LifetimeGuaranteePage';
import OnePercentPage from './pages/OnePercentPage';
import Dyecoshell from './pages/Dyecoshell';
import MagazineSectionHtpPage from './pages/MagazineSectionHtpPage';
import MagazineSectionAdventurePage from './pages/MagazineSectionAdventurePage';
import MagazineSectionProductCallabsPage from './pages/MagazineSectionProductCallabsPage';
import InspirationSectionAboutusPage from './pages/InspirationSectionAboutusPage';
import ReStorePage from './pages/ReStorePage';
import ContributionsPage from './pages/ContributionsPage';

const App = () => {
  return (
    <>
      <Header />
      <div className="pt-[1px]">
        <Routes>
          <Route path="*" element={<PageMissed />} />
          <Route path="/" element={<Main />} />
          <Route path="/pages" element={<PageMissed />} />
          <Route
            path="/pages/collab-maharishi-the-cave"
            element={<CollabMaharishi />}
          />
          <Route
            path="/pages/unternehmen-store"
            element={<InspirationSectionAboutusPage />}
          />
          <Route path="/pages/blog" element={<ContributionsPage />} />

          <Route path="/collections" element={<Colections />} />
          <Route path="/collections/zelte" element={<Zelte />} />
          <Route
            path="/collections/carry-essentials"
            element={<CarryeEssentials />}
          />
          <Route path="/collections/transit-line" element={<TransitLine />} />
          <Route path="/collections/hpt-selected" element={<HptSelected />} />
          <Route path="/collections/topseller" element={<TopSellerPage />} />
          <Route path="/collections/re-store" element={<ReStorePage />} />

          <Route
            path="/blogs/gourmet-camping"
            element={<MagazineSectionHtpPage />}
          />
          <Route
            path="/blogs/abenteuer"
            element={<MagazineSectionAdventurePage />}
          />
          <Route
            path="/blogs/collabs"
            element={<MagazineSectionProductCallabsPage />}
          />
          <Route
            path="/blogs/projekte/lebenslanger-support-garantie"
            element={<LifetimeGuaranteePage />}
          />
          <Route
            path="/blogs/projekte/1-for-the-planet"
            element={<OnePercentPage />}
          />

          <Route
            path="/blogs/designraum/dyecoshell™"
            element={<Dyecoshell />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
