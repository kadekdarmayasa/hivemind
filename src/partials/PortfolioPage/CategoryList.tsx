import React from 'react';
import Button from '@components/Button';
import type { PortfolioProps } from 'types/Portfolio';

export default function CategoryList({
  categoryList,
  onClick,
}: {
  categoryList: PortfolioProps['service'][];
  onClick: (categoryId: string | number) => void;
}) {
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
    <div className="flex lg:justify-center mt-8 overflow-auto whitespace-nowrap" id="categoryList">
      <Button
        type="button"
        onClick={() => onClick(0)}
        className="!bg-palatinate-blue h-10 px-8 !text-sm !text-white rounded-full cursor-pointer ms-0 transition-all"
      >
        All
      </Button>

      {uniqueCategory.map((item, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => onClick(item.id)}
          className="!bg-[#E8EAFF] h-auto px-8 !text-sm rounded-full cursor-pointer ms-5 !text-palatinate-blue hover:!bg-palatinate-blue hover:!text-white transition-all !w-[200px]"
        >
          {item.category}
        </Button>
      ))}
    </div>
  );
}
