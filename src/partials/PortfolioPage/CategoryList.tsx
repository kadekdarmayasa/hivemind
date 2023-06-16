import { motion, MotionProps } from 'framer-motion';
import { fadeVariants } from '@utils/motion/variants';
import type { PortfolioProps } from 'types/Portfolio';
import Button from '@components/Button';

type CategoryListProps = {
  categoryList: PortfolioProps['service'][];
  onClick: (categoryId: string) => void;
};

function filterUniqueCategories(
  categoryList: CategoryListProps['categoryList'],
): CategoryListProps['categoryList'] {
  const uniqueCategories = categoryList.reduce((unique, category) => {
    const serialized = JSON.stringify(category);
    if (!unique.some((item) => JSON.stringify(item) === serialized)) {
      unique.push(category);
    }
    return unique;
  }, [] as CategoryListProps['categoryList']);

  return uniqueCategories;
}

export default function CategoryList({ categoryList, onClick }: CategoryListProps): JSX.Element {
  const uniqueCategories = filterUniqueCategories(categoryList);
  const commonMotionProps: MotionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  return (
    <div className="flex lg:justify-center mt-8 overflow-auto whitespace-nowrap" id="categoryList">
      <motion.div {...commonMotionProps} variants={fadeVariants('linear')}>
        <Button
          type="button"
          onClick={() => onClick('0')}
          className="!bg-palatinate-blue h-10 px-8 !text-sm !text-white rounded-full cursor-pointer ms-0 transition-all"
        >
          All
        </Button>
      </motion.div>

      {uniqueCategories.map(({ id, name }, index) => (
        <motion.div
          key={id}
          {...commonMotionProps}
          variants={fadeVariants('linear')}
          custom={index}
        >
          <Button
            key={index}
            type="button"
            onClick={() => onClick(id)}
            className="!bg-[#E8EAFF] h-10 px-8 !text-sm rounded-full cursor-pointer ms-5 !text-palatinate-blue hover:!bg-palatinate-blue hover:!text-white transition-all w-auto"
          >
            {name}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
