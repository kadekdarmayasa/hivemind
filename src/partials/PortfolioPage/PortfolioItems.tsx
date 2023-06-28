import { motion } from 'framer-motion';
import CONFIG from '@globals/config';
import { useScreenSize } from '@hooks/useScreenSize';
import { fadeVariants, commonMotionProps } from '@utils/motion';
import PortfolioItem from '@components/PortfolioItem';
import type { PortfolioProps } from 'types/Portfolio';

type PortfolioItemsProps = {
  portfolios: PortfolioProps[];
};

export default function PortfolioItems({ portfolios }: PortfolioItemsProps) {
  const customIndexs = [2, 0, 1];
  const [screenSize] = useScreenSize();

  const getScreenWidth = () => screenSize.width || window.innerWidth;

  return (
    <motion.div
      {...commonMotionProps}
      variants={fadeVariants('linear')}
      className="grid grid-cols-12 grid-flow-dense gap-5 mt-14"
    >
      {portfolios.map((portfolio, index) => (
        <PortfolioItem
          key={portfolio.id}
          portfolio={portfolio}
          index={
            index === 0 || getScreenWidth() > CONFIG.MOBILE_VIEWPORT_SIZE
              ? index
              : customIndexs[index % 3]
          }
        />
      ))}
    </motion.div>
  );
}
