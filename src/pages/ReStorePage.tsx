import Filter from '../components/Filter';
import TemplatePage from './TemplatePage';

const ReStorePage = () => {
  return (
    <>
      <TemplatePage
        title="RE:STORE"
        description="Here you can find more information about our Re:Store program"
        buttonTitle="DISCOVER PRODUCTS"
        buttonStyle="bg-black text-white"
        img="ReStorePageImg.webp"
      />

      <Filter />
    </>
  );
};

export default ReStorePage;
