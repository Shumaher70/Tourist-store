import CatrgoryCarousel from './main/categoryCarousel/CatergoryCarousel';
import Contributions from './main/currentContributions/Contributions';
import Inspiration from './main/inspiration/Inspiration';
import Magazine from './main/magazine/Magazine';
import MainCarousel from './main/mainCarousel/MainCarousel';
import MainGarantee from './main/mainGarantee/MainGarantee';
import TopSeller from './main/topSeller/TopSeller';

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
