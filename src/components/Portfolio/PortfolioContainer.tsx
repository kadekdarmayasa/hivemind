import React from 'react';
import type { PortfolioProps } from 'types/Portfolio';
import PortfolioItem from './PortfolioItem.tsx';

export default function PortfolioContainer({ portfolios }: { portfolios: PortfolioProps[] }) {
  return (
    <div className="grid grid-cols-12 grid-flow-dense gap-5 mt-14">
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
}
