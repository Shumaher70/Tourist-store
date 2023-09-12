import { Typography } from '@material-tailwind/react';

interface HighLightSectionProps {
  product: { [key: string]: string | string[] };
}

const HighLightSection = ({ product }: HighLightSectionProps) => {
  const maketMainDescription = product.maketMainShortDescription as string[];
  return (
    <section className="px-[10%] py-[5%]">
      <div className="flex flex-1 flex-col">
        {product.maketMainTitle && (
          <Typography className="text-4xl font-normal w-2/4">
            {product.maketMainTitle}
          </Typography>
        )}
        <ul>
          {maketMainDescription.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
        <div></div>
      </div>
    </section>
  );
};

export default HighLightSection;
