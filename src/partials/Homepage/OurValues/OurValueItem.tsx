import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import { transformVariants, hoverVariants, commonMotionProps } from '@utils/motion';
import type { OurValuesProps } from 'types/OurValues';

type OurValueItemProps = {
  ourValue: OurValuesProps;
  index: number;
};

export function OurValueItem({ ourValue, index }: OurValueItemProps) {
  const { value, description } = ourValue;

  const motionProps = {
    ...commonMotionProps,
    custom: index,
    whileHover: 'hover',
    variants: {
      ...transformVariants('linear'),
      ...hoverVariants(1.02, '0px 5px 25px rgba(0, 0, 0, 0.05)'),
    },
  };

  return (
    <motion.div
      {...motionProps}
      className="bg-white sm:w-[550px] w-full xl:w-[48%] 2xl:w-[570px] min-h-[300px] h-auto rounded-lg shadow-black-sm px-12 py-12"
    >
      <h3 className="heading-3">{value}</h3>
      <p className="mt-4 text-brave-purple font-light text-lg leading-9">{parse(description)}</p>
    </motion.div>
  );
}
