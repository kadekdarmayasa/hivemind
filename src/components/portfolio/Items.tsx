import Image from 'next/image';
import { Ref, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useScreenSize } from '@hooks/useScreenSize';
import { fadeVariants, commonMotionProps } from '@utils/motion';
import type PortfolioItemType from 'types/PortfolioItem';
import { VIEWPORT_SIZE } from '@constants/index';
import PortfolioItem from '../common/PortfolioItem';
import emptyIllustration from '../../../public/images/empty-illustration.svg';

interface ItemsProps {
  portfolios: PortfolioItemType[];
  isLoading: boolean;
}

const Items = forwardRef(({ portfolios, isLoading }: ItemsProps, ref: Ref<HTMLDivElement>) => {
  const customIndexs = [2, 0, 1];
  const { screenSize } = useScreenSize();
  const getScreenWidth = () => screenSize.width || window.innerWidth;

  if (!isLoading && portfolios.length === 0) {
    return (
      <div className="mt-20 text-lg flex flex-col items-center ">
        <Image
          src={emptyIllustration}
          alt="Empty Illustration"
          width={400}
          className="min-w-[300px]"
        />
        <p className="text-center mt-10 text-brave-purple">No Portfolio Yet</p>
      </div>
    );
  }

  return (
    <motion.div
      {...commonMotionProps}
      variants={fadeVariants('linear')}
      className="grid grid-cols-12 gap-5 mt-14"
    >
      {portfolios.map((portfolio, index) => {
        if (portfolios.length === index + 1) {
          return (
            <PortfolioItem
              ref={ref}
              key={portfolio.id}
              portfolio={portfolio}
              index={getScreenWidth() > VIEWPORT_SIZE.MOBILE ? customIndexs[(index + 1) % 3] : 0}
            />
          );
        }

        return (
          <PortfolioItem
            key={portfolio.id}
            portfolio={portfolio}
            index={getScreenWidth() > VIEWPORT_SIZE.MOBILE ? customIndexs[(index + 1) % 3] : 0}
          />
        );
      })}
    </motion.div>
  );
});

export default Items;
