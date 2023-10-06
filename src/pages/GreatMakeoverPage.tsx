import Footer from '../components/Footer';
import NavBar from '../components/extraPage/NavBar';
import HeroSection from '../components/extraPage/HeroSection';
import ProductPresentation from '../components/extraPage/ProductPresentation';
import MaterialSection from '../components/extraPage/MaterialSection';
import ColorWaysSection from '../components/extraPage/ColorWaysSection';
import MoreSpaceSection from '../components/extraPage/MoreSpaceSection';
import VariantSection from '../components/extraPage/VariantSection';
import DetailsSection from '../components/extraPage/DetailsSection';

const temporaryImg = [
   'GreatMakeoverPageDetailsSection1.jpg',
   'GreatMakeoverPageDetailsSection2.jpg',
   'GreatMakeoverPageDetailsSection3.jpg',
   'GreatMakeoverPageDetailsSection4.jpg',
];

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
         <VariantSection
            img1="GreatMakeoverPageVarianImg1.jpg"
            img2="GreatMakeoverPageVarianImg2.jpg"
            season1="3-Season"
            season2="4-Season"
            details={['4-Season', 'CairoCamo']}
         />
         <DetailsSection images={temporaryImg} />
         <Footer />
      </>
   );
};

export default GreatMakeoverPage;
