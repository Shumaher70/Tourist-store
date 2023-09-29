import Filter from '../components/Filter';
import { productCard } from '../dammyDB/dammyProducts';

import TemplatePage from './TemplatePage';

const campingFilter = productCard.filter((item) =>
   item.src.includes('camping')
);

const CampingFurniturePage = () => {
   return (
      <>
         <TemplatePage
            title="CAMPING FURNITURE"
            description="Camping furniture, which stands for the highest quality, is characterized by its stability, durability and weather resistance. They are made of robust materials such as aluminum, plastic or wood and thus withstand a wide range of weather conditions. Whether rain, sunlight or high humidity - this furniture will not let you down."
            img="CampingFurniturePageImg.jpg"
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
         />
         <Filter productCart={campingFilter} />
      </>
   );
};

export default CampingFurniturePage;
