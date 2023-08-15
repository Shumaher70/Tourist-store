import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TemplateMagazineCard from './TemplateMagazineCard';
import TemplateMagazineCarousel from './TemplateMagazineCarousel';
import { Typography } from '@material-tailwind/react';

const MagazineSectionHtpPage = () => {
  const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
  return (
    <div
      style={{ marginTop: `${sizeSlice}px` }}
      className="flex flex-col gap-5 px-[10%] py-[3%] bg-gray-100"
    >
      <Typography className="sm:w-2/4 w-full sm:text-7xl text-4xl font-bold">
        HPT GOURMET CAMPING
      </Typography>
      <TemplateMagazineCard />
      <TemplateMagazineCarousel />
    </div>
  );
};

export default MagazineSectionHtpPage;
