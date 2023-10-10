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

const HptSelected = () => {
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
         case 'Camping furniture':
            if (filterSlice.Campingfurniture === true) {
               dispatch(campingfurniture(false));
            } else {
               dispatch(campingfurniture(true));
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
         case 'Knives & Equipment':
            if (filterSlice.KnivesEquipment === true) {
               dispatch(knivesEquipment(false));
            } else {
               dispatch(knivesEquipment(true));
            }
            break;
         case 'Sleeping':
            if (filterSlice.Sleeping === true) {
               dispatch(sleeping(false));
            } else {
               dispatch(sleeping(true));
            }
            break;
         case 'AeroPress':
            if (filterSlice.AeroPress === true) {
               dispatch(aeroPress(false));
            } else {
               dispatch(aeroPress(true));
            }
            break;
         case 'Basic Nature':
            if (filterSlice.BasicNature === true) {
               dispatch(basicNature(false));
            } else {
               dispatch(basicNature(true));
            }
            break;
         case 'Blaek':
            if (filterSlice.Blaek === true) {
               dispatch(blaek(false));
            } else {
               dispatch(blaek(true));
            }
            break;
         case 'Coghlans':
            if (filterSlice.Coghlans === true) {
               dispatch(coghlans(false));
            } else {
               dispatch(coghlans(true));
            }
            break;
         case 'Dr. Bronners':
            if (filterSlice.DrBronners === true) {
               dispatch(drBronners(false));
            } else {
               dispatch(drBronners(true));
            }
            break;
         case 'EOE':
            if (filterSlice.Eoe === true) {
               dispatch(eoe(false));
            } else {
               dispatch(eoe(true));
            }
            break;
         case 'Fiskars':
            if (filterSlice.Fiskars === true) {
               dispatch(fiskars(false));
            } else {
               dispatch(fiskars(true));
            }
            break;
         case 'HEIMPLANET':
            if (filterSlice.Heimplanet === true) {
               dispatch(heimplanet(false));
            } else {
               dispatch(heimplanet(true));
            }
            break;
      }
   };

   const hptTypeFilter = productCard.filter((item) =>
      item.type.includes('HPT')
   );

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="HPT SELECTED"
            description="
        While traveling, we were often inspired to create new products
              that are now part of HEIMPLANET are. At the same time we have
              gained many experiences with other products & over time identified
              our favorites."
            img="hptSelectedImg.jpg"
            buttonTitle="Discover Products"
            buttonStyle="bg-black text-white"
         />

         <Filter
            id={idHandler}
            productCart={hptTypeFilter}
            typeProps={true}
            checkboxType={[
               {
                  label: 'Camping furniture',
                  checked: filterSlice.Campingfurniture,
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
                  label: 'Knives & Equipment',
                  checked: filterSlice.KnivesEquipment,
               },
               {
                  label: 'Sleeping',
                  checked: filterSlice.Sleeping,
               },
            ]}
            brandProps={true}
            checkboxBrend={[
               {
                  label: 'AeroPress',
                  checked: filterSlice.AeroPress,
               },
               {
                  label: 'Basic Nature',
                  checked: filterSlice.BasicNature,
               },
               {
                  label: 'Blaek',
                  checked: filterSlice.Blaek,
               },
               {
                  label: 'Coghlans',
                  checked: filterSlice.Coghlans,
               },
               {
                  label: 'Dr. Bronners',
                  checked: filterSlice.DrBronners,
               },
               {
                  label: 'EOE',
                  checked: filterSlice.Eoe,
               },
               {
                  label: 'Fiskars',
                  checked: filterSlice.Fiskars,
               },
               {
                  label: 'HEIMPLANET',
                  checked: filterSlice.Heimplanet,
               },
            ]}
            checkedHandler={handleChecked}
         />
      </>
   );
};

export default HptSelected;
