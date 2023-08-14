import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';

import { Button, Typography } from '@material-tailwind/react';
import Filter from '../../../components/Filter';
import { accessories, backpacks } from '../../../store/redusers/filterReduser';

const TransitLine = () => {
  const dispatch = useDispatch();
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
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
              TRANSIT LINE
            </Typography>
            <Typography className="text-black mt-2">
              A suitable backpack is crucial - is a Daypack enough or do I need
              a travel pack? And where do I stow smaller things like the
              smartphone, a powerbank and money? We have the right backpack for
              every occasion.
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
            src={require('./transLineImg.jpg')}
            alt="missed"
          />
        </div>
      </div>
      <Filter
        products={{}}
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
    </div>
  );
};

export default TransitLine;
