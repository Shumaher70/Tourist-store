import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback, useEffect, useState } from 'react';
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

import { productCard } from '../dammyDB/dammyProducts';
import TemplatePage from './TemplatePage';

const Zelte = () => {
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

   const tentsFilter = productCard.filter((item) => item.type === 'tents');

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            title="TENTS"
            description="
              The inflatable frame, inner and Flysheet work as one unit and only
              need to be assembled during the first set up - after the first set
              up it's inflate and welcome home!"
            img="zelteMineImg.webp"
            buttonTitle="descover now"
            buttonStyle="bg-black text-white"
            id={id}
         />
         <Filter
            id={idHandler}
            productCart={tentsFilter}
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

export default Zelte;
