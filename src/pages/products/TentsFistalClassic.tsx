import { Product } from '../../components';

import { products } from '../../dammyDB/dammyProducts';

import NavProducts from './NavProducts';

const TentsFistalClassic = () => {
  return (
    <>
      <NavProducts
        content={[
          {
            title: 'Home',
            link: '/',
          },
          {
            title: 'Tents',
            link: '/collections/zelte',
          },
          {
            title: 'Fistral, classic',
            link: '/products/fistral-classic',
          },
        ]}
      />
      <Product product={products.cotegory.tents.fistalClassic} />
    </>
  );
};

export default TentsFistalClassic;