import Button from "components/Button"
import type { PortfolioProps } from 'types/Portfolio';

export default function CategoryList({
  categoryList,
  onClick
}: {
  categoryList: PortfolioProps['service'][],
  onClick: (categoryId: string | number) => void
}): JSX.Element {
  const uniqueCategorySet = new Set();
  const uniqueCategory: PortfolioProps['service'][] = [];

  categoryList.forEach((obj) => {
    const serialized = JSON.stringify(obj);

    if (!uniqueCategorySet.has(serialized)) {
      uniqueCategorySet.add(serialized);
      uniqueCategory.push(obj);
    }
  });

  return (
    <div className="flex justify-center mt-8">
      <Button
        type="button"
        onClick={() => onClick(0)}
        classNames={[
          '!bg-[#E8EAFF]',
          'h-10', 'px-8',
          '!text-sm',
          'rounded-full',
          'cursor-pointer',
          'ms-0',
          'hover:!bg-palatinate-blue',
          'hover:!text-white',
          'transition-all'
        ]}>
        All
      </Button>

      {uniqueCategory.map((item, index) => {
        return (
          <Button
            key={index}
            type="button"
            onClick={() => onClick(item.id)}
            classNames={[
              '!bg-[#E8EAFF]',
              'h-10', 'px-8',
              '!text-sm',
              'rounded-full',
              'cursor-pointer',
              `ms-5`,
              'hover:!bg-palatinate-blue',
              'hover:!text-white',
              'transition-all'
            ]}
          >
            {item.category}
          </Button>
        );
      })}
    </div>
  )
}