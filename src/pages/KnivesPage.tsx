import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import Filter from '../components/Filter';
import {
   hygiene,
   cooking,
   knivesEquipment,
} from '../store/redusers/filterReduser';

import TemplatePage from './TemplatePage';
import { productCard } from '../dammyDB/dammyProducts';

const KnivesPage = () => {
   const dispatch = useDispatch();

   const filterSlice = useSelector((state: RootState) => state.filter);
   const handleChecked = (event: string) => {
      switch (event) {
         case 'Hygiene':
            dispatch(hygiene());
            break;
         case 'Cooking':
            dispatch(cooking());
            break;

         case 'Knives & Equipment':
            dispatch(knivesEquipment());
            break;
      }
   };

   const KnivesFilter = productCard.filter((item) =>
      item.src.includes('knive')
   );

   return (
      <>
         <TemplatePage
            title="KNIVES & EQUIPMENT"
            img="KnivesPageImg.webp"
            buttonTitle="descover products"
            buttonStyle="bg-black text-white"
         />
         <Filter
            productCart={KnivesFilter}
            typeProps={true}
            checkboxType={[
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
            ]}
            checkedHandler={handleChecked}
         />
      </>
   );
};

export default KnivesPage;
