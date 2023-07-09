import { IconContext } from 'react-icons';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import type { PortfolioProps } from 'types/Portfolio';
import Link from 'next/link';
import PortfolioItem from '@components/PortfolioItem';

const arrowForwardIconProps: IconContext = {
  size: '1.3em',
  className: 'mt-[2px] ml-1 group-hover:ml-2 transition-all',
  color: '#2B3BE5',
};

export default function Portfolio({ portfolios }: { portfolios: PortfolioProps[] }) {
  return (
    <section className="mt-32 2xl:mt-44">
      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex flex-col items-center text-center"
      >
        <motion.small
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={0}
          className="label-text"
        >
          Our Portfolio
        </motion.small>
        <motion.h2
          {...commonMotionProps}
          variants={transformVariants('linear')}
          custom={1}
          className="heading-2"
        >
          Our Work and Case Study
        </motion.h2>
      </motion.div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="grid grid-cols-12 grid-flow-dense gap-5 mt-14"
      >
        {portfolios.map((portfolio, index) => (
          <PortfolioItem key={portfolio.id} index={[0, 1, 2][index % 3]} portfolio={portfolio} />
        ))}
      </motion.div>

      <motion.div {...commonMotionProps} variants={transformVariants('linear')}>
        <Link
          href="/portolio"
          className="flex justify-center items-center mt-8 mx-auto relative group w-[170px] text-palatinate-blue"
        >
          <span className="text-lg">See all portfolios</span>
          <IconContext.Provider value={arrowForwardIconProps}>
            <IoArrowForwardSharp />
          </IconContext.Provider>
          <div
            className="absolute h-[2px] rounded-lg w-0 left-0 group-hover:w-full
            -bottom-1 opacity-0 group-hover:opacity-100 transition-all bg-palatinate-blue"
          />
        </Link>
      </motion.div>
    </section>
  );
}
