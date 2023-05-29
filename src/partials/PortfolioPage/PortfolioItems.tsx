import React from 'react';
import PortfolioItem from '@components/PortfolioItem';
import type { PortfolioProps } from 'types/Portfolio';

export default function PortfolioItems({
  portfolios,
}: {
  portfolios: PortfolioProps[];
}) {
  return (
    <div className="grid grid-cols-12 grid-flow-dense gap-5 mt-14">
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
}
