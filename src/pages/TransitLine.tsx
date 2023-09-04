import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import Filter from '../components/Filter';
import { accessories, backpacks } from '../store/redusers/filterReduser';
import TemplatePage from './TemplatePage';

const TransitLine = () => {
  const dispatch = useDispatch();
  const filterSlice = useSelector((state: RootState) => state.filter);

  const handleChecked = (event: string) => {
    switch (event) {
      case 'Accessories':
        dispatch(accessories());
        break;
      case 'Backpacks':
        dispatch(backpacks());
        break;
    }
  };

  return (
    <>
      <TemplatePage
        title="TRANSIT LINE"
        description="
        A suitable backpack is crucial - is a Daypack enough or do I need a travel pack? And where do I stow smaller things like the smartphone, a powerbank and money? We have the right backpack for every occasion."
        img="transLineImg.jpg"
        buttonTitle="descover now"
        buttonStyle="bg-black text-white"
      />
      <Filter
        typeProps={true}
        checkboxType={[
          {
            label: 'Backpacks',
            checked: filterSlice.Backpacks,
          },
          {
            label: 'Accessories',
            checked: filterSlice.Accessories,
          },
        ]}
        checkedHandler={handleChecked}
      />
    </>
  );
};

export default TransitLine;
