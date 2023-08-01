import {
  CatrgoryCarousel,
  MainCarousel,
  MainGarantee,
  TopSeller,
  Magazine,
  Inspiration,
} from './main/variblesMain';

const Main = () => {
  return (
    <main>
      <MainCarousel />
      <CatrgoryCarousel />
      <TopSeller />
      <MainGarantee />
      <Magazine />
      <Inspiration />
    </main>
  );
};

export default Main;
