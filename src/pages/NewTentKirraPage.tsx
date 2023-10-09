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
   { img: 'NewTentKirraPageProductPresentationSlide1-1.webp', description: '' },
   { img: 'NewTentKirraPageProductPresentationSlide1-2.webp', description: '' },
   { img: 'NewTentKirraPageProductPresentationSlide1-3.jpg', description: '' },
   { img: 'NewTentKirraPageProductPresentationSlide1-5.webp', description: '' },
   { img: 'NewTentKirraPageProductPresentationSlide1-6.webp', description: '' },
   { img: 'NewTentKirraPageProductPresentationSlide1-7.webp', description: '' },
   { img: 'NewTentKirraPageProductPresentationSlide1-8.webp', description: '' },
   { img: 'NewTentKirraPageProductPresentationSlide1-9.webp', description: '' },
   {
      img: 'NewTentKirraPageProductPresentationSlide1-10.webp',
      description: '',
   },
];

const NewTentKirraPage = () => {
   return (
      <>
         <NavBar src="/collections/zelte" />
         <HeroSection
            subtitle="new in the family"
            title="kirra"
            description="We have realised that our expertise can be used to find better fabrics, fairer working conditions, better trained manufacturers, cleaner production routes and more thoughtful designs. They say quality is about meeting expectations. Why just meet them when you can exceed them? We keep going until there is nothing left to improve. Is that an unrealistic goal?"
            btnTitle="to the tents"
            btnStyle="bg-black text-white px-8 py-4 text-md"
            img="NewTentKirraPageMainImg.webp"
            src="/collections/zelte"
         />
         <ProductPresentation
            img1="NewTentKirraPageProductPresentation1.webp"
            img2="NewTentKirraPageProductPresentation2.webp"
            img3="NewTentKirraPageProductPresentation3.webp"
            title="OUR NEW MODEL"
            description="Kirra is our new inflatable tent for 2 people with lots of equipment. Thanks to its special frame structure, Kirra convinces with a good balance between comfort and efficiency."
         />
         <MoreSpaceSection />
         <ColorWaysSection />
         <MaterialSection
            title="#WHEREVERYOUGO"
            description="With the HPT HOODIE and the HPT CREWNECK we have developed two products that are perfect for any situation where it gets chilly. After surfing at the beach, while hiking on cool evenings in the mountains, while traveling - when it gets chilly on the plane again, in the evening while dining out with friends or just chilling on the couch"
            img="NewTentKirraPageMaterialSection.webp"
         />
         <VariantSection
            img1="GreatMakeoverPageVarianImg1.jpg"
            img2="GreatMakeoverPageVarianImg2.jpg"
            season1="3-Season: Classic & Cairo Camo"
            season2="4-Season: for extreme conditions"
            details={[
               '3-Season: Classic & Cairo Camo',
               '4-Season: for extreme conditions',
            ]}
         />
         <DetailsSection slide1={temporarySlide1} />
         <SaleSection
            img="NewTentKirraPageSaleSectionImg.webp"
            title="KIRRA"
            description="Kirra is our new inflatable tent for 2 people with lots of equipment. Thanks to its special frame structure, Kirra offers a good balance between comfort and efficiency."
            src="/collections/zelte"
         />
         <Footer />
      </>
   );
};

export default NewTentKirraPage;
