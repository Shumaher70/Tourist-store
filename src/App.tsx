import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Colections from './pages/collections/Collections';
import PageMissed from './pages/pageMissed/PageMissed';
import Zelte from './pages/collections/zelte/Zelte';
import CollabMaharishi from './pages/collabMaharishi/CollabMaharishi';
import CarryeEssentials from './pages/collections/carryeEssentials/CarryeEssentials';
import TransitLine from './pages/collections/transitLine/TransitLine';
import HptSelected from './pages/collections/hHptSelected/HptSelected';
import './index.css';

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

          <Route path="/collections" element={<Colections />} />
          <Route path="/collections/zelte" element={<Zelte />} />
          <Route
            path="/collections/carry-essentials"
            element={<CarryeEssentials />}
          />
          <Route path="/collections/transit-line" element={<TransitLine />} />
          <Route path="/collections/hpt-selected" element={<HptSelected />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
