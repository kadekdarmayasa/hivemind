import { motion } from 'framer-motion';
import { fadeVariants } from '@utils/motion/variants';
import PortfolioItem from '@components/PortfolioItem';
import type { PortfolioProps } from 'types/Portfolio';

export default function PortfolioItems({
  portfolios,
}: {
  portfolios: PortfolioProps[];
}): JSX.Element {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeVariants('linear')}
      viewport={{ once: true }}
      className="grid grid-cols-12 grid-flow-dense gap-5 mt-14"
    >
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </motion.div>
  );
}
