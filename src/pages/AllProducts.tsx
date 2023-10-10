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

const AllProducts = () => {
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
         case 'Everyday Use':
            if (filterSlice.EverydayUse === true) {
               dispatch(everydayUse(false));
            } else {
               dispatch(everydayUse(true));
            }
            break;
         case 'Extreme Weather':
            if (filterSlice.ExtremeWeather === true) {
               dispatch(extremeWeather(false));
            } else {
               dispatch(extremeWeather(true));
            }
            break;
         case 'Families & Group':
            if (filterSlice.FamiliesGroups === true) {
               dispatch(familiesGroups(false));
            } else {
               dispatch(familiesGroups(true));
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
         case 'Trekking & Bikepacking':
            if (filterSlice.TrekkingBikepacking === true) {
               dispatch(trekkingBikepacking(false));
            } else {
               dispatch(trekkingBikepacking(true));
            }
            break;

         case 'Beanies & Caps':
            if (filterSlice.BeaniesCaps === true) {
               dispatch(beaniesCaps(false));
            } else {
               dispatch(beaniesCaps(true));
            }
            break;
         case 'Camping furniture':
            if (filterSlice.Campingfurniture === true) {
               dispatch(campingfurniture(false));
            } else {
               dispatch(campingfurniture(true));
            }
            break;
         case 'Hoodies':
            if (filterSlice.Hoodies === true) {
               dispatch(hoodies(false));
            } else {
               dispatch(hoodies(true));
            }
            break;
         case 'Waist Packs':
            if (filterSlice.WaistPacks === true) {
               dispatch(waistPacks(false));
            } else {
               dispatch(waistPacks(true));
            }
            break;
         case 'Hygiene':
            if (filterSlice.Hygiene === true) {
               dispatch(hygiene(false));
            } else {
               dispatch(hygiene(true));
            }
            break;
         case 'Cooking':
            if (filterSlice.Cooking === true) {
               dispatch(cooking(false));
            } else {
               dispatch(cooking(true));
            }
            break;
         case 'Wash Bags':
            if (filterSlice.WashBags === true) {
               dispatch(washBags(false));
            } else {
               dispatch(washBags(true));
            }
            break;
         case 'Longsleeve':
            if (filterSlice.Longsleeves === true) {
               dispatch(longsleeves(false));
            } else {
               dispatch(longsleeves(true));
            }
            break;
         case 'Knives & Equipment':
            if (filterSlice.KnivesEquipment === true) {
               dispatch(knivesEquipment(false));
            } else {
               dispatch(knivesEquipment(true));
            }
            break;
         case 'Organizer':
            if (filterSlice.Organizer === true) {
               dispatch(organizer(false));
            } else {
               dispatch(organizer(true));
            }
            break;
         case 'Sweater':
            if (filterSlice.Sweater === true) {
               dispatch(sweater(false));
            } else {
               dispatch(sweater(true));
            }
            break;
         case 'Backpacks':
            if (filterSlice.Backpacks === true) {
               dispatch(backpacks(false));
            } else {
               dispatch(backpacks(true));
            }
            break;
         case 'Sleeping':
            if (filterSlice.Sleeping === true) {
               dispatch(sleeping(false));
            } else {
               dispatch(sleeping(true));
            }
            break;
         case 'T-shirts':
            if (filterSlice.Tshirts === true) {
               dispatch(tshirts(false));
            } else {
               dispatch(tshirts(true));
            }
            break;
         case 'Tarps':
            if (filterSlice.Tarps === true) {
               dispatch(tarps(false));
            } else {
               dispatch(tarps(true));
            }
            break;
         case 'Tents':
            if (filterSlice.Tents === true) {
               dispatch(tents(false));
            } else {
               dispatch(tents(true));
            }
            break;
         case 'Tent Spare Parts':
            if (filterSlice.TentSpareParts === true) {
               dispatch(tentSpareParts(false));
            } else {
               dispatch(tentSpareParts(true));
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
         case 'More than 35L':
            if (filterSlice.Morethan35L === true) {
               dispatch(morethan35L(false));
            } else {
               dispatch(morethan35L(true));
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
         case 'Carry Essentials':
            if (filterSlice.CarryEssentials === true) {
               dispatch(carryEssentials(false));
            } else {
               dispatch(carryEssentials(true));
            }
            break;
         case 'Dawn':
            if (filterSlice.Dawn === true) {
               dispatch(dawn(false));
            } else {
               dispatch(dawn(true));
            }
            break;
         case 'Dusk':
            if (filterSlice.Dusk === true) {
               dispatch(dusk(false));
            } else {
               dispatch(dusk(true));
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

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="ALL PRODUCTS"
            img="zelteMineImg.webp"
            buttonTitle="descover now"
            buttonStyle="bg-black text-white"
         />
         <Filter
            id={idHandler}
            productCart={productCard}
            activityProps={true}
            checkboxActivity={[
               {
                  label: 'Everyday Use',
                  checked: filterSlice.EverydayUse,
               },
               {
                  label: 'Extreme Weather',
                  checked: filterSlice.ExtremeWeather,
               },
               {
                  label: 'Families & Group',
                  checked: filterSlice.FamiliesGroups,
               },
               {
                  label: 'Sports Activities',
                  checked: filterSlice.SportsActivities,
               },
               {
                  label: 'Travel',
                  checked: filterSlice.Travel,
               },
               {
                  label: 'Trekking & Bikepacking',
                  checked: filterSlice.TrekkingBikepacking,
               },
            ]}
            typeProps={true}
            checkboxType={[
               {
                  label: 'Beanies & Caps',
                  checked: filterSlice.BeaniesCaps,
               },
               {
                  label: 'Camping furniture',
                  checked: filterSlice.Campingfurniture,
               },
               {
                  label: 'Hoodies',
                  checked: filterSlice.Hoodies,
               },
               {
                  label: 'Waist Packs',
                  checked: filterSlice.WaistPacks,
               },
               {
                  label: 'Hygiene',
                  checked: filterSlice.Hygiene,
               },
               {
                  label: 'Cooking',
                  checked: filterSlice.Cooking,
               },
               {
                  label: 'Wash Bags',
                  checked: filterSlice.WashBags,
               },
               {
                  label: 'Longsleeve',
                  checked: filterSlice.Longsleeves,
               },
               {
                  label: 'Knives & Equipment',
                  checked: filterSlice.KnivesEquipment,
               },
               {
                  label: 'Organizer',
                  checked: filterSlice.Organizer,
               },
               {
                  label: 'Sweater',
                  checked: filterSlice.Sweater,
               },
               {
                  label: 'Backpacks',
                  checked: filterSlice.Backpacks,
               },
               {
                  label: 'Sleeping',
                  checked: filterSlice.Sleeping,
               },
               {
                  label: 'T-shirts',
                  checked: filterSlice.Tshirts,
               },
               {
                  label: 'Tarps',
                  checked: filterSlice.Tarps,
               },
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
                  label: 'More than 35L',
                  checked: filterSlice.Morethan35L,
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
               {
                  label: 'Carry Essentials',
                  checked: filterSlice.CarryEssentials,
               },
               {
                  label: 'Dawn',
                  checked: filterSlice.Dawn,
               },
               {
                  label: 'Dusk',
                  checked: filterSlice.Dusk,
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

export default AllProducts;
