import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import Filter from '../components/Filter';
import {
   tarps,
   accessories,
   people2_3,
   people3_4,
   groups,
   dawn,
   dusk,
} from '../store/redusers/filterReduser';
import TemplatePage from './TemplatePage';
import { productCard } from '../dammyDB/dammyProducts';
import { useCallback, useState } from 'react';

const FootherTarps = () => {
   const dispatch = useDispatch();
   const [id, setId] = useState('');

   const filterSlice = useSelector((state: RootState) => state.filter);

   const handleChecked = (event: string) => {
      switch (event) {
         case 'Tarps':
            dispatch(tarps());
            break;
         case 'Accessories':
            dispatch(accessories());
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
         case 'Dawn':
            dispatch(dawn());
            break;
         case 'Dusk':
            dispatch(dusk());
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
