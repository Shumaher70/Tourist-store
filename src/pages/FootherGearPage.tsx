import Filter from '../components/Filter';
import TemplatePage from './TemplatePage';
import { productCard } from '../dammyDB/dammyProducts';

const gearsFilter = productCard.filter((item) => item.type === 'gears');

const FootherGearPage = () => {
   return (
      <>
         <TemplatePage
            title="GEAR"
            description="In cooperation with selected brands, we develop equipment and accessories that optimally complement the stay in the green. Here you can find practical gadgets for everyone."
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
            img="FootherGearPageImg.webp"
         />
         <Filter productCart={gearsFilter} />
      </>
   );
};

export default FootherGearPage;
