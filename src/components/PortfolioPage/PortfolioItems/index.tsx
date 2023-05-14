import { PortfolioContainer } from 'components/Portfolio';
import type { PortfolioProps } from 'types/Portfolio';

export default function PortfolioItems({ portfolios }: { portfolios: PortfolioProps[] }): JSX.Element {
  return (
    <PortfolioContainer portfolios={portfolios} />
  )
}