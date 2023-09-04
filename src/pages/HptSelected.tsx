import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import Filter from '../components/Filter';
import {
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
} from '../store/redusers/filterReduser';
import TemplatePage from './TemplatePage';

const HptSelected = () => {
  const dispatch = useDispatch();

  const filterSlice = useSelector((state: RootState) => state.filter);

  const handleChecked = (event: string) => {
    switch (event) {
      case 'Camping furniture':
        dispatch(campingfurniture());
        break;
      case 'Hygiene':
        dispatch(hygiene());
        break;
      case 'Cooking':
        dispatch(cooking());
        break;
      case 'Knives & Equipment':
        dispatch(knivesEquipment());
        break;
      case 'Sleeping':
        dispatch(sleeping());
        break;
      case 'AeroPress':
        dispatch(aeroPress());
        break;
      case 'Basic Nature':
        dispatch(basicNature());
        break;
      case 'Blaek':
        dispatch(blaek());
        break;
      case 'Coghlans':
        dispatch(coghlans());
        break;
      case 'Dr. Bronners':
        dispatch(drBronners());
        break;
      case 'EOE':
        dispatch(eoe());
        break;
      case 'Fiskars':
        dispatch(fiskars());
        break;
      case 'HEIMPLANET':
        dispatch(heimplanet());
        break;
    }
  };

  return (
    <>
      <TemplatePage
        title="HPT SELECTED"
        description="
        While traveling, we were often inspired to create new products
              that are now part of HEIMPLANET are. At the same time we have
              gained many experiences with other products & over time identified
              our favorites."
        img="hptSelectedImg.jpg"
        buttonTitle="  Discover Products"
        buttonStyle="bg-black text-white"
      />

      <Filter
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
