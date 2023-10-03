import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TemplateMagazineCard from './TemplateMagazineCard';
import TemplateMagazineCarousel from './TemplateMagazineCarousel';
import { Typography } from '@material-tailwind/react';

const DesignSpacePage = () => {
   const sizeSlice = useSelector((state: RootState) => state.size.heightNav);
   return (
      <>
         <div
            style={{ marginTop: `${sizeSlice}px` }}
            className="flex flex-col gap-5 px-[10%] py-[3%] bg-gray-100"
         >
            <Typography className="sm:w-2/4 w-full sm:text-7xl text-4xl font-bold">
               DESIGN SPACE
            </Typography>

            <TemplateMagazineCard
               title="STORE TENT CORRECTLY"
               description="Sustainability is very important to us, so our tents are designed to accompany you for a lifetime. For the longest possible life and to avoid material damage, the correct"
               img="DesignSpacePage1.webp"
               buttonDescription="READ MORE"
            />

            <TemplateMagazineCard
               title="HEIMPLANET HOODIE & CREWNECK"
               description="We have long been looking for something warm to put on, which will accompany us in any situation. Because we could not find anything that meets our requirements, we simply developed it ourselves."
               img="DesignSpacePage2.webp"
               buttonDescription="READ MORE"
            />

            <TemplateMagazineCard
               title="OUR NEW TENT MODEL: KIRRA"
               description="In terms of pack size and weight, we wanted to close the gap between Fistral and Cave. The result is our new Kirra model - a tent for 2 people with lots of equipment."
               img="DesignSpacePage3.webp"
               buttonDescription="READ MORE"
            />

            <TemplateMagazineCard
               title="THE GREAT MAKEOVER"
               description="After more than 10 years HEIMPLANET it was time to question the status quo. The result was the decision to overhaul our entire tent collection."
               img="DesignSpacePage4.webp"
               buttonDescription="READ MORE"
            />

            <TemplateMagazineCard
               title="BRAND OF THE YEAR | CARRY AWARDS IX"
               description="We are so excited to share and celebrate this news with you!"
               img="DesignSpacePage5.webp"
               buttonDescription="READ MORE"
            />

            <TemplateMagazineCard
               title="SLING POCKET XL"
               description="It feels like 2021 is the year of the Sling Pocket XL!"
               img="DesignSpacePage6.webp"
               buttonDescription="READ MORE"
            />

            <TemplateMagazineCard
               title="TENT TECHNOLOGY"
               description="Our patented multi-chamber safety system allows you to youto inflate the entire Airframe (IDG) in a single step."
               img="DesignSpacePage7.webp"
               buttonDescription="READ MORE"
            />

            <TemplateMagazineCard
               title="DYECOSHELL™"
               description="For us, longevity means that all materials used are of the same [high] quality. "
               img="DesignSpacePage8.webp"
               buttonDescription="READ MORE"
            />

            <TemplateMagazineCard
               title="DCOOLEVER TECHNOLOGY"
               description="Functional shirts are ideal for sports. Regular t-shirts & longsleeves are perfect for everyday wear. The HEIMPLANET COOLEVER shirts combine the best of both."
               img="DesignSpacePage9.webp"
               buttonDescription="READ MORE"
            />
         </div>

         <TemplateMagazineCarousel />
      </>
   );
};

export default DesignSpacePage;
