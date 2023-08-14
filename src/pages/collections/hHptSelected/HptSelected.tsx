import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';

import { Button, Typography } from '@material-tailwind/react';
import Filter from '../../../components/Filter';
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
} from '../../../store/redusers/filterReduser';

const HptSelected = () => {
  const dispatch = useDispatch();
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
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
    <div className="flex flex-col">
      <div
        style={{
          marginTop: `${sizeSlice}px`,
        }}
        className="flex flex-wrap justify-between gap-5 px-[10%] py-[3%] bg-gray-100"
      >
        <div className="flex flex-col justify-between md:w-[47%] w-full">
          <div>
            <Typography className="text-black w-full 2xl:text-7xl text-7xl border-y-[1px] border-black font-medium">
              HPT SELECTED
            </Typography>
            <Typography className="text-black mt-2">
              While traveling, we were often inspired to create new products
              that are now part of HEIMPLANET are. At the same time we have
              gained many experiences with other products & over time identified
              our favorites.
            </Typography>
          </div>
          <div>
            <Button
              className="w-full md:w-auto  rounded-none bg-black text-white"
              color="white"
              size="lg"
            >
              Discover Products
            </Button>
          </div>
        </div>
        <div className="md:w-[47%] md:h-[70vh]">
          <img
            className="h-full w-full object-cover brightness-10"
            src={require('./hptSelectedImg.jpg')}
            alt="missed"
          />
        </div>
      </div>
      <Filter
        products={{}}
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
    </div>
  );
};

export default HptSelected;
