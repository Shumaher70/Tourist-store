import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
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

import Filter from '../components/Filter';
import TemplatePage from './TemplatePage';
import { useCallback, useEffect, useState } from 'react';
import { productCard } from '../dammyDB/dammyProducts';

const TopSellerPage = () => {
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
         case 'Expeditions':
            if (filterSlice.Expeditions === true) {
               dispatch(expeditions(false));
            } else {
               dispatch(expeditions(true));
            }
            break;
         case 'Extreme Weather':
            if (filterSlice.ExtremeWeather === true) {
               dispatch(extremeWeather(false));
            } else {
               dispatch(extremeWeather(true));
            }
            break;
         case 'Families & Groups':
            if (filterSlice.FamiliesGroups === true) {
               dispatch(familiesGroups(false));
            } else {
               dispatch(familiesGroups(true));
            }
            break;
         case 'Trekking & Bikepacking':
            if (filterSlice.TrekkingBikepacking === true) {
               dispatch(trekkingBikepacking(false));
            } else {
               dispatch(trekkingBikepacking(true));
            }
            break;
         case 'Tent Spare Parts':
            if (filterSlice.TentSpareParts === true) {
               dispatch(tentSpareParts(false));
            } else {
               dispatch(tentSpareParts(true));
            }
            break;
         case 'Tents':
            if (filterSlice.Tents === true) {
               dispatch(tents(false));
            } else {
               dispatch(tents(true));
            }
            break;
         case 'Accessories':
            if (filterSlice.Accessories === true) {
               dispatch(accessories(false));
            } else {
               dispatch(accessories(true));
            }
            break;
         case '1-2 people':
            if (filterSlice.People1_2 === true) {
               dispatch(people1_2(false));
            } else {
               dispatch(people1_2(true));
            }
            break;
         case '2-3 people':
            if (filterSlice.People2_3 === true) {
               dispatch(people2_3(false));
            } else {
               dispatch(people2_3(true));
            }
            break;
         case '3-4 people':
            if (filterSlice.People3_4 === true) {
               dispatch(people3_4(false));
            } else {
               dispatch(people3_4(true));
            }
            break;
         case 'Groups':
            if (filterSlice.Groups === true) {
               dispatch(groups(false));
            } else {
               dispatch(groups(true));
            }
            break;
         case '3-Season':
            if (filterSlice.Season3 === true) {
               dispatch(season3(false));
            } else {
               dispatch(season3(true));
            }
            break;
         case '4-Season':
            if (filterSlice.Season4 === true) {
               dispatch(season4(false));
            } else {
               dispatch(season4(true));
            }
            break;
      }
   };

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="TOP SELLER"
            img="topSellerImgPage.jpg"
            buttonTitle="Discover Products"
            buttonStyle="bg-black text-white"
         />

         <Filter
            id={idHandler}
            productCart={productCard}
            activityProps={true}
            checkboxActivity={[
               {
                  label: 'Expeditions',
                  checked: filterSlice.Expeditions,
               },
               {
                  label: 'Extreme Weather',
                  checked: filterSlice.ExtremeWeather,
               },
               {
                  label: 'Families & Groups',
                  checked: filterSlice.FamiliesGroups,
               },
               {
                  label: 'Trekking & Bikepacking',
                  checked: filterSlice.TrekkingBikepacking,
               },
            ]}
            typeProps={true}
            checkboxType={[
               {
                  label: 'Tent Spare Parts',
                  checked: filterSlice.TentSpareParts,
               },
               {
                  label: 'Tents',
                  checked: filterSlice.Tents,
               },
               {
                  label: 'Accessories',
                  checked: filterSlice.Accessories,
               },
            ]}
            sizeProps={true}
            checkboxSize={[
               {
                  label: '1-2 people',
                  checked: filterSlice.People1_2,
               },
               {
                  label: '2-3 people',
                  checked: filterSlice.People2_3,
               },
               {
                  label: '3-4 people',
                  checked: filterSlice.People3_4,
               },
               {
                  label: 'Groups',
                  checked: filterSlice.Groups,
               },
            ]}
            collectionProps={true}
            checkboxCollection={[
               {
                  label: '3-Season',
                  checked: filterSlice.Season3,
               },
               {
                  label: '4-Season',
                  checked: filterSlice.Season4,
               },
            ]}
            checkedHandler={handleChecked}
         />
      </>
   );
};

export default TopSellerPage;
