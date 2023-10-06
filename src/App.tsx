import { Routes, Route } from 'react-router-dom';
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
   AllProducts,
   KnivesPage,
   CampingFurniturePage,
   CookingPage,
   SleepingPage,
   HygienePage,
   TentsFistalClassic,
   ProjectePage,
   AmbassadorsPage,
   MagazineNavBlogMavericksTour,
   MagazineNavBlogPilgrimageInEasternTibet,
   HptStoreHamburgPage,
   TentTechnologyPage,
   CooleverTechnologyPage,
   DesignSpacePage,
   GreatMakeoverPage,
   NewTentKirraPage,
   HelmplanetX66NorthPage,
} from './pages/index';
import TrapsDawnMTTrapGray from './pages/products/TrapsDawnMTTrapGray';
import BagsTransitLineSlingPocket from './pages/products/BagsTransitLineSlingPocket';
import GearHptXMizuCairoGrid750MlSilverWhite from './pages/products/GearHptXMizuCairoGrid750MlSilverWhite';
import HptKniveJamesBrandTheElko from './pages/products/HptKniveJamesBrandTheElko';
import HptHelinoxTacticalChairOne from './pages/products/HptHelinoxTacticalChairOne';
import HptSleepingThermarestNeoairXlite from './pages/products/HptSleepingThermarestNeoairXlite';
import HpthygieneBasicNatureFirstAidKitStandart from './pages/products/HpthygieneBasicNatureFirstAidKitStandart';
import GiftCard from './pages/products/GiftCard';
import HptSotoStormbreaker from './pages/products/HptSotoStormbreaker';
import Layout from './Layout';

const App = () => {
   return (
      <>
         <Routes>
            <Route element={<Layout />}>
               <Route path="/" element={<Main />} />
               <Route path="*" element={<PageMissed />} />

               <Route path="/pages" element={<PageMissed />} />

               <Route path="/pages/blog" element={<ContributionsPage />} />

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
               <Route
                  path="/pages/newsletter"
                  element={<FootherNewsletterPage />}
               />
               <Route
                  path="/pages/impressum"
                  element={<FootherImprintPage />}
               />
               <Route path="/pages/agb" element={<FootherAgbPage />} />
               <Route
                  path="/pages/datenschutz"
                  element={<FootherPrivacyPolicy />}
               />
               <Route
                  path="/pages/widerruf"
                  element={<FootherRevocationPage />}
               />
               <Route path="/pages/register" element={<RegisterPage />} />
               <Route path="/pages/ambassador" element={<AmbassadorsPage />} />

               <Route path="/collections" element={<Colections />} />
               <Route path="/collections/zelte" element={<Zelte />} />
               <Route
                  path="/collections/carry-essentials"
                  element={<CarryeEssentials />}
               />
               <Route
                  path="/collections/transit-line"
                  element={<TransitLine />}
               />
               <Route
                  path="/collections/hpt-selected"
                  element={<HptSelected />}
               />
               <Route
                  path="/collections/topseller"
                  element={<TopSellerPage />}
               />
               <Route path="/collections/re-store" element={<ReStorePage />} />
               <Route
                  path="/collections/tarps"
                  element={<FootherTarpsPage />}
               />
               <Route path="/collections/gear" element={<FootherGearPage />} />
               <Route path="/collections/knives" element={<KnivesPage />} />
               <Route
                  path="/collections/camping-furniture"
                  element={<CampingFurniturePage />}
               />
               <Route path="/collections/cooking" element={<CookingPage />} />
               <Route path="/collections/sleeping" element={<SleepingPage />} />
               <Route path="/collections/hygiene" element={<HygienePage />} />

               <Route
                  path="/collections/all-products"
                  element={<AllProducts />}
               />

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
               <Route path="/blogs/projekte" element={<ProjectePage />} />
               <Route
                  path="/blogs/projekte/lebenslanger-support-garantie"
                  element={<LifetimeGuaranteePage />}
               />
               <Route
                  path="/blogs/projekte/1-for-the-planet"
                  element={<OnePercentPage />}
               />

               <Route path="/blogs/designraum" element={<DesignSpacePage />} />
               <Route
                  path="/blogs/designraum/dyecoshell™"
                  element={<Dyecoshell />}
               />
               <Route
                  path="/blogs/designraum/zelttechnik"
                  element={<TentTechnologyPage />}
               />
               <Route
                  path="/blogs/designraum/coolever-technologie"
                  element={<CooleverTechnologyPage />}
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
                  path="/blogs/abenteuer/mavericks-eishockey-tour"
                  element={<MagazineNavBlogMavericksTour />}
               />
               <Route
                  path="/blogs/abenteuer/auf-pilgerreise-in-osttibet"
                  element={<MagazineNavBlogPilgrimageInEasternTibet />}
               />
               <Route
                  path="/blogs/unternehmen/pressekontakt"
                  element={<FootherPreesContactPage />}
               />
               <Route
                  path="/blogs/unternehmen/affiliate-partner-programm"
                  element={<FootherAffiliatePage />}
               />
               <Route
                  path="/blogs/unternehmen/hpt-store-hamburg"
                  element={<HptStoreHamburgPage />}
               />

               <Route
                  path="/products/fistral-classic"
                  element={<TentsFistalClassic />}
               />
               <Route
                  path="/products/dawn-m-tarp-grey"
                  element={<TrapsDawnMTTrapGray />}
               />
               <Route
                  path="/products/transit-line-sling-pocket"
                  element={<BagsTransitLineSlingPocket />}
               />
               <Route
                  path="/products/hpt-x-mizu-cairo-grid-750-ml-silver-white"
                  element={<GearHptXMizuCairoGrid750MlSilverWhite />}
               />
               <Route
                  path="/products/knive-james-brand-the-elko"
                  element={<HptKniveJamesBrandTheElko />}
               />
               <Route
                  path="/products/camping-helinox-tactical-chair-one"
                  element={<HptHelinoxTacticalChairOne />}
               />
               <Route
                  path="/products/sleeping-thermarest-neoair-xlite"
                  element={<HptSleepingThermarestNeoairXlite />}
               />
               <Route
                  path="/products/hygiene-basic-nature-first-aid-kit-standart"
                  element={<HpthygieneBasicNatureFirstAidKitStandart />}
               />
               <Route
                  path="/products/cooking-soto-stormbreaker"
                  element={<HptSotoStormbreaker />}
               />
               <Route path="/products/gift-card" element={<GiftCard />} />
            </Route>
            <Route path="pages">
               <Route
                  path="the-great-makeover"
                  element={<GreatMakeoverPage />}
               />
               <Route path="kirra" element={<NewTentKirraPage />} />
               <Route
                  path="collab-66-north-cave-xl-4-season"
                  element={<HelmplanetX66NorthPage />}
               />
            </Route>
         </Routes>
      </>
   );
};

export default App;
