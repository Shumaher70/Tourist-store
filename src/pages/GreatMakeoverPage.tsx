import Footer from '../components/Footer';
import NavBar from '../components/extraPage/NavBar';
import HeroSection from '../components/extraPage/HeroSection';

const GreatMakeoverPage = () => {
   return (
      <>
         <NavBar src="/collections/zelte" />
         <HeroSection
            subtitle="our new tents"
            title="the great makeover"
            btnTitle="to the tents"
            btnStyle="bg-black text-white"
            img="GreatMakeoverPageMainImg.jpg"
            src="collections/zelte"
         />

         <Footer />
      </>
   );
};

export default GreatMakeoverPage;
