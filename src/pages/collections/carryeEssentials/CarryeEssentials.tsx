import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { Button, Typography } from '@material-tailwind/react';
import Filter from '../../../components/Filter';
import {
  everydayUse,
  sportsActivities,
  travel,
  waistPacks,
  washBags,
  organizer,
  backpacks,
  accessories,
  L1_4,
  L5_18,
  L19_35,
  morethan35L,
  carryEssentials,
  monolithSeries,
  motionSeries,
  transitLine,
} from '../../../store/redusers/filterReduser';

const CarryeEssentials = () => {
  const dispatch = useDispatch();
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
  const filterSlice = useSelector((state: RootState) => state.filter);
  const handleChecked = (event: string) => {
    switch (event) {
      case 'Everyday Use':
        dispatch(everydayUse());
        break;
      case 'Sports Activities':
        dispatch(sportsActivities());
        break;
      case 'Travel':
        dispatch(travel());
        break;
      case 'Waist Packs':
        dispatch(waistPacks());
        break;
      case 'Wash Bags':
        dispatch(washBags());
        break;
      case 'Organizer':
        dispatch(organizer());
        break;
      case 'Backpacks':
        dispatch(backpacks());
        break;
      case 'Accessories':
        dispatch(accessories());
        break;
      case '1-4L':
        dispatch(L1_4());
        break;
      case '5-18L':
        dispatch(L5_18());
        break;
      case '19-35L':
        dispatch(L19_35());
        break;
      case 'More than 35L':
        dispatch(morethan35L());
        break;
      case 'Carry Essentials':
        dispatch(carryEssentials());
        break;
      case 'Monolith Series':
        dispatch(monolithSeries());
        break;
      case 'Motion Series':
        dispatch(motionSeries());
        break;
      case 'Transit Line':
        dispatch(transitLine());
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
              BAGS
            </Typography>
            <Typography className="text-black mt-2">
              Are you going on a trip or away for the weekend? Our bags and
              backpacks are guaranteed to stow everything you need on your trip.
              The thoughtful designs and versatile storage options offer plenty
              of space for every purpose.
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
            className="h-full w-full object-cover"
            src={require('./carryEssentials.webp')}
            alt="missed"
          />
        </div>
      </div>
      <Filter
        products={{}}
        activityProps={true}
        checkboxActivity={[
          {
            label: 'Everyday Use',
            checked: filterSlice.EverydayUse,
          },
          {
            label: 'Sports Activities',
            checked: filterSlice.SportsActivities,
          },
          {
            label: 'Travel',
            checked: filterSlice.Travel,
          },
        ]}
        typeProps={true}
        checkboxType={[
          {
            label: 'Waist Packs',
            checked: filterSlice.WaistPacks,
          },
          {
            label: 'Wash Bags',
            checked: filterSlice.WashBags,
          },
          {
            label: 'Organizer',
            checked: filterSlice.Organizer,
          },
          {
            label: 'Backpacks',
            checked: filterSlice.Backpacks,
          },
          {
            label: 'Accessories',
            checked: filterSlice.Accessories,
          },
        ]}
        sizeProps={true}
        checkboxSize={[
          {
            label: '1-4L',
            checked: filterSlice.L_1_4,
          },
          {
            label: '5-18L',
            checked: filterSlice.L_5_18,
          },
          {
            label: '19-35L',
            checked: filterSlice.L_19_35,
          },
          {
            label: 'More than 35L',
            checked: filterSlice.Morethan35L,
          },
        ]}
        collectionProps={true}
        checkboxCollection={[
          {
            label: 'Carry Essentials',
            checked: filterSlice.CarryEssentials,
          },
          {
            label: 'Monolith Series',
            checked: filterSlice.MonolithSeries,
          },
          {
            label: 'Motion Series',
            checked: filterSlice.MotionSeries,
          },
          {
            label: 'Transit Line',
            checked: filterSlice.TransitLine,
          },
        ]}
        checkedHandler={handleChecked}
      />
    </div>
  );
};

export default CarryeEssentials;
