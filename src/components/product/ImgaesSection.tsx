import { nanoid } from '@reduxjs/toolkit';

interface imagesSectionProps {
   imges: string[] | string;
}

const ImgaesSection: React.FC<imagesSectionProps> = ({ imges }) => {
   const img = imges as string[];

   const getCustomStyle = (index: number) => {
      if (index === 0) {
         return 'h-[20rem]';
      } else if (index === 1 || index === 2) {
         return 'lg:h-[40rem] sm:h-[30rem] h-[20rem]';
      } else if (index === 3 || index === 4) {
         return 'h-[20rem]';
      } else if (index === 5) {
         return 'lg:h-[40rem] sm:h-[30rem] h-[20rem]';
      } else {
         return '';
      }
   };

   return (
      <section className="wrapper bg-[#f2f2f2]">
         <div className="lg:columns-3 sm:columns-2 columns-1">
            {img.map((img, index) => (
               <img
                  key={nanoid()}
                  src={require(`../../dammyDB/imges/${img}`)}
                  alt={img as string}
                  className={`${getCustomStyle(
                     index
                  )} mb-5 object-cover w-full`}
               />
            ))}
         </div>
      </section>
   );
};

export default ImgaesSection;
