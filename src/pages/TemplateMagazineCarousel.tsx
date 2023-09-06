import { Typography } from '@material-tailwind/react';
import { nanoid } from 'nanoid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const dammyTamplateMagazineCarousele = [
  { img: 'TemplateMagazineCarouselImg1.jpg', description: 'Adventure' },
  { img: 'TemplateMagazineCarouselImg2.webp', description: 'Collaboration' },
  { img: 'TemplateMagazineCarouselImg3.jpg', description: 'Projects' },
  {
    img: 'TemplateMagazineCarouselImg4.webp',
    description: 'HPT GOURMET CAMPING',
  },
];

const TemplateMagazineCarousel = (): JSX.Element => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      className=""
      containerClass="container min-w-full border-b-[1px] border-black py-[5%] border-t-[1px] border-black"
      draggable
      focusOnSelect={false}
      infinite
      itemClass="p-1"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <Typography className="h-full font-normal text-3xl flex justify-center items-center ">
        Filter by categories
      </Typography>
      {dammyTamplateMagazineCarousele.map((item) => (
        <div key={nanoid()} className="flex flex-col w-full h-full">
          <div className="w-full h-full">
            <img
              className="cursor-pointer relative brightness-[.7] object-cove w-full h-full"
              src={require(`./img/${item.img}`)}
              draggable="false"
              alt="TemplateMagazineCarouselImg1"
            />
          </div>
          <div className="absolute bottom-5 left-5">
            <Typography className="uppercase font-normal text-white ">
              {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TemplateMagazineCarousel;
