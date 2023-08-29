import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import Filter from '../components/Filter';

import {
  everydayUse,
  extremeWeather,
  familiesGroups,
  sportsActivities,
  travel,
  trekkingBikepacking,
  beaniesCaps,
  campingfurniture,
  hoodies,
  waistPacks,
  hygiene,
  cooking,
  washBags,
  longsleeves,
  knivesEquipment,
  organizer,
  sweater,
  backpacks,
  sleeping,
  tshirts,
  tarps,
  tentSpareParts,
  tents,
  accessories,
  L1_4,
  L5_18,
  L19_35,
  people1_2,
  people2_3,
  people3_4,
  morethan35L,
  groups,
  season3,
  season4,
  carryEssentials,
  dawn,
  dusk,
  monolithSeries,
  motionSeries,
  transitLine,
} from '../store/redusers/filterReduser';
import { products } from '../dammyDB/dammyProducts';
import TemplatePage from './TemplatePage';

const AllProducts = () => {
  const dispatch = useDispatch();

  const filterSlice = useSelector((state: RootState) => state.filter);

  const handleChecked = (event: string) => {
    switch (event) {
      case 'Everyday Use':
        dispatch(everydayUse());
        break;
      case 'Extreme Weather':
        dispatch(extremeWeather());
        break;
      case 'Families & Group':
        dispatch(familiesGroups());
        break;
      case 'Sports Activities':
        dispatch(sportsActivities());
        break;
      case 'Travel':
        dispatch(travel());
        break;
      case 'Trekking & Bikepacking':
        dispatch(trekkingBikepacking());
        break;

      case 'Beanies & Caps':
        dispatch(beaniesCaps());
        break;
      case 'Camping furniture':
        dispatch(campingfurniture());
        break;
      case 'Hoodies':
        dispatch(hoodies());
        break;
      case 'Waist Packs':
        dispatch(waistPacks());
        break;
      case 'Hygiene':
        dispatch(hygiene());
        break;
      case 'Cooking':
        dispatch(cooking());
        break;
      case 'Wash Bags':
        dispatch(washBags());
        break;
      case 'Longsleeve':
        dispatch(longsleeves());
        break;
      case 'Knives & Equipment':
        dispatch(knivesEquipment());
        break;
      case 'Organizer':
        dispatch(organizer());
        break;
      case 'Sweater':
        dispatch(sweater());
        break;
      case 'Backpacks':
        dispatch(backpacks());
        break;
      case 'Sleeping':
        dispatch(sleeping());
        break;
      case 'T-shirts':
        dispatch(tshirts());
        break;
      case 'Tarps':
        dispatch(tarps());
        break;
      case 'Tents':
        dispatch(tents());
        break;
      case 'Tent Spare Parts':
        dispatch(tentSpareParts());
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
      case '1-2 people':
        dispatch(people1_2());
        break;
      case '2-3 people':
        dispatch(people2_3());
        break;
      case '3-4 people':
        dispatch(people3_4());
        break;
      case 'More than 35L':
        dispatch(morethan35L());
        break;
      case 'Groups':
        dispatch(groups());
        break;

      case '3-Season':
        dispatch(season3());
        break;
      case '4-Season':
        dispatch(season4());
        break;
      case 'Carry Essentials':
        dispatch(carryEssentials());
        break;
      case 'Dawn':
        dispatch(dawn());
        break;
      case 'Dusk':
        dispatch(dusk());
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
    <>
      <TemplatePage
        title="ALL PRODUCTS"
        img="zelteMineImg.webp"
        buttonTitle="descover now"
        buttonStyle="bg-black text-white"
      />
      <Filter
        products={products.cotegory}
        activityProps={true}
        checkboxActivity={[
          {
            label: 'Everyday Use',
            checked: filterSlice.EverydayUse,
          },
          {
            label: 'Extreme Weather',
            checked: filterSlice.ExtremeWeather,
          },
          {
            label: 'Families & Group',
            checked: filterSlice.FamiliesGroups,
          },
          {
            label: 'Sports Activities',
            checked: filterSlice.SportsActivities,
          },
          {
            label: 'Travel',
            checked: filterSlice.Travel,
          },
          {
            label: 'Trekking & Bikepacking',
            checked: filterSlice.TrekkingBikepacking,
          },
        ]}
        typeProps={true}
        checkboxType={[
          {
            label: 'Beanies & Caps',
            checked: filterSlice.BeaniesCaps,
          },
          {
            label: 'Camping furniture',
            checked: filterSlice.Campingfurniture,
          },
          {
            label: 'Hoodies',
            checked: filterSlice.Hoodies,
          },
          {
            label: 'Waist Packs',
            checked: filterSlice.WaistPacks,
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
            label: 'Wash Bags',
            checked: filterSlice.WashBags,
          },
          {
            label: 'Longsleeve',
            checked: filterSlice.Longsleeves,
          },
          {
            label: 'Knives & Equipment',
            checked: filterSlice.KnivesEquipment,
          },
          {
            label: 'Organizer',
            checked: filterSlice.Organizer,
          },
          {
            label: 'Sweater',
            checked: filterSlice.Sweater,
          },
          {
            label: 'Backpacks',
            checked: filterSlice.Backpacks,
          },
          {
            label: 'Sleeping',
            checked: filterSlice.Sleeping,
          },
          {
            label: 'T-shirts',
            checked: filterSlice.Tshirts,
          },
          {
            label: 'Tarps',
            checked: filterSlice.Tarps,
          },
          {
            label: 'Tent Spare Parts',
            checked: filterSlice.TentSpareParts,
          },
          {
            label: 'Tents',
            checked: filterSlice.Tents,
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
            label: '1-2 people',
            checked: filterSlice.People1_2,
          },
          {
            label: '2-3 people',
            checked: filterSlice.People2_3,
          },
          {
            label: '3-4 people',
            checked: filterSlice.People3_4,
          },
          {
            label: 'More than 35L',
            checked: filterSlice.Morethan35L,
          },
          {
            label: 'Groups',
            checked: filterSlice.Groups,
          },
        ]}
        collectionProps={true}
        checkboxCollection={[
          {
            label: '3-Season',
            checked: filterSlice.Season3,
          },
          {
            label: '4-Season',
            checked: filterSlice.Season4,
          },
          {
            label: 'Carry Essentials',
            checked: filterSlice.CarryEssentials,
          },
          {
            label: 'Dawn',
            checked: filterSlice.Dawn,
          },
          {
            label: 'Dusk',
            checked: filterSlice.Dusk,
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
    </>
  );
};

export default AllProducts;
