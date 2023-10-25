import { useCallback, useEffect, useState } from 'react';
import Filter from '../components/Filter';
import { productCard } from '../dammyDB/dammyProducts';

import TemplatePage from './TemplatePage';
import {
   expeditions,
   extremeWeather,
   familiesGroups,
   trekkingBikepacking,
   tentSpareParts,
   tents,
   accessories,
   people1_2,
   people2_3,
   people3_4,
   groups,
   season3,
   season4,
   everydayUse,
   sportsActivities,
   travel,
   waistPacks,
   washBags,
   organizer,
   backpacks,
   L1_4,
   L5_18,
   L19_35,
   morethan35L,
   carryEssentials,
   monolithSeries,
   motionSeries,
   transitLine,
   aeroPress,
   basicNature,
   blaek,
   coghlans,
   drBronners,
   eoe,
   fiskars,
   heimplanet,
   campingfurniture,
   hygiene,
   cooking,
   knivesEquipment,
   sleeping,
   tarps,
   dawn,
   dusk,
   beaniesCaps,
   hoodies,
   longsleeves,
   sweater,
   tshirts,
} from '../store/redusers/filterReduser';
import { useDispatch } from 'react-redux';

const campingFilter = productCard.filter((item) =>
   item.src.includes('camping')
);

const CampingFurniturePage = () => {
   const [id, setId] = useState('');

   const dispatch = useDispatch();

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   useEffect(() => {
      const resetFilter = () => {
         const filterActions = [
            expeditions,
            extremeWeather,
            familiesGroups,
            trekkingBikepacking,
            tentSpareParts,
            tents,
            accessories,
            people1_2,
            people2_3,
            people3_4,
            groups,
            season3,
            season4,
            everydayUse,
            sportsActivities,
            travel,
            waistPacks,
            washBags,
            organizer,
            backpacks,
            L1_4,
            L5_18,
            L19_35,
            morethan35L,
            carryEssentials,
            monolithSeries,
            motionSeries,
            transitLine,
            aeroPress,
            basicNature,
            blaek,
            coghlans,
            drBronners,
            eoe,
            fiskars,
            heimplanet,
            campingfurniture,
            hygiene,
            cooking,
            knivesEquipment,
            sleeping,
            tarps,
            dawn,
            dusk,
            beaniesCaps,
            hoodies,
            longsleeves,
            sweater,
            tshirts,
         ];
         filterActions.forEach((action) => dispatch(action(false)));
      };
      resetFilter();
   }, [dispatch]);

   return (
      <>
         <TemplatePage
            id={id}
            title="CAMPING FURNITURE"
            description="Camping furniture, which stands for the highest quality, is characterized by its stability, durability and weather resistance. They are made of robust materials such as aluminum, plastic or wood and thus withstand a wide range of weather conditions. Whether rain, sunlight or high humidity - this furniture will not let you down."
            img="CampingFurniturePageImg.jpg"
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
         />
         <Filter id={idHandler} productCart={campingFilter} />
      </>
   );
};

export default CampingFurniturePage;
