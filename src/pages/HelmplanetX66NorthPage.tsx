import Footer from '../components/Footer';
import NavBar from '../components/extraPage/NavBar';
import HeroSection from '../components/extraPage/HeroSection';
import ProductPresentation from '../components/extraPage/ProductPresentation';
import MaterialSection from '../components/extraPage/MaterialSection';
import MoreSpaceSection from '../components/extraPage/MoreSpaceSection';
import VariantSection from '../components/extraPage/VariantSection';
import DetailsSection from '../components/extraPage/DetailsSection';
import SaleSection from '../components/extraPage/SaleSection';

const temporarySlide1 = [
   {
      img: 'HelmplanetX66NorthPageProductPresentationSlide1-1.webp',
      description: 'Heimplanet-66-North-The-Cave-XL-4-Season-20.jpg',
   },
   {
      img: 'HelmplanetX66NorthPageProductPresentationSlide1-2.jpg',
      description: 'Flysheet: 100D HT POLYESTER RIPSTOP SIL/PU 5,000 MM',
   },
   {
      img: 'HelmplanetX66NorthPageProductPresentationSlide1-3.webp',
      description: 'Inner tent: 40D RIPSTOP-NYLON, BREATHABLE',
   },
   {
      img: 'HelmplanetX66NorthPageProductPresentationSlide1-4.jpg',
      description: 'YKK zippers',
   },
   {
      img: 'HelmplanetX66NorthPageProductPresentationSlide1-5.jpg',
      description: 'Velcro Badge Area',
   },
];

const HelmplanetX66NorthPage = () => {
   return (
      <>
         <NavBar
            src="/pages/collab-66-north-cave-xl-4-season"
            title="sold out"
         />
         <HeroSection
            subtitle="HEIMPLANET X 66°NORTH"
            title="THE CAVE XL 4-SEASON"
            description="We have realised that our expertise can be used to find better fabrics, fairer working conditions, better trained manufacturers, cleaner production routes and more thoughtful designs. They say quality is about meeting expectations. Why just meet them when you can exceed them? We keep going until there is nothing left to improve. Is that an unrealistic goal?"
            btnTitle="Learn More"
            btnStyle="bg-black text-white px-8 py-4 text-md"
            id="productPresent"
            img="HelmplanetX66NorthPagePageMainImg.webp"
         />
         <ProductPresentation
            img1="HelmplanetX66NorthProductPresentation1.webp"
            img2="HelmplanetX66NorthProductPresentation2.webp"
            img3="HelmplanetX66NorthProductPresentation3.webp"
            title="THE CAVE XL 4-SEASON"
            description="The tent was designed and tested to withstand all seasons in Iceland - a country known for its dramatic weather conditions and temperatures. The Cave XL 4-Season owes its superior strength to its geodesic dome construction with ten crossing points and high-quality weatherproof, durable materials that withstand wind, snow and rain. The bright orange color is inspired by the shelters in the Icelandic highlands and designed to stand out against the Icelandic landscape."
         />
         <MoreSpaceSection
            title="BAGS+BACKPACKS"
            benefit={['Quick assembly', 'Unroll, inflate - done!']}
            benefitImg="HelmplanetX66NorthPageMoreSpaseBenifitImg1.avif"
            img="HelmplanetX66NorthPageMore1.png"
            description="Setting up our tents works intuitively and follows a simple principle: Unroll, inflate - done! The special feature: the inflatable frame, inner and Flysheet function as a unit and do not need to be assembled. With a pump, the tent can be pitched in less than a minute and offers space for 3 people.
            "
         />
         <MoreSpaceSection
            title="GEODESIC PRINCIPLE"
            benefit={[
               'Patented multi-chamber safety system',
               'Double layer Airframe',
               'Stable & resistant',
            ]}
            benefitImg="HelmplanetX66NorthPageMoreSpaseBenifitImg2.jpg"
            img="HelmplanetX66NorthPageMore2.webp"
            reverse
            bg={false}
            description="The Cave XL 4-Season owes its outstanding strength to its geodesic dome construction with ten crossing points - this guarantees excellent stability - even in strong winds, rain and snow!"
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
            benefit={[
               'Tested under the toughest conditions',
               'Perfect for all seasons',
            ]}
         />
         <VariantSection
            title="DETAILS MAKE THE DIFFERENCE"
            img1="HelmplanetX66NorthPagePageVarianImg2.webp"
            img2="HelmplanetX66NorthPagePageVarianImg1.webp"
            season1="66° North"
            season2="HEIMPLANET"
            details={['5 years development time']}
         />
         <DetailsSection slide1={temporarySlide1} />
         <SaleSection
            img="HelmplanetX66NorthPageSaleSectionImg.webp"
            title="THE CAVE XL (4-SEASON) - 66°NORTH LIMITED EDITION"
            src="/collections/zelte"
         />
         <Footer />
      </>
   );
};

export default HelmplanetX66NorthPage;
