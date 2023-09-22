interface Product {
   cotegory: {
      tents: {
         fistalClassic: {
            [key: string]: string | string[];
         };
      };
   };
}

export const productCard = [
   {
      title: 'fistal, classic',
      price: '699',
      type: 'tents',
      mainImg1: 'mainImg/2.webp',
      mainImg2: 'mainImg/3.webp',
      src: '/products/fistral-classic',
   },
];

export const products: Product = {
   cotegory: {
      tents: {
         fistalClassic: {
            title: 'fistal, classic',
            type: 'tents',
            price: '699',
            src: '/products/fistral-classic',
            description:
               'FISTRAL is the name of our inflatable tent for 1-2 people. Its compact design offers great flexibility and minimal pack size and weight. Two entrances and two vestibules ensure maximum comfort. With a pump, the tent can be pitched in less than a minute. Thanks to the inflatable frame structure, FISTRAL is very stable and thanks to the high-quality materials, it is also weatherproof and durable.',
            scope: [
               '7 + 2 pegs',
               'Repair kit',
               'Guy lines',
               'Packing bag',
               'Pump adapter',
               'Gear Loft',
            ],
            mainImg: [
               'mainImg/1.webp',
               'mainImg/2.webp',
               'mainImg/3.webp',
               'mainImg/4.webp',
               'mainImg/5.webp',
               'mainImg/6.webp',
               'mainImg/7.webp',
               'mainImg/8.webp',
            ],
            maketMainTitle: 'COMPACT DESIGN & SMALL PACK SIZE.',

            maketMainShortDescription1: 'FITS 1-2 PEOPLE',
            maketMainShortDescription2: 'EXTREMELY STABLE WITH LITTLE WEIGHT',
            maketMainShortDescription3: 'IDEAL FOR LIGHT TOURS',

            maketMainImg1: 'maketImg/FITS_1-2_PEOPLE.webp',
            maketMainImg2: 'maketImg/EXTREMELY_STABLE_WITH_LITTLE_WEIGHT.webp',
            maketMainImg3: 'maketImg/IDEAL_FOR_LIGHT_TOURS.webp',
            images: [
               'fistalClassic1.webp',
               'fistalClassic2.webp',
               'fistalClassic3.webp',
               'fistalClassic4.webp',
               'fistalClassic5.jpg',
               'fistalClassic6.webp',
            ],
         },
      },
   },
};

export const maketProduct = {
   fistalClassic: {
      maket: [
         {
            img: 'maketImg/1.webp',
            title: 'LARGE VESTIBULES',
            description:
               'The Fistral has two large compartments to the left and right of the sleeping cabin. Thus, you can comfortably store the luggage outside the sleeping cabin and still have access to his equipment at any time. If you plan to camp on wet ground, you can also use the separately available  to protect the ground underneath the sleeping compartments and your luggage from moisture.',
         },
         {
            img: 'maketImg/2.webp',
            title: 'MULTI-CHAMBER SAFETY SYSTEM',
            description:
               'Our patented multi-chamber safety system allows you to inflate the entire Airframe (IDG) in a single step. After inflation, the Airframe can be divided into individual chambers, which ensures sufficient emergency stability in case one part is damaged, as all other struts remain stable. In addition, it is very easy to locate the defective part in order to repair or replace it.',
         },
         {
            img: 'maketImg/3.webp',
            title: 'SMALL PACK SIZE',
            description:
               'The Fistral is our tent with the smallest pack size (38 x 20 x 20 cm). Especially in combination with our mini pump (sold separately), the Fistral is the perfect choice for bikepacking, hiking or solo camping.',
         },
         {
            img: 'maketImg/4.jpg',
            title: 'THE NEW MATERIAL',
            description:
               'We have significantly improved the fabric quality of our tents. From now on, we use 40D High Tenacity Polyester with Double Ripstop throughout all our tents. This fabric has a higher tensile strength than regular polyester yarns. Accordingly, our new tent fabric has a higher tear strength. In addition, it is lighter, falls better, rustles less and is softer to the touch.',
         },
         {
            img: 'maketImg/5.webp',
            title: 'TWO-LAYER CONSTRUCTION',
            description:
               'The air struts feature a durable two-layer construction: an extra airtight TPU bladder keeps the air inside and the outer jacket made of high-strength polyester fabric provides support and stability. Before an Airframe leaves production, every single bladder and every single Strut is inflated and checked for pressure loss.',
         },
         {
            img: 'maketImg/6.webp',
            title: 'COLOR-CODING',
            description:
               'Your Heimplanet tent initially consists of three parts: Inner tent, Flysheet and Airframe. Before the first use, the so-called First Assembly is carried out. This involves hooking the Flysheet into the Airframe and then attaching the inner tent to the flysheet. Dont worry, the included instructions will help you with this! To simplify this process, we use color coding that tells you which connections go where. After the first assembly the whole tent forms one unit and there are no disturbing single parts. From then on its simply roll out, inflate and ready!',
         },
      ],
   },
};

export const videosProduct = {
   fistalClassic: {
      video: [
         {
            videoImg: 'videoImg/fistalClassic1.jpg',
            video: 'https://www.youtube.com/embed/1BDhIBw6guM',
            description: 'FISTRAL - RELAUNCH',
         },
         {
            videoImg: 'videoImg/fistalClassic3.webp',
            video: 'https://www.youtube.com/embed/aMiyr0WYh10',
            description: 'USER VIDEO - MATHIAS PETTERSEN (V1)',
         },
         {
            videoImg: 'videoImg/fistalClassic2.webp',
            video: 'https://www.youtube.com/embed/CBHHjZYIUkc',
            description: 'FISTRAL - SET UP',
         },
      ],
   },
};
