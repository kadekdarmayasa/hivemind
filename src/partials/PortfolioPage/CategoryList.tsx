import { motion } from 'framer-motion';
import { fadeVariants, commonMotionProps } from '@utils/motion';
import type { PortfolioProps } from 'types/Portfolio';
import Button from '@components/Button';

type CategoryListProps = {
  categoryList: {
    serviceId: PortfolioProps['serviceId'];
    serviceName: PortfolioProps['serviceName'];
  }[];
  onClick: (categoryId: number) => void;
};

function filterUniqueCategories(categoryList: CategoryListProps['categoryList']) {
  const uniqueCategories = categoryList.reduce((unique, category) => {
    const serialized = JSON.stringify(category);
    const containsCurrent = unique.some((item) => JSON.stringify(item) === serialized);

    if (!containsCurrent) unique.push(category);
    return unique;
  }, [] as CategoryListProps['categoryList']);

  return uniqueCategories;
}

export default function CategoryList({ categoryList, onClick }: CategoryListProps) {
  const uniqueCategories = filterUniqueCategories(categoryList);

  return (
    <div className="flex lg:justify-center mt-14 overflow-auto whitespace-nowrap" id="categoryList">
      <motion.div {...commonMotionProps} variants={fadeVariants('linear')}>
        <Button
          isPrimary
          type="button"
          onClick={() => onClick(0)}
          className=" h-10 px-8 !text-sm rounded-full cursor-pointer ms-0 transition-all !shadow-none"
        >
          All
        </Button>
      </motion.div>

      {uniqueCategories.map(({ serviceId, serviceName }, index) => (
        <motion.div
          key={serviceId}
          custom={index}
          {...commonMotionProps}
          variants={fadeVariants('linear')}
        >
          <Button
            key={index}
            isPrimary
            type="button"
            onClick={() => onClick(serviceId)}
            className="!bg-[#E8EAFF] h-10 px-8 !text-sm rounded-full !shadow-none cursor-pointer ms-5 !text-palatinate-blue hover:!bg-palatinate-blue hover:!text-white transition-all w-auto"
          >
            {serviceName}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
