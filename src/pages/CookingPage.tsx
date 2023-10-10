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
      dispatch(expeditions(false));
      dispatch(extremeWeather(false));
      dispatch(familiesGroups(false));
      dispatch(trekkingBikepacking(false));
      dispatch(tentSpareParts(false));
      dispatch(tents(false));
      dispatch(accessories(false));
      dispatch(people1_2(false));
      dispatch(people2_3(false));
      dispatch(people3_4(false));
      dispatch(groups(false));
      dispatch(season3(false));
      dispatch(season4(false));
      dispatch(everydayUse(false));
      dispatch(sportsActivities(false));
      dispatch(travel(false));
      dispatch(waistPacks(false));
      dispatch(washBags(false));
      dispatch(organizer(false));
      dispatch(backpacks(false));
      dispatch(L1_4(false));
      dispatch(L5_18(false));
      dispatch(L19_35(false));
      dispatch(morethan35L(false));
      dispatch(carryEssentials(false));
      dispatch(monolithSeries(false));
      dispatch(motionSeries(false));
      dispatch(transitLine(false));
      dispatch(aeroPress(false));
      dispatch(basicNature(false));
      dispatch(blaek(false));
      dispatch(coghlans(false));
      dispatch(drBronners(false));
      dispatch(eoe(false));
      dispatch(fiskars(false));
      dispatch(heimplanet(false));
      dispatch(campingfurniture(false));
      dispatch(hygiene(false));
      dispatch(cooking(false));
      dispatch(knivesEquipment(false));
      dispatch(sleeping(false));
      dispatch(tarps(false));
      dispatch(dawn(false));
      dispatch(dusk(false));
      dispatch(beaniesCaps(false));
      dispatch(hoodies(false));
      dispatch(longsleeves(false));
      dispatch(sweater(false));
      dispatch(tshirts(false));
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
