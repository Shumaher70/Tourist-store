import Filter from '../components/Filter';
import TemplatePage from './TemplatePage';

const FootherGearPage = () => {
  return (
    <>
      <TemplatePage
        title="GEAR"
        description="In cooperation with selected brands, we develop equipment and accessories that optimally complement the stay in the green. Here you can find practical gadgets for everyone."
        buttonTitle="Discover products"
        buttonStyle="bg-black text-white"
        img="FootherGearPageImg.webp"
      />
      <Filter></Filter>
    </>
  );
};

export default FootherGearPage;
