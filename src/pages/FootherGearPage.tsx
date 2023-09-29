import Filter from '../components/Filter';
import TemplatePage from './TemplatePage';
import { productCard } from '../dammyDB/dammyProducts';
import { useCallback, useState } from 'react';

const gearsFilter = productCard.filter((item) => item.type === 'gears');

const FootherGearPage = () => {
   const [id, setId] = useState('');

   const idHandler = useCallback((id: string) => {
      setId(id);
   }, []);
   return (
      <>
         <TemplatePage
            id={id}
            title="GEAR"
            description="In cooperation with selected brands, we develop equipment and accessories that optimally complement the stay in the green. Here you can find practical gadgets for everyone."
            buttonTitle="Discover products"
            buttonStyle="bg-black text-white"
            img="FootherGearPageImg.webp"
         />

         <Filter productCart={gearsFilter} id={idHandler} />
      </>
   );
};

export default FootherGearPage;
