import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import Filter from '../components/Filter';
import { hygiene, knivesEquipment } from '../store/redusers/filterReduser';

import TemplatePage from './TemplatePage';
import { productCard } from '../dammyDB/dammyProducts';
import { useCallback, useState } from 'react';

const HygienePage = () => {
   const dispatch = useDispatch();

   const [id, setId] = useState('');

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

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="HYGIENE"
            img="HygienePageImg.jpg"
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
         />
         <Filter
            id={idHandler}
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
