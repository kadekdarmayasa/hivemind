import React from 'react';
import { PortfolioContainer } from '@components/Portfolio';
import type { PortfolioProps } from 'types/Portfolio';

export default function PortfolioItems({ portfolios }: { portfolios: PortfolioProps[] }) {
  return (
    <PortfolioContainer portfolios={portfolios} />
  );
}
