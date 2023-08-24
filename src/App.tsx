import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {
  Colections,
  PageMissed,
  Zelte,
  CollabMaharishi,
  CarryeEssentials,
  TransitLine,
  HptSelected,
  TopSellerPage,
  LifetimeGuaranteePage,
  OnePercentPage,
  Dyecoshell,
  MagazineSectionHtpPage,
  MagazineSectionAdventurePage,
  MagazineSectionProductCallabsPage,
  InspirationSectionAboutusPage,
  ReStorePage,
  ContributionsPage,
  ContributionsSectionMaharishiPage,
  FootherHelpFaqsPage,
  FootherContactPage,
  FootherTentSizePage,
  FootherTarps,
} from './pages/index';
import FootherShippingPage from './pages/FootherShippingPage';

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
          <Route path="/pages/faq" element={<FootherHelpFaqsPage />} />
          <Route path="/pages/contact" element={<FootherContactPage />} />

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
          <Route path="/collections/tarps" element={<FootherTarps />} />

          <Route path="/pages/blog" element={<ContributionsPage />} />
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
          <Route
            path="/blogs/versand/versand"
            element={<FootherShippingPage />}
          />
          <Route
            path="/blogs/zelte/zeltgrossen"
            element={<FootherTentSizePage />}
          />

          <Route
            path="/blogs/collabs/maharishi-x-heimplanet-the-cave"
            element={<ContributionsSectionMaharishiPage />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
