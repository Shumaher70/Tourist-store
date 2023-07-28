import {
  CatrgoryCarousel,
  MainCarousel,
  MainGarantee,
  TopSeller,
} from './main/variblesMain';

const Main = () => {
  return (
    <main>
      <MainCarousel />
      <CatrgoryCarousel />
      <TopSeller />
      <MainGarantee />
    </main>
  );
};

export default Main;
