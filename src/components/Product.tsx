import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useEffect, useState, useRef } from 'react';

import { Button, Typography } from '@material-tailwind/react';

import Faq from './Faq';
import Slider from 'infinite-react-carousel';
import { RootState } from '../store';

interface ProductProps {
  product: { [key: string]: string | string[] };
}

const Product = ({ product }: ProductProps) => {
  const mainNavHeight = useSelector((state: RootState) => state.size.heightNav);

  const screenCardRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [clickImg, setClickImg] = useState<boolean>(false);
  const [widthScreen, setWidthScreen] = useState<boolean>(false);
  const [bottomScreenCard, setBottomScreenCard] = useState<boolean>(false);
  const [topScreenCard, setTopScreenCard] = useState<boolean>(false);
  const [cardSlide, setcardSlide] = useState<boolean>(false);
  const [initialMainImg, setInitialMainImg] = useState<number>(0);
  const [antimationMainImg, setAntimationMainImg] = useState<string>('');

  useEffect(() => {
    setcardSlide(true);
  }, []);

  useEffect(() => {
    window.innerWidth < 640 ? setWidthScreen(true) : setWidthScreen(false);
    window.addEventListener('resize', () => {
      window.innerWidth < 640 ? setWidthScreen(true) : setWidthScreen(false);
    });
  }, []);

  useEffect(() => {
    if (screenCardRef.current?.getBoundingClientRect().bottom)
      if (window.scrollY >= +mainNavHeight - 40) {
        setTopScreenCard(true);
      } else {
        setTopScreenCard(false);
      }
    window.addEventListener('scroll', () => {
      if (screenCardRef.current?.getBoundingClientRect().bottom)
        if (window.scrollY >= +mainNavHeight - 40) {
          setTopScreenCard(true);
        } else {
          setTopScreenCard(false);
        }
    });
  }, [mainNavHeight]);

  useEffect(() => {
    if (screenCardRef.current?.getBoundingClientRect())
      if (cardRef.current?.getBoundingClientRect())
        if (
          screenCardRef.current?.getBoundingClientRect().bottom -
            +mainNavHeight <=
          cardRef.current?.offsetHeight + 20
        ) {
          setBottomScreenCard(true);
          setTopScreenCard(false);
        } else {
          setBottomScreenCard(false);
        }

    window.addEventListener('scroll', () => {
      if (screenCardRef.current?.getBoundingClientRect())
        if (cardRef.current?.getBoundingClientRect())
          if (
            screenCardRef.current?.getBoundingClientRect().bottom -
              +mainNavHeight <=
            cardRef.current?.offsetHeight + 20
          ) {
            setBottomScreenCard(true);
            setTopScreenCard(false);
          } else {
            setBottomScreenCard(false);
          }
    });
  }, [mainNavHeight]);

  useEffect(() => {
    const animationOpenMainImg: string =
      'h-full w-full top-0 left-0 opacity-100';
    const animationCloseMainImg: string = 'h-0 w-0 top-[50%] left-0 opacity-0';

    clickImg
      ? setAntimationMainImg(animationOpenMainImg)
      : setAntimationMainImg(animationCloseMainImg);
  }, [clickImg]);

  const clickMainImgHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const inititalSlide = Number(
      event.currentTarget.getAttribute('data-initial_slide')
    )
      ? Number(event.currentTarget.getAttribute('data-initial_slide'))
      : 0;

    setInitialMainImg(inititalSlide);

    setClickImg(true);
  };

  return (
    <>
      {clickImg && (
        <div
          className={`${antimationMainImg} ease-linear duration-[500ms] z-[99] flex items-center fixed bg-white my-auto `}
        >
          <Slider
            slidesPerRow={1}
            adaptiveHeight={true}
            slidesToShow={1}
            duration={200}
            arrows={true}
            initialSlide={initialMainImg}
            className="w-full"
            modeCenter={true}
          >
            {Array.isArray(product.mainImg)
              ? product.mainImg.map((img) => {
                  return (
                    <div key={nanoid()}>
                      <div className="flex justify-center max-h-[600px]">
                        <div className="flex justify-center basis-4/6">
                          <img
                            src={require(`../dammyDB/${img}`)}
                            alt={img}
                            className="object-cover brightness-95"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
              : ''}
          </Slider>
        </div>
      )}

      <div className="flex sm:flex-row flex-col gap-5 sm:pr-5 p-5">
        <div className="flex flex-row sm:flex-wrap lg:basis-3/5 sm:basis-2/4 gap-3 sm:px-3">
          {!widthScreen ? (
            Array.isArray(product.mainImg) ? (
              product.mainImg.map((img: string, index: number) => {
                return (
                  <div
                    onClick={clickMainImgHandler}
                    key={nanoid()}
                    className="w-full lg:w-[48.5%]"
                    data-initial_slide={String(index)}
                  >
                    <img
                      src={require(`../dammyDB/${img}`)}
                      alt={img}
                      className=" brightness-[.95] cursor-pointer"
                    />
                  </div>
                );
              })
            ) : (
              ''
            )
          ) : Array.isArray(product.mainImg) ? (
            <div className="flex-col flex-1">
              {cardSlide && (
                <Slider
                  className="py-10"
                  slidesPerRow={1}
                  adaptiveHeight={true}
                  slidesToShow={1}
                  duration={200}
                  arrows={false}
                  dots={true}
                  dotsClass="product-dots"
                  appendDots={(e: number) => {
                    return (
                      <ul style={{ position: 'relative' }}>
                        {e}
                        <div className="w-full flex justify-between absolute -z-10 gap-5">
                          {Array.isArray(product.mainImg)
                            ? product.mainImg.map((img) => (
                                <li key={nanoid()} className="flex flex-1 ">
                                  {
                                    <img
                                      src={require(`../dammyDB/${img}`)}
                                      alt={img}
                                      className="object-cover brightness-95"
                                    />
                                  }
                                </li>
                              ))
                            : ''}
                        </div>
                      </ul>
                    );
                  }}
                >
                  {product.mainImg.map((item) => {
                    return (
                      <div onClick={clickMainImgHandler} key={nanoid()}>
                        <img
                          className="cursor-pointer brightness-95"
                          src={require(`../dammyDB/${item}`)}
                          alt={item}
                        />
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
          ) : (
            ''
          )}
        </div>

        <div
          className={`flex flex-1 flex-col ${
            bottomScreenCard ? 'justify-end' : 'justify-start'
          }`}
          ref={screenCardRef}
        >
          <div
            style={{
              position: `${
                topScreenCard && !bottomScreenCard && !widthScreen
                  ? 'fixed'
                  : 'static'
              }`,
              top: `${
                topScreenCard && !bottomScreenCard && !widthScreen
                  ? `${20 + +mainNavHeight}px`
                  : ''
              }`,
            }}
            className={`${topScreenCard ? 'flex-1 pr-5' : 'w-full'}`}
            ref={cardRef}
          >
            {product.title && (
              <Typography className="font-bold text-3xl uppercase">
                {product.title}
              </Typography>
            )}

            {product.price && (
              <Typography className="font-normal text-2xl mt-2 font-['sans-serif']">
                € {product.price},00
              </Typography>
            )}

            {product.price && (
              <Typography className="font-normal mt-2 ">
                incl. 19% VAT (VAT will be re-calculated at the checkout) plus.
                <NavLink
                  className="ml-2 underline cursor-pointer"
                  to="/pages/faq"
                >
                  Shipping
                </NavLink>
              </Typography>
            )}

            <div className="flex border-y-[1px] py-5 mt-2 border-[#f6f6f6]">
              <NavLink to={String(product.src)}>
                <img
                  src={require(`../dammyDB/${product.mainImg[0]}`)}
                  width={60}
                  alt={String(product.tile)}
                />
              </NavLink>
            </div>

            {product.description && (
              <Faq
                title="Show Description"
                description={String(product.description)}
                titleStyle="text-1xl"
              />
            )}

            {product.scope && (
              <Faq title="Show scope of delivery" titleStyle="text-1xl">
                <ul className="list-disc ml-5">
                  {Array.isArray(product.scope)
                    ? product.scope.map((item: string) => (
                        <li key={nanoid()}>{item}</li>
                      ))
                    : []}
                </ul>
              </Faq>
            )}
            <Button
              size="lg"
              className="bg-black text-white rounded-none w-full mt-5"
            >
              <Typography className="w-full">add to cart</Typography>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
