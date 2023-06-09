import { useMemo } from 'react';
import parse from 'html-react-parser';
import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { transformVariants, hoverVariants } from '@utils/motion/variants';
import type { OurValuesProps } from 'types/OurValues';

type OurValueItemProps = {
  ourValue: OurValuesProps;
  index: number;
};

export function OurValueItem({
  ourValue,
  index,
}: OurValueItemProps): JSX.Element {
  const { id, value, description } = ourValue;

  const checkmarkIconProps: IconContext = useMemo(
    () => ({
      size: '2em',
      color: '#5BFBD8',
      className: '-mt-1',
    }),
    [],
  );

  const motionProps = {
    custom: index,
    initial: 'hidden',
    whileHover: 'hover',
    whileInView: 'visible',
    variants: {
      ...transformVariants('linear'),
      ...hoverVariants(1.02, '0px 5px 25px rgba(0, 0, 0, 0.05)'),
    },
    viewport: { once: true },
  };

  return (
    <motion.div
      {...motionProps}
      key={id}
      className="cursor-default w-full sm:w-[550px] xl:w-[48%] 2xl:w-[570px] rounded-lg
      bg-white sm:px-12 sm:py-14 px-8 py-12 shadow-black-sm transition-all"
    >
      <div className="flex items-center justify-start">
        <h3 className="heading-3 -mt-1 mr-2 w-auto">{value}</h3>
        <IconContext.Provider value={checkmarkIconProps}>
          <IoCheckmarkCircleOutline />
        </IconContext.Provider>
      </div>
      <p className="text-brave-purple font-light text-lg leading-9 mt-5">
        {parse(description)}
      </p>
    </motion.div>
  );
}
