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
import { productCard } from '../dammyDB/dammyProducts';
import { useCallback, useEffect, useState } from 'react';

const HygienePage = () => {
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
         case 'Hygiene':
            if (filterSlice.Hygiene === true) {
               dispatch(hygiene(false));
            } else {
               dispatch(hygiene(true));
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

   const hygieneFilter = productCard.filter((item) =>
      item.src.includes('hygiene')
   );

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="HYGIENE"
            img="HygienePageImg.jpg"
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
         />
         <Filter
            id={idHandler}
            productCart={hygieneFilter}
            typeProps={true}
            checkboxType={[
               {
                  label: 'Hygiene',
                  checked: filterSlice.Hygiene,
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

export default HygienePage;
