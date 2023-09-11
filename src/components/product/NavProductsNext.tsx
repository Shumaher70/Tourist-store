import { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { Button, Typography } from '@material-tailwind/react';
import AnchorLink from '../../components/AnchorLink';

interface NavProductsNextProps {
  product: { [key: string]: string | string[] };
  beforeBottmElement: number;
}

const NavProductsNext = ({
  product,
  beforeBottmElement,
}: NavProductsNextProps) => {
  const navHeightSlice = useSelector(
    (state: RootState) => state.size.heightNav
  );

  const highlightsRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const detailedInformationRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const scroll = useRef<HTMLDivElement>(null);

  const [highlights, SetHighlights] = useState(false);
  const [videos, setVideos] = useState(false);
  const [detailedInformation, setDetailedInformation] = useState(false);
  const [reviews, setReviews] = useState(false);

  const [scrollTop, setScrollTop] = useState<number>(0);
  const [navFixed, setNavFixed] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const offsetHighlights = Number(
        '-' + highlightsRef.current?.offsetHeight
      );

      const offsetvideos = Number('-' + videosRef.current?.offsetHeight);

      const offsetdetailedInformation = Number(
        '-' + detailedInformationRef.current?.offsetHeight
      );

      const offsetReviews = Number('-' + reviewsRef.current?.offsetHeight);

      if (
        highlightsRef.current?.getBoundingClientRect().top &&
        videosRef.current?.getBoundingClientRect().top &&
        detailedInformationRef.current?.getBoundingClientRect().top &&
        reviewsRef.current?.getBoundingClientRect().top
      )
        if (
          highlightsRef.current?.getBoundingClientRect().top >= offsetHighlights
        ) {
          SetHighlights(true);
          setVideos(false);
          setDetailedInformation(false);
          setReviews(false);
        } else if (
          videosRef.current?.getBoundingClientRect().top <
            +navHeightSlice + 70 &&
          videosRef.current?.getBoundingClientRect().top >= offsetvideos
        ) {
          SetHighlights(false);
          setVideos(true);
          setDetailedInformation(false);
          setReviews(false);
        } else if (
          detailedInformationRef.current?.getBoundingClientRect().top <
            +navHeightSlice + 70 &&
          detailedInformationRef.current?.getBoundingClientRect().top >=
            offsetdetailedInformation
        ) {
          SetHighlights(false);
          setVideos(false);
          setDetailedInformation(true);
          setReviews(false);
        } else if (
          reviewsRef.current?.getBoundingClientRect().top <
            +navHeightSlice + 70 &&
          reviewsRef.current?.getBoundingClientRect().top >= offsetReviews
        ) {
          SetHighlights(false);
          setVideos(false);
          setDetailedInformation(false);
          setReviews(true);
        } else {
          SetHighlights(false);
          setVideos(false);
          setDetailedInformation(false);
          setReviews(false);
        }
    });
  }, [navHeightSlice]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(scroll.current?.getBoundingClientRect().top ?? 0);
    });
  }, [scrollTop]);

  useEffect(() => {
    if (beforeBottmElement < 0) {
      return setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  }, [beforeBottmElement]);

  return (
    <div
      ref={scroll}
      style={
        navFixed
          ? {
              position: 'fixed',
              top: `${navHeightSlice}px`,
            }
          : {}
      }
      className="px-[10%] flex justify-between items-center w-full h-[60px] bg-white z-10 border-y-[1px] border-[rgba(133,133,133,.2)]"
    >
      <div className="lg:gap-10 sm:gap-5 md:flex hidden items-center">
        <AnchorLink href="#mission" offset={+navHeightSlice + 60}>
          <div
            style={
              highlights
                ? { borderBottom: '2px solid black' }
                : { border: 'none' }
            }
          >
            <Typography className="text-black font-normal cursor-pointer uppercase">
              Highlights
            </Typography>
          </div>
        </AnchorLink>
        <AnchorLink href="#store" offset={+navHeightSlice + 60}>
          <div
            style={
              videos ? { borderBottom: '2px solid black' } : { border: 'none' }
            }
          >
            <Typography className="text-black font-normal cursor-pointer uppercase">
              Videos
            </Typography>
          </div>
        </AnchorLink>
        <AnchorLink href="#news" offset={+navHeightSlice + 60}>
          <div
            style={
              detailedInformation
                ? { borderBottom: '2px solid black' }
                : { border: 'none' }
            }
          >
            <Typography className="text-black font-normal cursor-pointer uppercase">
              Detailed information
            </Typography>
          </div>
        </AnchorLink>
        <AnchorLink href="#news" offset={+navHeightSlice + 60}>
          <div
            style={
              reviews ? { borderBottom: '2px solid black' } : { border: 'none' }
            }
          >
            <Typography className="text-black font-normal cursor-pointer uppercase">
              Reviews
            </Typography>
          </div>
        </AnchorLink>
      </div>
      <div className="ml-5 flex gap-5 md:justify-start justify-between w-full md:w-auto">
        <div>
          <Typography className="uppercase sm:text-1xl text-sm">
            {product.title}
          </Typography>
          <Typography>€ {product.price},00</Typography>
        </div>
        <Button className="rounded-none bg-black">add to cart</Button>
      </div>
    </div>
  );
};

export default NavProductsNext;
