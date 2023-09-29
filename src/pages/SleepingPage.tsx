import { useCallback, useState } from 'react';
import Filter from '../components/Filter';
import { productCard } from '../dammyDB/dammyProducts';

import TemplatePage from './TemplatePage';

const sleepingFilter = productCard.filter((item) =>
   item.src.includes('sleeping')
);

const SleepingPage = () => {
   const [id, setId] = useState('');

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);

   return (
      <>
         <TemplatePage
            id={id}
            title="SLEEPING"
            description="When it comes to camping and outdoor activities, sleeping bags and sleeping pads are essential pieces of equipment. These two items play an important role for a comfortable and restful sleep outdoors."
            img="SleepingPageImg.jpg"
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
         />
         <Filter id={idHandler} productCart={sleepingFilter} />
      </>
   );
};

export default SleepingPage;
