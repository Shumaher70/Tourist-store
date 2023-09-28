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
} from '../store/redusers/filterReduser';
import { productCard } from '../dammyDB/dammyProducts';
import TemplatePage from './TemplatePage';

const Zelte = () => {
   const dispatch = useDispatch();

   const filterSlice = useSelector((state: RootState) => state.filter);
   const handleChecked = (event: string) => {
      switch (event) {
         case 'Expeditions':
            dispatch(expeditions());
            break;
         case 'Extreme Weather':
            dispatch(extremeWeather());
            break;
         case 'Families & Groups':
            dispatch(familiesGroups());
            break;
         case 'Trekking & Bikepacking':
            dispatch(trekkingBikepacking());
            break;
         case 'Tent Spare Parts':
            dispatch(tentSpareParts());
            break;
         case 'Tents':
            dispatch(tents());
            break;
         case 'Accessories':
            dispatch(accessories());
            break;
         case '1-2 people':
            dispatch(people1_2());
            break;
         case '2-3 people':
            dispatch(people2_3());
            break;
         case '3-4 people':
            dispatch(people3_4());
            break;
         case 'Groups':
            dispatch(groups());
            break;
         case '3-Season':
            dispatch(season3());
            break;
         case '4-Season':
            dispatch(season4());
            break;
      }
   };

   const tentsFilter = productCard.filter((item) => item.type === 'tents');

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
         />
         <Filter
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
