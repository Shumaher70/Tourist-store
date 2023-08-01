import {
  CatrgoryCarousel,
  MainCarousel,
  MainGarantee,
  TopSeller,
  Magazine,
  Inspiration,
  Contributions,
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
      <Contributions />
    </main>
  );
};

export default Main;
