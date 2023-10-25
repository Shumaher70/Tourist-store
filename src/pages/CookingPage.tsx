import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import Filter from '../components/Filter';
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

import TemplatePage from './TemplatePage';
import { useCallback, useEffect, useState } from 'react';
import { productCard } from '../dammyDB/dammyProducts';

const CookingPage = () => {
   const dispatch = useDispatch();
   const [id, setId] = useState('');
   const filterSlice = useSelector((state: RootState) => state.filter);

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

   const handleChecked = (event: string) => {
      switch (event) {
         case 'Cooking':
            if (filterSlice.Cooking === true) {
               dispatch(cooking(false));
            } else {
               dispatch(cooking(true));
            }
            break;

         case 'Knives & Equipment':
            if (filterSlice.KnivesEquipment === true) {
               dispatch(knivesEquipment(false));
            } else {
               dispatch(knivesEquipment(true));
            }
            break;
      }
   };

   const cookingFilter = productCard.filter((item) =>
      item.src.includes('cooking')
   );

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="COOKING"
            description="If you are looking for quality camping cooking equipment, then you heve come to the right place. Our assortment includes a wide range of premium products that will elevate your camping kitchen experience to a new level."
            img="CookingPageImg.webp"
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
         />
         <Filter
            productCart={cookingFilter}
            id={idHandler}
            typeProps={true}
            checkboxType={[
               {
                  label: 'Cooking',
                  checked: filterSlice.Cooking,
               },

               {
                  label: 'Knives & Equipment',
                  checked: filterSlice.KnivesEquipment,
               },
            ]}
            checkedHandler={handleChecked}
         />
      </>
   );
};

export default CookingPage;
