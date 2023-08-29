import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import Filter from '../components/Filter';
import { cooking, knivesEquipment } from '../store/redusers/filterReduser';

import { products } from '../dammyDB/dammyProducts';
import TemplatePage from './TemplatePage';

const CookingPage = () => {
  const dispatch = useDispatch();

  const filterSlice = useSelector((state: RootState) => state.filter);
  const handleChecked = (event: string) => {
    switch (event) {
      case 'Cooking':
        dispatch(cooking());
        break;

      case 'Knives & Equipment':
        dispatch(knivesEquipment());
        break;
    }
  };

  return (
    <>
      <TemplatePage
        title="COOKING"
        description="If you are looking for quality camping cooking equipment, then you heve come to the right place. Our assortment includes a wide range of premium products that will elevate your camping kitchen experience to a new level."
        img="CookingPageImg.webp"
        buttonTitle="Discover products"
        buttonStyle="bg-black text-white"
      />
      <Filter
        products={products.cotegory}
        typeProps={true}
        checkboxType={[
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

export default CookingPage;
