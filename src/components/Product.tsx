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

  const [widthScreen, setWidthScreen] = useState<boolean>(true);
  const [bottomScreenCard, setBottomScreenCard] = useState<boolean>(false);
  const [topScreenCard, setTopScreenCard] = useState<boolean>(false);

  const screenCardRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth < 640 ? setWidthScreen(false) : setWidthScreen(true);
    });
  }, []);

  useEffect(() => {
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

  return (
    <>
      <div className="flex sm:flex-row flex-col gap-5 sm:pr-5 p-5">
        <div className="flex flex-row sm:flex-wrap lg:basis-3/4 sm:basis-2/4 gap-3 px-3">
          {widthScreen ? (
            Array.isArray(product.mainImg) ? (
              product.mainImg.map((img: string) => {
                return (
                  <div key={nanoid()} className="w-full lg:w-[48.5%]">
                    <img
                      src={require(`../dammyDB/${img}`)}
                      alt={img}
                      className=" brightness-[.95]"
                    />
                  </div>
                );
              })
            ) : (
              ''
            )
          ) : Array.isArray(product.mainImg) ? (
            <div className="flex-col">
              <Slider
                className="py-10"
                slidesPerRow={1}
                adaptiveHeight={true}
                slidesToShow={1}
                duration={200}
                arrows={false}
              >
                {product.mainImg.map((item) => {
                  return (
                    <div key={nanoid()}>
                      <img
                        className="cursor-pointer"
                        src={require(`../dammyDB//${item}`)}
                        alt={item}
                      />
                      <div className="flex justify-center"></div>
                    </div>
                  );
                })}
              </Slider>
              <div className="flex gap-1 overflow-x-scroll ">
                {product.mainImg.map((img: string, index) => {
                  return (
                    <div key={nanoid()} className="mt-2 flex-1">
                      <img
                        src={require(`../dammyDB/${img}`)}
                        alt={img}
                        datatype={String(index)}
                        className="brightness-[.95] object-cover"
                      />
                    </div>
                  );
                })}
              </div>
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
                topScreenCard && !bottomScreenCard ? 'fixed' : 'static'
              }`,
              top: `${
                topScreenCard && !bottomScreenCard
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
                  className=" brightness-[0.95] cursor-pointer border-[1px] border-black"
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
              className="bg-black rounded-none text-white mt-5 w-full"
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
