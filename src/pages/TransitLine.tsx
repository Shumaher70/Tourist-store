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
import { useEffect } from 'react';

const TransitLine = () => {
   const dispatch = useDispatch();
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
         case 'Accessories':
            if (filterSlice.Accessories === true) {
               dispatch(accessories(false));
            } else {
               dispatch(accessories(true));
            }
            break;
         case 'Backpacks':
            if (filterSlice.Backpacks === true) {
               dispatch(backpacks(false));
            } else {
               dispatch(backpacks(true));
            }
            break;
      }
   };

   return (
      <>
         <TemplatePage
            title="TRANSIT LINE"
            description="
        A suitable backpack is crucial - is a Daypack enough or do I need a travel pack? And where do I stow smaller things like the smartphone, a powerbank and money? We have the right backpack for every occasion."
            img="transLineImg.jpg"
            buttonTitle="descover now"
            buttonStyle="bg-black text-white"
            id="tents"
         />
         <Filter
            typeProps={true}
            checkboxType={[
               {
                  label: 'Backpacks',
                  checked: filterSlice.Backpacks,
               },
               {
                  label: 'Accessories',
                  checked: filterSlice.Accessories,
               },
            ]}
            checkedHandler={handleChecked}
         />
      </>
   );
};

export default TransitLine;
