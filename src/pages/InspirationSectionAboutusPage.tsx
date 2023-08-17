import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Typography } from '@material-tailwind/react';
import TemplatePage from './TemplatePage';

const InspirationSectionAboutusPage = () => {
  const navHeightSlice = useSelector(
    (state: RootState) => state.size.heightNav
  );
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [navFixed, setNavFixed] = useState<boolean>(false);

  useEffect(() => {
    if (scrollTop <= 0) {
      return setNavFixed(true);
    }
    console.log(scrollTop);

    setNavFixed(false);
  }, [scrollTop, navFixed]);

  const HandlerOffsetBottom = (element: number) => {
    setScrollTop(element - +navHeightSlice);
  };

  return (
    <div>
      <TemplatePage
        scrollRefTop={HandlerOffsetBottom}
        title="ABOUT US"
        img="InspirationSectionAboutusPageMainImg.webp"
        buttonTitle="learn More"
        buttonStyle="bg-black text-white"
        extraButton={true}
        extraButtonStyle="border-[1px] border-black"
        extraButtonTitle="jobs"
      />
      <div
        style={
          navFixed ? { position: 'fixed', top: `${navHeightSlice}px` } : {}
        }
        className="flex justify-center items-center gap-5 w-full h-[80px] bg-white"
      >
        <Typography className="text-black font-normal cursor-pointer">
          MISSION
        </Typography>
        <Typography className="text-black font-normal cursor-pointer">
          STORE
        </Typography>
        <Typography className="text-black font-normal cursor-pointer">
          NEWS
        </Typography>
      </div>
    </div>
  );
};

export default InspirationSectionAboutusPage;
