import Footer from '../components/Footer';
import NavBar from '../components/extraPage/NavBar';
import HeroSection from '../components/extraPage/HeroSection';
import ProductPresentation from '../components/extraPage/ProductPresentation';
import MaterialSection from '../components/extraPage/MaterialSection';
import ColorWaysSection from '../components/extraPage/ColorWaysSection';
import MoreSpaceSection from '../components/extraPage/MoreSpaceSection';
import VariantSection from '../components/extraPage/VariantSection';
import DetailsSection from '../components/extraPage/DetailsSection';
import SaleSection from '../components/extraPage/SaleSection';

const temporarySlide1 = [
   { img: 'GreatMakeoverPageProductPresentationSlide1-1.jpg', description: '' },
   { img: 'GreatMakeoverPageProductPresentationSlide1-2.jpg', description: '' },
   { img: 'GreatMakeoverPageProductPresentationSlide1-3.jpg', description: '' },
   { img: 'GreatMakeoverPageProductPresentationSlide1-4.jpg', description: '' },
];

const temporarySlide2 = [
   'GreatMakeoverPageProductPresentationSlide2-1.webp',
   'GreatMakeoverPageProductPresentationSlide2-2.webp',
   'GreatMakeoverPageProductPresentationSlide2-3.webp',
   'GreatMakeoverPageProductPresentationSlide2-4.webp',
];

const GreatMakeoverPage = () => {
   return (
      <>
         <NavBar src="/collections/zelte" />
         <HeroSection
            subtitle="our new tents"
            title="the great makeover"
            btnTitle="to the tents"
            btnStyle="bg-black text-white px-8 py-4 text-md"
            img="GreatMakeoverPageMainImg.jpg"
            src="/collections/zelte"
         />
         <ProductPresentation
            img1="GreatMakeoverPageProductPresentation1.webp"
            img2="GreatMakeoverPageProductPresentation2.webp"
            img3="GreatMakeoverPageProductPresentation3.webp"
            title="OUR TENTS"
            description="Finally we can reveal the secret: we are taking a step towards the future with our tents! In the past months, we have questioned the status quo and worked hard to make our tents even better for you. In concrete terms, this means that in addition to a new look, we have significantly improved the material and added small but fine details that improve usability."
         />
         <MaterialSection
            title="The Material"
            description="
         For the new outer tent fabric, we specifically looked for a
         material that should be more resilient but also lighter than
         before. That is why we chose a high tenacity polyester with 40D
         yarn and a double ripstop construction. High tenacity
         polyester yarn has a higher tensile strength than regular
         polyester yarns. Accordingly, our new tent fabric also has a
         higher tensile strength. For us, polyester is still the best
         tent fabric for our tent constructions, especially with a high
         tenacity polyester yarn.
         "
         />
         <ColorWaysSection />
         <MoreSpaceSection />
         <VariantSection
            img1="GreatMakeoverPageVarianImg1.jpg"
            img2="GreatMakeoverPageVarianImg2.jpg"
            season1="3-Season"
            season2="4-Season"
            details={['4-Season', 'CairoCamo']}
         />
         <DetailsSection slide1={temporarySlide1} slide2={temporarySlide2} />
         <SaleSection
            img="GreatMakeoverPageSaleSectionImg.webp"
            title="THE GREAT MAKEOVER"
            description="Our new tents are available now!"
            src="/collections/zelte"
         />
         <Footer />
      </>
   );
};

export default GreatMakeoverPage;
