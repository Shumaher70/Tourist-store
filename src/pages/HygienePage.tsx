import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import Filter from '../components/Filter';
import { hygiene, knivesEquipment } from '../store/redusers/filterReduser';

import { products } from '../dammyDB/dammyProducts';
import TemplatePage from './TemplatePage';

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

  return (
    <>
      <TemplatePage
        title="HYGIENE"
        img="HygienePageImg.jpg"
        buttonTitle="Discover products"
        buttonStyle="bg-black text-white"
      />
      <Filter
        products={products.cotegory}
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
