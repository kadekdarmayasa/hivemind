import { motion } from 'framer-motion';
import { transformVariants, commonMotionProps } from '@utils/motion';
import type { PortfolioProps } from 'types/Portfolio';
import Image from 'next/image';

type PortfolioItemProps = {
  portfolio: PortfolioProps;
  index?: number;
};

export default function PortfolioItem({ portfolio, index }: PortfolioItemProps) {
  const { image, orientation, projectName, serviceName } = portfolio;
  const isPortrait = orientation === 'portrait';

  return (
    <motion.div
      {...commonMotionProps}
      variants={transformVariants('linear')}
      custom={index}
      className={`rounded-lg relative md:col-span-6 col-span-12 xl:col-span-4 overflow-hidden group ${
        isPortrait ? 'row-span-4' : 'row-span-2'
      }`}
    >
      <Image
        src={image}
        alt={projectName}
        width={400}
        height={isPortrait ? 600 : 400}
        className="h-full w-full object-cover group-hover:scale-105 transition-all"
        crossOrigin="anonymous"
      />

      <div
        className="absolute h-auto w-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black
      to-blue-gray-800 opacity-40 backdrop-blur-md"
      />

      <div className="absolute bottom-6 group-hover:bottom-8 px-6 transition-all delay-100">
        <h3
          className={`${isPortrait ? 'heading-3' : 'heading-4'}  !text-white font-medium mb-2`}
          style={{ textShadow: '0 5px 10px rgba(0, 0, 0, .2)' }}
        >
          {projectName}
        </h3>
        <p
          className={`!text-white !font-light ${isPortrait ? 'body-1' : 'body-2'}`}
          style={{ textShadow: '0 5px 10px rgba(0, 0, 0, .2)' }}
        >
          {serviceName}
        </p>
      </div>
    </motion.div>
  );
}
