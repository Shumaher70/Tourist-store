import { Typography } from '@material-tailwind/react';

interface HighLightsSectionProps {
  product: { [key: string]: string | string[] };
}

const HighLightsSection = ({ product }: HighLightsSectionProps) => {
  const maketMainDescription = product.maketMainShortDescription as string[];
  return (
    <section className="px-[10%] py-[5%]">
      <div className="flex flex-1 flex-col">
        {product.maketMainTitle && (
          <Typography className="text-4xl font-normal w-2/4 mt-10">
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

export default HighLightsSection;
