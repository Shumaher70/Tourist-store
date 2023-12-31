import { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { nanoid } from '@reduxjs/toolkit';
import PlayButton from '../../pages/img/PlayButton';
import CustomButtonExit from '../CustomButtonExit';
import { useInView } from 'react-intersection-observer';

interface VideoSectionProps {
   product: {
      videoImg: string;
      video: string;
      description: string;
   }[];
   videoSectionhandler: (element: boolean) => void;
}

const VideoSection: React.FC<VideoSectionProps> = ({
   product,
   videoSectionhandler,
}) => {
   const [openVideo, setOpenVideo] = useState(false);
   const [indexVideo, setIndexVideo] = useState(0);
   const [isVisible, setIsVisible] = useState(false);
   const { ref, inView } = useInView({ threshold: 0.5 });

   useEffect(() => {
      if (inView) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
      videoSectionhandler(isVisible);
   }, [inView, isVisible, videoSectionhandler]);

   const clickHandler = (event: React.MouseEvent, index: number) => {
      event.preventDefault();
      setIndexVideo(index);
      setOpenVideo(true);
   };

   return (
      <section id="videos" className="relative wrapper">
         <Typography
            ref={ref}
            className="uppercase sm:text-4xl text-3xl font-normal"
         >
            watch videos
         </Typography>
         <div className="mt-10 lg:columns-3 sm:columns-2 columns-1">
            {product.map((item, index) => (
               <div
                  key={nanoid()}
                  className="flex flex-col break-inside-avoid-column"
               >
                  <div
                     onClick={(event) => clickHandler(event, index)}
                     className="relative cursor-pointer"
                  >
                     <img
                        src={require(`../../dammyDB/${item.videoImg}`)}
                        alt={item.videoImg}
                        className="w-full 2xl:h-[300px] xl:h-[250px] lg:h-[200px] sm:h-[200px] object-contein z-50"
                     />
                     <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
                        <PlayButton />
                     </div>
                  </div>
                  <Typography className="uppercase font-normal lg:text-1xl border-b-[1px] border-black mt-2 mb-5">
                     {item.description}
                  </Typography>
               </div>
            ))}
         </div>
         <div
            className={`${
               openVideo ? 'scale-1 opacity-1 flex' : 'scale-0 opacity-0 '
            } fixed justify-center items-center left-0 top-0 w-full h-full px-[5%] py-[5%] z-30 duration-200`}
         >
            <div className="fixed w-full h-full bg-black top-0 left-0 opacity-40" />
            <div className="reltaive w-full h-full flex justify-center items-center">
               <iframe
                  className={`${openVideo ? '' : 'hidden'} relative`}
                  width="100%"
                  height={`${window.innerWidth < 650 ? '50%' : '80%'}`}
                  src={product[indexVideo].video}
                  title={product[indexVideo].video}
               />
            </div>
            <CustomButtonExit
               onClick={() => setOpenVideo(false)}
               buttonStyle="top-5 right-5 cursor-pointer z-30 "
            />
         </div>
      </section>
   );
};

export default VideoSection;
