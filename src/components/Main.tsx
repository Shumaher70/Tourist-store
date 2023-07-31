import {
  CatrgoryCarousel,
  MainCarousel,
  MainGarantee,
  TopSeller,
  Magazine,
} from './main/variblesMain';

const Main = () => {
  return (
    <main>
      <MainCarousel />
      <CatrgoryCarousel />
      <TopSeller />
      <MainGarantee />
      <Magazine />
    </main>
  );
};

export default Main;
