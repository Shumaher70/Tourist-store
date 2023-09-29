import Filter from '../components/Filter';
import { productCard } from '../dammyDB/dammyProducts';

import TemplatePage from './TemplatePage';

const sleepingFilter = productCard.filter((item) =>
   item.src.includes('sleeping')
);

const SleepingPage = () => {
   return (
      <>
         <TemplatePage
            title="SLEEPING"
            description="When it comes to camping and outdoor activities, sleeping bags and sleeping pads are essential pieces of equipment. These two items play an important role for a comfortable and restful sleep outdoors."
            img="SleepingPageImg.jpg"
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
         />
         <Filter productCart={sleepingFilter} />
      </>
   );
};

export default SleepingPage;
