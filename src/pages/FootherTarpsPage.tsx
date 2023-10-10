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

const FootherTarps = () => {
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
         case 'Tarps':
            if (filterSlice.Tarps === true) {
               dispatch(tarps(false));
            } else {
               dispatch(tarps(true));
            }
            break;
         case 'Accessories':
            if (filterSlice.Accessories === true) {
               dispatch(accessories(false));
            } else {
               dispatch(accessories(true));
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
         default:
      }
   };

   const tarpsFilter = productCard.filter((item) => item.type === 'tarps');

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="TARPS"
            description="Whenever you set up camp in nature, a tarp can be x. Tarps offer many possibilities to create additional protected areas when bikepacking or trekking tours, camping trips or even traveling with a caravan. They extend your tent with a covered area in front of the entrance, offering protection from rain or sun. They even give you the option to leave your tent at home - if you want to travel ultralight."
            buttonTitle="DISCOVER PRODUCTS"
            buttonStyle="bg-black text-white"
            img="footherTarpsPageImg.webp"
         />
         <Filter
            id={idHandler}
            productCart={tarpsFilter}
            typeProps={true}
            checkboxType={[
               {
                  label: 'Tarps',
                  checked: filterSlice.Tarps,
               },
               {
                  label: 'Accessories',
                  checked: filterSlice.Accessories,
               },
            ]}
            sizeProps={true}
            checkboxSize={[
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
                  label: 'Dawn',
                  checked: filterSlice.Dawn,
               },
               {
                  label: 'Dusk',
                  checked: filterSlice.Dusk,
               },
            ]}
            checkedHandler={handleChecked}
         />
      </>
   );
};

export default FootherTarps;
