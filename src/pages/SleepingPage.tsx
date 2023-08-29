import Filter from '../components/Filter';

import TemplatePage from './TemplatePage';

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
      <Filter products={{}} />
    </>
  );
};

export default SleepingPage;
