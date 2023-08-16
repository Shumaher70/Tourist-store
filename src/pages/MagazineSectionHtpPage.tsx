import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TemplateMagazineCard from './TemplateMagazineCard';
import TemplateMagazineCarousel from './TemplateMagazineCarousel';
import { Typography } from '@material-tailwind/react';

const MagazineSectionHtpPage = () => {
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
  return (
    <>
      <div
        style={{ marginTop: `${sizeSlice}px` }}
        className="flex flex-col gap-5 px-[10%] py-[3%] bg-gray-100"
      >
        <Typography className="sm:w-2/4 w-full sm:text-7xl text-4xl font-bold">
          HPT GOURMET CAMPING
        </Typography>
        <TemplateMagazineCard
          title="RECIPE 5: SPICED TURKISH COFFEE"
          description="After a good meal, a good coffee is a must!"
          img="MagazineSectionHtpPageImg1.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="RECIPE 4: FRITATTA OF FETA CHEESE AND WILD MUSHROOMS"
          description="Fritatta of feta cheese and wild mushrooms with strained yoghurt and paprika"
          img="MagazineSectionHtpPageImg2.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="RECIPE 3: OATMEAL"
          description="Today's dish: an oatmeal with nectarines, dark chocolate & roasted almonds"
          img="MagazineSectionHtpPageImg3.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="RECIPE 2: TAJINE"
          description="We continue with our second HPT Gourmet Camping recipe - after the starter we move on to the 'main course'. We serve a tajine with chicken, lemon & porcini mushrooms."
          img="MagazineSectionHtpPageImg4.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="RECIPE 1: WILD MUSHROOM SOUP"
          description="Here we go with the first recipe from the NEW series: HPT Gourmet Camping."
          img="MagazineSectionHtpPageImg5.webp"
          buttonDescription="READ MORE"
        />

        <TemplateMagazineCard
          title="HPT GOURMET CAMPING"
          description="Think of your favourite meal in a restaurant or at home. You can probably immediately remember the smells and tastes of these dishes!"
          img="MagazineSectionHtpPageImg6.webp"
          buttonDescription="READ MORE"
        />
      </div>
      <TemplateMagazineCarousel />
    </>
  );
};

export default MagazineSectionHtpPage;
