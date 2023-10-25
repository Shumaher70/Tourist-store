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

const CarryeEssentials = () => {
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
         case 'Everyday Use':
            if (filterSlice.EverydayUse === true) {
               dispatch(everydayUse(false));
            } else {
               dispatch(everydayUse(true));
            }
            break;
         case 'Sports Activities':
            if (filterSlice.SportsActivities === true) {
               dispatch(sportsActivities(false));
            } else {
               dispatch(sportsActivities(true));
            }
            break;
         case 'Travel':
            if (filterSlice.Travel === true) {
               dispatch(travel(false));
            } else {
               dispatch(travel(true));
            }
            break;
         case 'Waist Packs':
            if (filterSlice.WaistPacks === true) {
               dispatch(waistPacks(false));
            } else {
               dispatch(waistPacks(true));
            }
            break;
         case 'Wash Bags':
            if (filterSlice.WashBags === true) {
               dispatch(washBags(false));
            } else {
               dispatch(washBags(true));
            }
            break;
         case 'Organizer':
            if (filterSlice.Organizer === true) {
               dispatch(organizer(false));
            } else {
               dispatch(organizer(true));
            }
            break;
         case 'Backpacks':
            if (filterSlice.Backpacks === true) {
               dispatch(backpacks(false));
            } else {
               dispatch(backpacks(true));
            }
            break;
         case 'Accessories':
            if (filterSlice.Accessories === true) {
               dispatch(accessories(false));
            } else {
               dispatch(accessories(true));
            }
            break;
         case '1-4L':
            if (filterSlice.L_1_4 === true) {
               dispatch(L1_4(false));
            } else {
               dispatch(L1_4(true));
            }
            break;
         case '5-18L':
            if (filterSlice.L_5_18 === true) {
               dispatch(L5_18(false));
            } else {
               dispatch(L5_18(true));
            }
            break;
         case '19-35L':
            if (filterSlice.L_19_35 === true) {
               dispatch(L19_35(false));
            } else {
               dispatch(L19_35(true));
            }
            break;
         case 'More than 35L':
            if (filterSlice.Morethan35L === true) {
               dispatch(morethan35L(false));
            } else {
               dispatch(morethan35L(true));
            }
            break;
         case 'Carry Essentials':
            if (filterSlice.CarryEssentials === true) {
               dispatch(carryEssentials(false));
            } else {
               dispatch(carryEssentials(true));
            }
            break;
         case 'Monolith Series':
            if (filterSlice.MonolithSeries === true) {
               dispatch(monolithSeries(false));
            } else {
               dispatch(monolithSeries(true));
            }
            break;
         case 'Motion Series':
            if (filterSlice.MotionSeries === true) {
               dispatch(motionSeries(false));
            } else {
               dispatch(motionSeries(true));
            }
            break;
         case 'Transit Line':
            if (filterSlice.TransitLine === true) {
               dispatch(transitLine(false));
            } else {
               dispatch(transitLine(true));
            }
            break;
      }
   };

   const bagsFilter = productCard.filter((item) => item.type === 'bags');

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="BAGS"
            description="
        Are you going on a trip or away for the weekend? Our bags and
              backpacks are guaranteed to stow everything you need on your trip.
              The thoughtful designs and versatile storage options offer plenty
              of space for every purpose."
            img="carryEssentials.webp"
            buttonTitle="  Discover Products"
            buttonStyle="bg-black text-white"
         />
         <Filter
            id={idHandler}
            productCart={bagsFilter}
            activityProps={true}
            checkboxActivity={[
               {
                  label: 'Everyday Use',
                  checked: filterSlice.EverydayUse,
               },
               {
                  label: 'Sports Activities',
                  checked: filterSlice.SportsActivities,
               },
               {
                  label: 'Travel',
                  checked: filterSlice.Travel,
               },
            ]}
            typeProps={true}
            checkboxType={[
               {
                  label: 'Waist Packs',
                  checked: filterSlice.WaistPacks,
               },
               {
                  label: 'Wash Bags',
                  checked: filterSlice.WashBags,
               },
               {
                  label: 'Organizer',
                  checked: filterSlice.Organizer,
               },
               {
                  label: 'Backpacks',
                  checked: filterSlice.Backpacks,
               },
               {
                  label: 'Accessories',
                  checked: filterSlice.Accessories,
               },
            ]}
            sizeProps={true}
            checkboxSize={[
               {
                  label: '1-4L',
                  checked: filterSlice.L_1_4,
               },
               {
                  label: '5-18L',
                  checked: filterSlice.L_5_18,
               },
               {
                  label: '19-35L',
                  checked: filterSlice.L_19_35,
               },
               {
                  label: 'More than 35L',
                  checked: filterSlice.Morethan35L,
               },
            ]}
            collectionProps={true}
            checkboxCollection={[
               {
                  label: 'Carry Essentials',
                  checked: filterSlice.CarryEssentials,
               },
               {
                  label: 'Monolith Series',
                  checked: filterSlice.MonolithSeries,
               },
               {
                  label: 'Motion Series',
                  checked: filterSlice.MotionSeries,
               },
               {
                  label: 'Transit Line',
                  checked: filterSlice.TransitLine,
               },
            ]}
            checkedHandler={handleChecked}
         />
      </>
   );
};

export default CarryeEssentials;
