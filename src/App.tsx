import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Colections from './page/collections/Collections';
import PageMissed from './page/pagaMissed/PageMissed';

import './index.css';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<PageMissed />} />
        <Route path="/" element={<Main />} />
        <Route path="/Collections" element={<Colections />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
