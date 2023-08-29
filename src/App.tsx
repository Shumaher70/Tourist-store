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
  FootherTarpsPage,
  FootherShippingPage,
  ContributionsAdventuresPage,
  ContributionsOurTipsPage,
  ContributionsCampingPage,
  FootherGearPage,
  FootherCareerPage,
  FootherPreesContactPage,
  FootherAffiliatePage,
  FootherNewsletterPage,
  FootherImprintPage,
  FootherAgbPage,
  FootherPrivacyPolicy,
  FootherRevocationPage,
  ShopFinderPage,
  RegisterPage,
} from './pages/index';

const App = () => {
  return (
    <>
      <Header />
      <div className="pt-[1px]">
        <Routes>
          <Route path="*" element={<PageMissed />} />
          <Route path="/" element={<Main />} />

          <Route path="/pages" element={<PageMissed />} />
          <Route path="/pages/shopfinder" element={<ShopFinderPage />} />
          <Route
            path="/pages/collab-maharishi-the-cave"
            element={<CollabMaharishi />}
          />
          <Route
            path="/pages/unternehmen-store"
            element={<InspirationSectionAboutusPage />}
          />
          <Route path="/pages/karriere" element={<FootherCareerPage />} />
          <Route path="/pages/faq" element={<FootherHelpFaqsPage />} />
          <Route path="/pages/contact" element={<FootherContactPage />} />
          <Route path="/pages/newsletter" element={<FootherNewsletterPage />} />
          <Route path="/pages/impressum" element={<FootherImprintPage />} />
          <Route path="/pages/agb" element={<FootherAgbPage />} />
          <Route path="/pages/datenschutz" element={<FootherPrivacyPolicy />} />
          <Route path="/pages/widerruf" element={<FootherRevocationPage />} />
          <Route path="/pages/register" element={<RegisterPage />} />

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
          <Route path="/collections/tarps" element={<FootherTarpsPage />} />
          <Route path="/collections/gear" element={<FootherGearPage />} />

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
          <Route
            path="/blogs/abenteuer/sup-abenteuer-direkt-vor-der-haustur"
            element={<ContributionsAdventuresPage />}
          />
          <Route
            path="/blogs/abenteuer/unsere-tipps-fur-reisen-mit-leichtem-gepack"
            element={<ContributionsOurTipsPage />}
          />
          <Route
            path="/blogs/abenteuer/camping-in-deutschland"
            element={<ContributionsCampingPage />}
          />
          <Route
            path="/blogs/unternehmen/pressekontakt"
            element={<FootherPreesContactPage />}
          />
          <Route
            path="/blogs/unternehmen/affiliate-partner-programm"
            element={<FootherAffiliatePage />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
