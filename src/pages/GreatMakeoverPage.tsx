import Footer from '../components/Footer';
import NavBar from '../components/extraPage/NavBar';
import HeroSection from '../components/extraPage/HeroSection';
import ProductPresentation from '../components/extraPage/ProductPresentation';
import MaterialSection from '../components/extraPage/MaterialSection';
import ColorWaysSection from '../components/extraPage/ColorWaysSection';
import MoreSpaceSection from '../components/extraPage/MoreSpaceSection';

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
         <ProductPresentation
            img1="GreatMakeoverPageProductPresentation1.webp"
            img2="GreatMakeoverPageProductPresentation2.webp"
            img3="GreatMakeoverPageProductPresentation3.webp"
            title="OUR TENTS"
            description="Finally we can reveal the secret: we are taking a step towards the future with our tents! In the past months, we have questioned the status quo and worked hard to make our tents even better for you. In concrete terms, this means that in addition to a new look, we have significantly improved the material and added small but fine details that improve usability."
         />
         <MaterialSection />
         <ColorWaysSection />
         <MoreSpaceSection />
         <Footer />
      </>
   );
};

export default GreatMakeoverPage;
