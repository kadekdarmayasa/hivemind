import { IconContext } from 'react-icons';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { transformVariants, hoverVariants, commonMotionProps } from '@utils/motion';
import type { ServiceItemProps } from 'types/ServiceItem';
import Image from 'next/image';
import Link from 'next/link';

const arrowForwardIconProps: IconContext = {
  size: '1.3em',
  className: 'mt-[2px] ml-2 group-hover:ml-3 transition-all',
  color: '#2B3BE5',
};

export function ServiceItem({ service, index }: { service: ServiceItemProps; index: number }) {
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
      className="bg-white shadow-black-sm transition-all w-[350px] 2xl:w-[380px] min-h-[500px] h-auto 2xl:h-[520px] px-10 py-14 flex flex-col items-start rounded-xl"
    >
      <div className="bg-palatinate-blue w-20 h-20 flex items-center justify-center rounded-lg mb-8 2xl:mb-12">
        <Image
          src={service.imageId}
          alt={service.name}
          height={30}
          width={30}
          style={{ width: '40px' }}
        />
      </div>
      <h3 className="heading-3 mb-3">{service.name}</h3>
      <p className="text-brave-purple font-light text-lg leading-9 mb-5">{service.description}</p>
      <Link
        href="/contact"
        className="flex justify-center items-center place-self-start mt-auto relative group text-palatinate-blue"
      >
        {' '}
        <span className="text-lg">Get a consultation</span>
        <IconContext.Provider value={arrowForwardIconProps}>
          <IoArrowForwardSharp />
        </IconContext.Provider>
        <div className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue" />
      </Link>
    </motion.div>
  );
}
