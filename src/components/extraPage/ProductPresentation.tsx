import { Typography } from '@material-tailwind/react';

interface ProductPresentationProps {
   img1: string;
   img2: string;
   img3: string;
   title: string;
   description: string;
   id?: string;
}

const ProductPresentation = ({
   img1,
   img2,
   img3,
   title,
   description,
   id,
}: ProductPresentationProps) => {
   return (
      <section id={id ? id : '#'} className="w-full pb-[5%]">
         <div className="sm:p-10 sm:mt-0 mt-5">
            <img
               src={require(`./img/${img1}`)}
               alt={img1}
               className="w-full h-full sm:h-[60vh] object-cover"
            />
         </div>

         <div className="flex sm:flex-row flex-col sm:h-[60vh] sm:px-10">
            <div className="lg:w-[50%] w-full h-full sm:pr-5 sm:mt-0 mt-5">
               <img
                  src={require(`./img/${img2}`)}
                  alt={img2}
                  className="w-full h-full object-cover"
               />
            </div>
            <div className="w-full h-full sm:pl-5 sm:mt-0 mt-5">
               <img
                  src={require(`./img/${img3}`)}
                  alt={img3}
                  className="w-full h-full object-cover"
               />
            </div>
         </div>

         <div className="w-full text-center mt-10 flex flex-col items-center px-[10%]">
            <Typography className="uppercase">HEIMPLANET</Typography>
            <Typography className="uppercase font-normal sm:text-4xl text-[8vw] mt-3">
               {title}
            </Typography>
            <Typography className="mt-5 lg:w-2/4">{description}</Typography>
         </div>
      </section>
   );
};

export default ProductPresentation;
