import {
  CatrgoryCarousel,
  MainCarousel,
  MainGarantee,
  TopSeller,
  Magazine,
  Inspiration,
  Contributions,
} from './index';

const Main = () => {
  return (
    <main>
      <MainCarousel />
      <CatrgoryCarousel />
      <TopSeller />
      <MainGarantee />
      <Magazine />
      <Inspiration />
      <Contributions />
    </main>
  );
};

export default Main;
