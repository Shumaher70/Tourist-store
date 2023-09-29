import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import Filter from '../components/Filter';
import { hygiene, knivesEquipment } from '../store/redusers/filterReduser';

import TemplatePage from './TemplatePage';
import { productCard } from '../dammyDB/dammyProducts';

const HygienePage = () => {
   const dispatch = useDispatch();

   const filterSlice = useSelector((state: RootState) => state.filter);
   const handleChecked = (event: string) => {
      switch (event) {
         case 'Hygiene':
            dispatch(hygiene());
            break;

         case 'Knives & Equipment':
            dispatch(knivesEquipment());
            break;
      }
   };

   const hygieneFilter = productCard.filter((item) =>
      item.src.includes('hygiene')
   );

   return (
      <>
         <TemplatePage
            title="HYGIENE"
            img="HygienePageImg.jpg"
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
         />
         <Filter
            productCart={hygieneFilter}
            typeProps={true}
            checkboxType={[
               {
                  label: 'Hygiene',
                  checked: filterSlice.Hygiene,
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

export default HygienePage;
