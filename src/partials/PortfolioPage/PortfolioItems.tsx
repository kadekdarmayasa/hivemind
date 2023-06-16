import { motion } from 'framer-motion';
import { fadeVariants, commonMotionProps } from '@utils/motion';
import PortfolioItem from '@components/PortfolioItem';
import type { PortfolioProps } from 'types/Portfolio';

type PortfolioItemsProps = {
  portfolios: PortfolioProps[];
};

export default function PortfolioItems({ portfolios }: PortfolioItemsProps) {
  return (
    <motion.div
      {...commonMotionProps}
      variants={fadeVariants('linear')}
      className="grid grid-cols-12 grid-flow-dense gap-5 mt-14"
    >
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </motion.div>
  );
}
